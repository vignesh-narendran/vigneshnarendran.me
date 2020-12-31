$(document).ready(() => {
	let slideOneWidth = 100;
	let isScroll = true;
	// add listener to disable scroll
	$(window).on('scroll mousewheel', (event) => {
		noScroll();
		if (event.originalEvent.wheelDelta >= 0) {
			if ($('#slide-1').width() >= window.innerWidth - 200) {
				isScroll = true;
				var w = $(window).width();
				$('#slide-1').css('width', w);
			} else {
				isScroll = true;
				$('#slide-1').css('width', `${(slideOneWidth += 10)}%`);
			}
		} else {
			if ($('#slide-1').width() < 200) {
				$('#slide-1').css('width', '5px');
				setTimeout(() => {
					isScroll = false;
				}, 1000);
			} else {
				isScroll = true;
				$('#slide-1').css('width', `${(slideOneWidth -= 10)}%`);
			}
		}
	});
	function noScroll() {
		isScroll && window.scrollTo(0, 0);
	}
});
