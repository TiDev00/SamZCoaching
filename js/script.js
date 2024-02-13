// script.js
$(document).ready(function(){
    $('.home-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 60000, // Change this value to slow down the slider
        smartSpeed: 1000, // This controls the speed of the animation
        nav: true,
        dots: false,
        navText: [
            "<span class='ion-ios-arrow-back'></span>",
            "<span class='ion-ios-arrow-forward'></span>"
        ]
    });
});
