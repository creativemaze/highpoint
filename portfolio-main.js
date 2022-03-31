"use strict";
//MagnificPopup Gallery
$('.portfolio_image').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	},
});

$(document).ready(function(){
	$('.portfolio_slider').slick({
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});

$(document).ready(function(){
	$('.project_slider').slick({
		autoplay: false,
		infinite: true,
		speed: 1000,
		arrows: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		
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

//Page Preloader
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
		 
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};