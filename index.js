$(document).ready(() => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.to('#slide-1', {
		scrollTrigger: {
			trigger: '#slide-1',
			scrub: 2,
			pin: true,
			start: 'top top',
			end: 'bottom top',
			markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
		},
		width: 0,
		ease: 'none',
	});
	gsap.to('#slide-2', {
		scrollTrigger: {
			trigger: '#slide-2',
			scrub: 1,
			pin: true,
			start: 'top top',
			end: 'bottom top',
			markers: { startColor: 'pink', endColor: 'black', fontSize: '12px' },
		},
		top: '0',
		ease: 'none',
	});
});
