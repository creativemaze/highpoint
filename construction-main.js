"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		fade: true,
		prevArrow: '.prev_button',
		nextArrow: '.next_button',
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: false,
	});
	
	$('.slickslide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.header__content > div.active').removeClass('active');
			$('.header__content > div').eq(nextSlide).addClass('active');
	});
  
  
	$('.header__content > div').on('click', function(e){
		e.preventDefault();
		$('header__content > div.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.slickslide').slick('slickGoTo', targetSlide );
	});
	
});

//Slick Slider (2) Two
$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		prevArrow: '.prev_slide',
		nextArrow: '.next_slide',
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		fadeSpeed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
				
	});
});

//MagnificPopup Gallery (1) One
$('.featured_col').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

//MagnificPopup Gallery (2) Two
$('.footer_grid').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

//Counter Script
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

//Animate on Scroll default settings
$(window).on('load', function () {
	AOS.refresh();
});

$(function () {
	AOS.init({
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 200, // offset (in px) from the original trigger point
		delay: 300, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: true, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
});	

//Preload all the images in the page
imagesLoaded({background: true}, () => document.body.classList.remove('loading'));