$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);


});


jQuery(function ($) {

    "use strict";
    /* ===================================
           Header appear
        ====================================== */
    if($('.slider-area').length) {
        var slider_top = $(".slider-area").offset().top;

        $(window).on('scroll', function () {

            if ($(this).scrollTop() > 260) { // Set position from top to add class
                if($('.slider-area').css({"margin-top":slider_top})) {
                    $('.inner-header').addClass('header-appear');
                }
            } else {
                if($('.slider-area').css({"margin-top":"-40px"})) {
                    $('.inner-header').removeClass('header-appear');
                }
            }
        });
    }
    if($('.slider-sec').length) {
        var slider_height = $(".slider-sec").offset().top;
        $(window).on('scroll', function () {

            if ($(this).scrollTop() > 260) { // Set position from top to add class
                if($('.slider-sec').css({"margin-top":slider_height})) {
                    $('.inner-header').addClass('header-appear');
                }
            } else {
                if($('.slider-sec').css({"margin-top":"-40px"})) {
                    $('.inner-header').removeClass('header-appear');
                }
            }
        });
    }

    /* ===================================
         arrow appear and scroll to top
     ====================================== */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll-top-arrow').fadeIn('slow');
        }else {
            $('.scroll-top-arrow').fadeOut('slow');
        }
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(document).on('click', '.home', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /* ===================================
           Navbar smooth Scroll
       ====================================== */

    if($('.portfolio-sec').length) {
        var port_target = $('.portfolio-sec').offset().top;
    }
    if($('.about-sec').length) {
        var about_target = $('#about-sec').offset().top;
    }

    jQuery ( document ).ready ( function($) {

        var hash= window.location.hash;

        // if ( hash == '' || hash == '#' || hash == undefined ) return false;

        var target = $(hash);

      //  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

       if (hash === "#company-portfolio-section") {
           var new_height = port_target - 806;
           if (target.length) {
               $('html,body').stop().animate({
                   scrollTop: new_height  //offsets for fixed header
               }, 'linear');

           }
       }
        if (hash === "#about-sec") {
            var new_heights = about_target - 951;
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: new_heights   //offsets for fixed header
                }, 'linear');

            }
        }

    });

if($(".scroll").length) {
    $(".scroll").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 0
            }, 500, function () {

                window.location.hash = hash;
            });
        }
    });
}

    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function(){
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }


    /* =====================================
          Parallax
       ====================================== */

    if($(window).width() < 780) {
        $('.parallax').addClass("parallax-disable");
    } else {
        $('.parallax').removeClass("parallax-disable");

        // parallax
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
                Mouse parallax
    ====================================== */

    if($(window).width() > 780) {
        $('.slider-area,.slider-sec,header').mousemove(function (e) {
            $('[data-depth]').each(function () {
                var depth = $(this).data('depth');
                var amountMovedX = (e.pageX * -depth / 4);
                var amountMovedY = (e.pageY * -depth / 4);

                $(this).css({
                    'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
                });
            });
        });
    }
    /* ===================================
      Owl Carousel
     ====================================== */

    //Testimonial Slider

    $('.team-carousel').owlCarousel({
        loop: true,
        smartSpeed: 500,
        responsiveClass: true,
        nav:false,
        dots:false,
        autoplay: true,
        margin:30,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });

    $('#team-next').click(function() {
        var owl = $('.team-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('#team-prev').click(function() {
        var owl = $('.team-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

    /* ===================================
           slick for testimonial
     ====================================== */

    $('.testimonial-box').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });
    /* =====================================
                    sponsers  carousel
        ====================================== */

    $('.sponser-tags').owlCarousel({

        loop: true,
        margin: 20,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            },
        }

    });

    /* =====================================
             slick for slider
     ====================================== */
    $(document).ready(function(){
        $('.slider-detail').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            active:true,
            // fade: true,
            asNavFor: '.slider-img'
        });
        $('.slider-img').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-detail',
            dots: false,
            arrows: false,
            focusOnSelect: true,
        });
        $('.slider-arr-up').click(function(){
            $('.slider-img').slick('slickNext');
        });
        $('.slider-arr-down').click(function(){
            $('.slider-img').slick('slickPrev');
        });

    });


    /* =====================================
             circular bars
     ====================================== */

    $(".circular-wrap").appear(function () {
        $(".circle").circleProgress({
            size: 210,
            lineCap: "round",
            fill: {
                gradient: ["#f71c52", "#554c86"]
            },
        });
    });


    $(".circular-wrap.dark").appear(function () {
        $('.myskill').circleProgress({
            lineCap: "round",
            size: 200,
        });
    });

    /* ===================================
                 Wow Effects
       ======================================*/
    var wow = new WOW(
        {
            boxClass:'wow',      // default
            animateClass:'animated', // default
            offset:0,          // default
            mobile:false,       // default
            live:true        // default
        }
    );
    wow.init();


    /* ===================================
           Cube Portfolio Initializing
    ======================================*/
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }

    })
        .on('initComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");

                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");

                }
            });
        })
        .on('onAfterLoadMore.cbp', function () {
            // your functionality
            var $this = $(this);
            $("#js-loadMore-lightbox-gallery a").addClass("d-none");
            $("#js-loadMore-lightbox-gallery").addClass("active-outer");
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                console.log();
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        })
        .on('filterComplete.cbp', function () {
            // your functionality
            var $this = $(this);
            if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
                $("#js-loadMore-lightbox-gallery").addClass("active");
                $("#js-loadMore-lightbox-gallery").removeClass("d-none");
            } else {
                $("#js-loadMore-lightbox-gallery").removeClass("active");
                $("#js-loadMore-lightbox-gallery").addClass("d-none");
            }
            $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
                $(this).removeClass("even");
                var val = index + 1;
                if ($(this).css('left') !== "0px") {
                    $(this).addClass("even");
                }
            });
        });


});

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

       // Function to calculate Future Value
