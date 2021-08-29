$(function() {
    $(".owl-selling-product").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText : ['<img src="assets/img/icons/chevron-left.png"/>','<img src="assets/img/icons/chevron-right.png"/>'],
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    $(".owl-category-product").owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:true,
        navText : ['<img src="assets/img/icons/chevron-left.png"/>','<img src="assets/img/icons/chevron-right.png"/>'],
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});