var http = require('http'),
    fs = require('fs'),
    
    pageSize = 10,
    max = 100,
    count = 0,
    idsPrev;

    url = 'http://content.guardianapis.com/search?api-key=test&show-tags=all&order-by=newest&use-date=last-modified&page-size=' + pageSize + '&callback=jsonpFn';
    //url = 'http://content.guardianapis.com/search?api-key=test&show-tags=all&order-by=newest&page-size=10&callback=jsonpFn';

function save(index, data) {
    fs.writeFile("data/" + index, data, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Snapshot saved: " + index);
        }
    });     
}

function haveSameOrder(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function haveSameItems(a, b) {
    if (!a || !b || a.length !== b.length) { return false; }

    var map = [].concat(a).reduce(function(acc, v) {
        acc[v] = true;
        return acc;
    }, {});

    [].concat(b).forEach(function(v) {
        delete map[v];
    });

    return Object.keys(map).length === 0;
}

function fetch() {
    http.get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var ids;

            ids = (body || '').replace(/^jsonpFn\(/, '').replace(/\)$/, '');                
            ids = (((JSON.parse(ids) || {}).response || {}).results || []).map(function(a) { return a.id });

            if (ids.length &&
                    !haveSameOrder(ids, idsPrev) &&
                    (count % 3 || !haveSameItems(ids, idsPrev))
            ) {
                idsPrev = ids;
                save(max + count, body);
                count += 1;
            } else {
                console.log('No change...')
            }

            if (count < max) {
                setTimeout(fetch, 5000)
            }
        });
    }).on('error', function(e) {
          console.log("Got error: ", e);
    });
}

fetch();