function calculateFutureValue() {
    // Retrieve inputs
    var presentAmount = parseFloat(document.getElementById('present-amount-future').value);
    var interestRate = parseFloat(document.getElementById('interest-rate-future').value);
    var years = parseFloat(document.getElementById('loan-period-future').value);
    var compoundingMode = document.getElementById('rest-option-future').value;

    // Perform calculation based on compounding mode
    var periodsPerYear = compoundingMode === 'monthly' ? 12 : 1;
    var interestPerPeriod = interestRate / (100 * periodsPerYear);
    var periods = years * periodsPerYear;

    var futureValue = presentAmount * Math.pow(1 + interestPerPeriod, periods);

    // Display result with commas
    document.getElementById('result-future').innerText = 'Future Value: ₹ ' + formatNumberWithCommas(futureValue.toFixed(2));
}

// Function to calculate Fixed Deposit Interest
function calculateFD() {
    // Retrieve inputs
    var principalAmount = parseFloat(document.getElementById('principal-amount').value);
    var interestRate = parseFloat(document.getElementById('interest-rate-2').value);
    var compoundingOption = document.getElementById('compounding-option').value;
    var months = parseFloat(document.getElementById('loan-period-2').value);

    // Perform calculation based on compounding option
    var periodsPerYear = compoundingOption === 'monthly' ? 12 : (compoundingOption === 'quarterly' ? 4 : (compoundingOption === 'half-yearly' ? 2 : 1));
    var interestPerPeriod = interestRate / (100 * periodsPerYear);
    var periods = months / 12 * periodsPerYear;

    var maturityAmount = principalAmount * Math.pow(1 + interestPerPeriod, periods);

    // Display result with commas
    document.getElementById('result-2').innerText = 'Maturity Amount: ₹ ' + formatNumberWithCommas(maturityAmount.toFixed(2));
}

// Function to calculate Present Value
function calculatePresentValue() {
    // Retrieve inputs
    var interestRate = parseFloat(document.getElementById('interest-rate-3').value);
    var years = parseFloat(document.getElementById('loan-period-3').value);
    var compoundingMode = document.getElementById('rest-option-3').value;
    var futureAmount = parseFloat(document.getElementById('future-amount').value);

    // Perform calculation based on compounding mode
    var periodsPerYear = compoundingMode === 'monthly' ? 12 : 1;
    var interestPerPeriod = interestRate / (100 * periodsPerYear);
    var periods = years * periodsPerYear;

    var presentValue = futureAmount / Math.pow(1 + interestPerPeriod, periods);

    // Display result with commas
    document.getElementById('result-3').innerText = 'Present Value: ₹ ' + formatNumberWithCommas(presentValue.toFixed(2));
}

// Function to calculate Recurring Deposit Maturity Value
function calculateRecurringDeposit() {
    // Retrieve inputs
    var monthlyDeposit = parseFloat(document.getElementById('monthly-deposit').value);
    var annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value);
    var compoundingFrequency = document.getElementById('compounding-frequency').value;
    var months = parseFloat(document.getElementById('period-months').value);

    // Perform calculation based on compounding frequency
    var periodsPerYear = compoundingFrequency === 'monthly' ? 12 : (compoundingFrequency === 'quarterly' ? 4 : 1);
    var interestPerPeriod = annualInterestRate / (100 * periodsPerYear);
    var periods = months / periodsPerYear;

    var maturityValue = monthlyDeposit * (((Math.pow(1 + interestPerPeriod, periods) - 1) / interestPerPeriod) * (1 + interestPerPeriod));

    // Display result with commas
    document.getElementById('result-4').innerText = 'Maturity Value: ₹ ' + formatNumberWithCommas(maturityValue.toFixed(2));
}


        // Function to clear fields based on calculator type
        function clearFields(calculatorType) {
            switch (calculatorType) {
                case 1:
                    // Clear Present Value Calculator fields
                    document.getElementById('interest-rate-3').value = '10';
                    document.getElementById('loan-period-3').value = '10';
                    document.getElementById('rest-option-3').value = 'monthly';
                    document.getElementById('future-amount').value = '0';
                    document.getElementById('result-3').innerText = '';
                    break;
                case 2:
                    // Clear Fixed Deposit Calculator fields
                    document.getElementById('principal-amount').value = '100000';
                    document.getElementById('interest-rate-2').value = '10';
                    document.getElementById('compounding-option').value = 'monthly';
                    document.getElementById('loan-period-2').value = '12';
                    document.getElementById('result-2').innerText = '';
                    break;
                case 3:
                    // Clear Future Value Calculator fields
                    document.getElementById('present-amount-future').value = '0';
                    document.getElementById('interest-rate-future').value = '10';
                    document.getElementById('loan-period-future').value = '10';
                    document.getElementById('rest-option-future').value = 'monthly';
                    document.getElementById('result-future').innerText = '';
                    break;
                case 4:
                    // Clear Recurring Deposit Calculator fields
                    document.getElementById('monthly-deposit').value = '5000';
                    document.getElementById('annual-interest-rate').value = '8';
                    document.getElementById('compounding-frequency').value = 'monthly';
                    document.getElementById('period-months').value = '60';
                    document.getElementById('result-4').innerText = '';
                    break;
                default:
                    console.log('Invalid calculator type.');
                    break;
            }
        }
