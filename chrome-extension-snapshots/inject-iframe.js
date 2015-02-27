console.log('Loading live newsdesk... SNAPSHOTS');

var articleEl = document.querySelector('.content__secondary-column .js-mpu-ad-slot');
    frontEl = document.querySelectorAll('.fc-slice__item');

if (articleEl) {
    articleEl.insertAdjacentHTML('beforebegin', '<iframe src="http://stephanfowler.com/gu-live-hack/#snapshots" style="border: 0; float:  left; clear: left; width: 100%; height: 300px; margin: 0 0 72px 0;"></iframe>')
}

else if (frontEl && frontEl[1]) {
    frontEl[1].innerHTML = '<iframe src="http://stephanfowler.com/gu-live-hack/#snapshots" style="background; #fff; border: 0; float:  left; clear: left; width: 100%; height: 300px; margin: 0 10px;"></iframe>';document.querySelectorAll('.fc-slice__item')[1].innerHTML = '<iframe src="http://stephanfowler.com/gu-live-hack/" style="background; #fff; border: 0; float:  left; clear: left; width: 100%; height: 280px; margin: 0 10px;"></iframe>';    
}

