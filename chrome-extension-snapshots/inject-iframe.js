console.log('Loading live newsdesk... SNAPSHOTS');

var url = 'http://stephanfowler.com/gu-live-hack/#snapshots',

    articleEl = document.querySelector('.content__secondary-column .js-mpu-ad-slot'),
    frontEl = document.querySelectorAll('.fc-slice__item'),

    editionalised = [
        'business',
        'commentisfree',
        'culture',
        'environment',
        'media',
        'money',
        'sport',
        'technology'
    ],

    editions = [
        'uk',
        'us',
        'au'
    ],

    pathLength,

    isEditionalisedRx = new RegExp('^(' + editions.join('|') + ')\/(' + editionalised.join('|') + ')$'),
    stripEditionRx = new RegExp('^(' + editions.join('|') + ')\/');

function collapsePath(t) {
    if (t) {
        t = t.replace(/^\/|\/$/g, '');
        if (t.match(isEditionalisedRx)) {
            t = t.replace(stripEditionRx, '');
        }
        t = t.split('/');
        t = t.length === 2 && t[0] === t[1] ? [t[0]] : t;
        return t.join('/');
    } else {
        return '';
    }
}

/*
pathLength = collapsePath(window.location.pathname).split('/').length;

if (collapsePath(window.location.pathname) === 'uk') {
    url += '&header=Election%20newsdesk';

} else if (pathLength < 3) {
    url += '&header=' + collapsePath(window.location.pathname) + '%20newsdesk';
}
*/

console.log(url)

if (articleEl) {
    articleEl.insertAdjacentHTML('beforebegin', '<iframe src="' + url + '" style="border: 0; float:  left; clear: left; width: 100%; height: 300px; margin: 0 0 72px 0;"></iframe>')
}

else if (frontEl && frontEl[1]) {
    frontEl[1].innerHTML = '<iframe src="' + url + '" style="background; #fff; border: 0; float:  left; clear: left; width: 100%; height: 300px; margin: 0 10px;"></iframe>';document.querySelectorAll('.fc-slice__item')[1].innerHTML = '<iframe src="http://stephanfowler.com/gu-live-hack/" style="background; #fff; border: 0; float:  left; clear: left; width: 100%; height: 280px; margin: 0 10px;"></iframe>';    
}

