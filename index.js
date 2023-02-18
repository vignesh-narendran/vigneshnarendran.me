$(document).ready(() => {
	const cardsData = [
		{
			'coding-card': [
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
					name: 'Logo',
					image:
						'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/86d32285118613.5d71ebdf5364b.jpeg',
					link: 'https://www.behance.net/gallery/85118613/Logo-Designs',
				},
				{
					name: 'Vector Art',
					image:
						'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4190aa85117887.5d71e4996f2c6.jpg',
					link: 'https://www.behance.net/gallery/85117887/Digital-Art',
				},
			],
		},
		{
			'youtube-card': [
				{
					name: 'Tech',
					video: 'https://www.youtube.com/embed/AUE-TwyHoNc',
					link: 'https://youtube.com/elementon',
				},
				{
					name: 'Travel',
					video: 'https://www.youtube.com/embed/IeIFQ0MKLa8',
					link: 'https://youtube.com/elementon',
				},
				{
					name: 'Food',
					video: 'https://www.youtube.com/embed/vSEZL620VEE',
					link: 'https://youtube.com/elementon',
				},
				{
					name: 'Explanation',
					video: 'https://www.youtube.com/embed/RgGu1hPexKA',
					link: 'https://youtube.com/elementon',
				},
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
						structuredData = `<div class='card'><div><h3>${data.name}</h3></div><div style="width: 100%"><iframe width="100%" src="${data.video}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><a target="_blank" href="${data.link}">Click to watch all videos &#8594;</a></div></div>`;
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
