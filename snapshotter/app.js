var http = require('http'),
    fs = require('fs'),
    
    max = 100,
    count = 0,
    prev;

    //url = 'http://content.guardianapis.com/search?api-key=test&show-tags=all&order-by=newest&use-date=last-modified&page-size=10&callback=jsonpFn';
    url = 'http://content.guardianapis.com/search?api-key=test&show-tags=all&order-by=newest&page-size=10&callback=jsonpFn';

function save(index, data) {
    fs.writeFile("data/" + index, data, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("File was saved: " + index);
        }
    });     
}

function fetch() {
    console.log('Fetching...');

    http.get(url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            if (prev !== body) {
                prev = body;
                save(max + count, body);
                count += 1;
            }

            if (count < max) {
                setTimeout(fetch, 10000)
            }
        });
    }).on('error', function(e) {
          console.log("Got error: ", e);
    });
}

fetch();
