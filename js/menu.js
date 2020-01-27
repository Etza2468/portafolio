const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width: 767px)')

if (ipad.matches) {
    burgerButton.addEventListener('click', hideShow);
    menu.addEventListener('click', hideMenu);
}

function validation(event){
	if(event.matches){
		burgerButton.addEventListener('click', hideShow);
		menu.addEventListener('click', hideMenu);
	}else{
		burgerButton.removeEventListener('click', hideShow);
		menu.removeEventListener('click', hideMenu);
	}
}

function hideShow(){
	menu.classList.toggle('is-active');
}

function hideMenu () {
    menu.classList.remove('is-active');
}

ipad.addListener(validation);