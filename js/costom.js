$(function() {
    // =====***** service slick js starts *****===== //
    $(".service-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: false,
        infinite: true,
        prevArrow: '<i class="fa fa-long-arrow-left prevarrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-long-arrow-right nextarrow" aria-hidden="true"></i>',

        // responsive starts
        responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
            ]
            // responsive ends
    });
    // =====***** service slick js ends *****===== //


    // =====***** testimonials slick js starts *****===== //
    $(".testimonials-slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: false,
        infinite: true,
        prevArrow: '<i class="fa fa-long-arrow-left prevarrow" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-long-arrow-right nextarrow" aria-hidden="true"></i>',

        // responsive starts
        responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                    }
                },
            ]
            // responsive ends
    });
    // =====***** testimonials slick js ends *****===== //

    // =====***** mixitup starts *****====== //
    var mixer = mixitup('.img-section');
    // =====***** mixitup ends *****====== //
});