$(document).ready(() => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.to('#slide-1', {
		duration: 5,
		xPercent: 100,
		ease: 'linear',
		scrollTrigger: {
			trigger: '#slide-1',
			markers: {
				startColor: 'orange',
				endColor: 'violet',
				fontSize: '25px',
				indent: 20,
			},
			scrub: 1,
			pin: true,
			anticipatePin: 1,
			start: 'top top',
			end: 'bottom top',
		},
	});
	gsap.to('#slide-2', {
		duration: 5,
		autoAlpha: 1,
		ease: 'linear',
		scrollTrigger: {
			trigger: '#slide-2',
			markers: {
				startColor: 'red',
				endColor: 'green',
				fontSize: '40px',
				indent: 40,
			},
			scrub: 2,
			start: 'top bottom',
			end: 'bottom bottom',
		},
	});
	gsap.to('#slide-2', {
		duration: 5,
		xPercent: 100,
		ease: 'linear',
		scrollTrigger: {
			trigger: '#slide-2',
			markers: {
				startColor: 'orange',
				endColor: 'violet',
				fontSize: '25px',
				indent: 20,
			},
			scrub: 2,
			pin: true,
			anticipatePin: 1,
			start: 'top top',
			end: 'bottom top',
		},
	});
});
