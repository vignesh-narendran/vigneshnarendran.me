$(document).ready(() => {
	const cardsData = [
		{
			'coding-card': [
				{
					name: 'Color My Device',
					description:
						'Color My Device is node based web application built using the MERN stack. The application is hosted in AWS.',
					link: 'https://colormydevice.in',
				},
				{
					name: 'Calcufast',
					description:
						"Love speed math? Calcufast is the web app you should try. A simple vanilla JavaScript application that's addicitve.",
					link: 'https://vignesh-narendran.github.io/calcufast/',
				},
				{
					name: 'Corona toll',
					description:
						'Covid stat API + React JS + Neumorphic design = Remembering 2020!',
					link: 'https://vignesh-narendran.github.io/corona-toll-react-app/',
				},
				{
					name: 'React to-do list',
					description:
						'Keep forgetting things? Do not forget to check this to-do list app made with React.',
					link: 'https://vignesh-narendran.github.io/todo-react-app/',
				},
				{
					name: '',
					description:
						'And a lot more. Feel free to check my GitHub repository for other projects',
					link: 'https://github.com/vignesh-narendran/',
				},
			],
		},
		{
			'digital-art-card': [
				{
					name: 'Wallpapers!',
					image:
						'https://res.cloudinary.com/colormydevice/image/upload/v1592455339/Pika-Pika_2020-06-18T04:42:19.898Z.jpg',
					link: 'https://colormydevice.in/',
				},
				{},
				{},
				{},
			],
		},
		{
			'youtube-card': [
				{
					name: 'Tech',
					video: 'https://www.youtube.com/watch?v=aAZH3Vf8Loc&t=541s',
					link: 'https://colormydevice.in/',
				},
				{},
				{},
				{},
			],
		},
	];

	cardsData.map((cards) => {
		for (var key in cards) {
			console.log(key);
			console.log(cards[key]);
			let structuredData = '';
			cards[key].map((data) => {
				switch (key) {
					case 'coding-card':
						structuredData = `<div class='card'><div><h3>${data.name}</h3></div><div><p>${data.description}</p></div><div><a target="_blank" href="${data.link}">Click to view &#8594;</a></div></div>`;
						break;
					case 'digital-art-card':
						structuredData = `<div class='card'><div><h3>${data.name}</h3></div><div style="background: url('${data.image}');background-size: cover;background-position:center"></div><div><a target="_blank" href="${data.link}">Click to view &#8594;</a></div></div>`;
						break;
					case 'youtube-card':
						structuredData = `<div class='card'><div><h3>${data.name}</h3></div><div style="width: 100%"><iframe style="width: 100%" src="${data.video}" title="YouTube"></div></div>`;
						break;
				}
				console.log(structuredData);
				$(`#${key}`).append(structuredData);
			});
		}
	});

	gsap.registerPlugin(ScrollTrigger);
	gsap.to('#slide-1', {
		duration: 5,
		autoAlpha: 0,
		ease: 'linear',
		scrollTrigger: {
			trigger: '#slide-1',

			scrub: 1,
			pin: true,
			anticipatePin: 1,
			start: 'top top',
			end: 'bottom center',
		},
	});
	gsap.to('.card', {
		duration: 3,
		autoAlpha: 1,
		ease: 'linear',
		scrollTrigger: {
			trigger: '#slide-3',
			start: 'top bottom',
			end: 'bottom bottom',
		},
	});
});
