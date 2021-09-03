$(function() {
    $(".owl-selling-product").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        lazyLoad: true,
        navText : ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
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
        navText : ['<i class="fas fa-angle-left" style="color: #fff;"></i>','<i class="fas fa-angle-right" style="color: #fff;"></i>'],
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

    $(".owl-customer-review").owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        nav:true,
        navText : ['<i class="fas fa-angle-left" style="color: #fff;"></i>','<i class="fas fa-angle-right" style="color: #fff;"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    $(".owl-partner").owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        nav:true,
        navText : ['<i class="fas fa-angle-left" style="color: #fff;"></i>','<i class="fas fa-angle-right" style="color: #fff;"></i>'],
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

    // Lazyload
    var myLazyLoad = new LazyLoad();
    myLazyLoad.update();
});

// toggle
$('.btn-toggle').on('click', function() {
    $('.bg-overlay').addClass('active');
    $('.sidebarLeft').addClass('open');
});
$('.btnClose').on('click', function() {
    $('.bg-overlay').removeClass('active');
    $('.sidebarLeft').removeClass('open');
});
$( ".sidebarLeft__menu-list li" ).click(function() {
    $(this).children('ul').slideToggle(250);
});