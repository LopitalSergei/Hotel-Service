"use strict";

/* Burger menu */
const burger = document.getElementById('burger');
burger.addEventListener('click', burgerMenu);
function burgerMenu() {
	burger.classList.toggle('burger-active');
	document.getElementsByClassName('main-menu')[0].classList.toggle('burger-active');
	document.body.classList.toggle('lock');
}
/*-------------*/

/* Menu button */

if (window.innerWidth <= 565) {
	const menuBtn = document.getElementsByClassName('header__nav-right')[0];
	const menulinks = document.getElementsByClassName('main-menu__links')[0];
	menulinks.append(menuBtn);
}

window.addEventListener('resize', function (event) {
	if (window.innerWidth <= 565) {
		const menuBtn = document.getElementsByClassName('header__nav-right')[0];
		const menulinks = document.getElementsByClassName('main-menu__links')[0];
		menulinks.append(menuBtn);
	} else {
		const menuBtn = document.getElementsByClassName('header__nav-right')[0];
		const header__burger = document.getElementsByClassName('header__burger')[0];
		header__burger.before(menuBtn);
	}
}, true);



/*------------*/

// Hero Action

const bg = document.getElementsByClassName("set-bg")[0];
bg.style.backgroundImage = 'url(' + bg.dataset.setbg + ')';
// bg.style.backgroundPosition = "center";

/*-------------*/

