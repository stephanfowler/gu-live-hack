console.log('FOOBAR!');

var el = document.querySelector('.content__secondary-column .js-mpu-ad-slot');

if (el) {
    el.insertAdjacentHTML('beforebegin', '<iframe src="http://stephanfowler.com/gu-live-hack/" style="border: 0; float:  left; clear: left; width: 100%; height: 300px; margin: 0 0 72px 0;"></iframe>')
}
