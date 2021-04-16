"use strict";
//Slick Slider (1) One
$(document).ready(function(){
	$('.slickslide').slick({
		autoplay: true,
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
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
	$('.corporate_slider').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		centerMode: true,
		responsive: [
			
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}		
			},
			
		]
	});
	
	$('.corporate_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.title_group.active').removeClass('active');
			$('.title_group').eq(nextSlide).addClass('active');
	});
  
	$('.title_group').on('click', function(e){
		e.preventDefault();
		$('.title_group.active').removeClass('active');
		$(this).addClass('active');
		var targetSlide = $(this).data('target');
		$('.corporate_slider').slick('slickGoTo', targetSlide );
	});
	
});

//Slick Slider (3) Three
$(document).ready(function(){
	$('.client-slider').slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.prev_nav',
		nextArrow: '.next_nav',
		autoplay: true,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus: false,
		responsive: [
		{
			breakpoint: 800,
			settings: {
			slidesToShow: 1,
       
		}	
	},
	]	
	});
	
});

//MagnificPopup Video
$('#play-video').magnificPopup({
	disableOn: 300,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 300,
	preloader: false,
	fixedContentPos: false
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