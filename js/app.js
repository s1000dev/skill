let menu = document.querySelector('#menu');
let mobileLinks = document.querySelector('#mobile-links');

menu.addEventListener('click', function(e){
	e.preventDefault();

	this.classList.toggle('opened');
	mobileLinks.classList.toggle('opened');
})