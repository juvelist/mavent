// typewriter

// $(".header__main_text-question").typewriter({
//     text: "Yup, we can du that.",
//     waitingTime: 1000,
//     delay: 100,
//     cursor: true,
// });

//owl-carousel
$("#slider-banner").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    },
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:3000,
    autoplayHoverPause:true
});

$("#slider-block").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:false,
    responsive:{
        0:{
            items:1
        }
    },
    autoplay:true,
    autoplayTimeout:6000,
    autoplaySpeed:3000,
    autoplayHoverPause:true
});
