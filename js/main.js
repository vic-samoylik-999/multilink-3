$(document).ready(function(){
	$('.work__slider').slick({
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
	 });
});
/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
