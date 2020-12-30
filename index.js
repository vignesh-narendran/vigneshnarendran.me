$(document).ready(() => {
	$('.menu-option').click((e) => {
		$('.menu-option').removeClass('active');
		e.target.tagName == 'DIV'
			? e.target.classList.add('active')
			: e.target.parentElement.classList.add('active');
		console.log(e.target.tagName == 'DIV' ? e.target : e.target.parentElement);
	});
});
