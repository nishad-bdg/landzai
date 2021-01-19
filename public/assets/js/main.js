(function ($) {
  "use strict";

  /*-------------------------------------------
  preloader active
  --------------------------------------------- */
  jQuery(window).load(function () {
    jQuery(".preloader").fadeOut("slow");
  });

  /*-------------------------------------------
  Sticky Header
  --------------------------------------------- */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      $("#sticky").addClass("stick");
    } else {
      $("#sticky").removeClass("stick");
    }
  });

  jQuery(document).ready(function () {
    /*-------------------------------------------
    js wow active
    --------------------------------------------- */
    new WOW().init();

    /*-------------------------------------------
    js scrollup
    --------------------------------------------- */
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });

    /*-------------------------------------------
    slider active
    --------------------------------------------- */
    $(".slider-active").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: false,
      dots: false,
      arrows: true,
      prevArrow: '<i class="slick-prev arrow fas fa-angle-left"></i> ',
      nextArrow: '<i class="slick-next arrow fas fa-angle-right"></i> ',
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    
    /*-------------------------------------------
    slide-brands active
    --------------------------------------------- */
    $(".slide-brands").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });

    /*-------------------------------------------
    slider active
    --------------------------------------------- */
    var slider = $(".work-slide");
    var scrollCount = null;
    var scroll = null;
    slider.slick({
      dots: true,
      arrows: false,
      vertical: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    });
    slider.on("wheel", function (e) {
      e.preventDefault();
      clearTimeout(scroll);
      scroll = setTimeout(function () {
        scrollCount = 0;
      }, 200);
      if (scrollCount) return 0;
      scrollCount = 1;

      if (e.originalEvent.deltaY < 0) {
        $(this).slick("slickNext");
      } else {
        $(this).slick("slickPrev");
      }
    });

    /*-------------------------------------------
    app-screens-slide active
    --------------------------------------------- */
    $(".app-screens-slide").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*-------------------------------------------
    testimonial-slide active
    --------------------------------------------- */
    $(".testimonial-slide").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*-------------------------------------------
    testimonial-slide-two active
    --------------------------------------------- */
    $(".testimonial-slide-two").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      prevArrow: '<i class="arow-prev fas fa-chevron-left"></i>',
      nextArrow: '<i class="arow-next fas fa-chevron-right"></i>',
    });

    /*-------------------------------------------
    testimonial-slide active
    --------------------------------------------- */
    $(".testimonial-three-active").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*-------------------------------------------
    testimonial-slide-four active
    --------------------------------------------- */
    $(".testimonial-slide-four").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      prevArrow: '<i class="arow-prev fas fa-chevron-left"></i>',
      nextArrow: '<i class="arow-next fas fa-chevron-right"></i>',
    });

    /*-------------------------------------------
    testimonial-slide-five active
    --------------------------------------------- */
    $(".testimonial-slide-five").slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      prevArrow: '<i class="arow-prev fas fa-chevron-left"></i>',
      nextArrow: '<i class="arow-next fas fa-chevron-right"></i>',
    });

    /*-------------------------------------------
    product-priview-slide active
    --------------------------------------------- */
    jQuery('.product-priview-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      fade: true,
      asNavFor: '.product-thumb-silide'
    });
    jQuery('.product-thumb-silide').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      asNavFor: '.product-priview-slide',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    });
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = jQuery('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton"></div>');
    CartPlusMinus.append('<div class="inc qtybutton"></div>');
    jQuery(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*---------------------------------
    venobox Popup active
    -----------------------------------*/
    $(".popup-video").venobox();

    /*---------------------------------
    offcanvase menu active
    -----------------------------------*/
    jQuery(".menu-bar span").on("click", function() {
      jQuery('.mobile-menu').toggleClass('open-menu');
    });
    jQuery(".close-btn").on("click", function() {
      jQuery('.mobile-menu').removeClass('open-menu');
    });

    /*---------------------------------
    smoot scroll nav sctive Popup active
    -----------------------------------*/
    jQuery(document).on('click','nav ul li a', function (e) {
      var anchor = $(this).attr('href');
      var link = anchor.slice(0,1);
      if ('#' == link) {
          e.preventDefault();
          var top = $(anchor).offset().top;
          $('html, body').animate({
              scrollTop: $(anchor).offset().top
          }, 1000);
          $(this).parent().addClass('current-menu-item').siblings().removeClass('current-menu-item');
      }
    });

    /*---------------------------------
    counterUp active
    -----------------------------------*/
    jQuery(".counter-list").appear(function () {
      jQuery(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
    });
    
    /*---------------------------------
    niceSelect active
    -----------------------------------*/
    jQuery("select").niceSelect();
   
    /*---------------------------------
    isotope activation 
    -----------------------------------*/
    $('.grid').appear(function() {
      // filter items on button click
      $('.filtering-button').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        animationOptions: {
          duration: 500,
          easing: 'zoom-in'
        },
        masonry: {
          // use element for option
          columnWidth: '.grid-item'
        },
        transitionDuration: '.9s'
      })
      $('.filtering-button li').on('click',  function () {
        $('.filtering-button li').removeClass('active');
        $(this).addClass('active');
      });
    });

    /*---------------------------------
    imagesLoaded activation 
    -----------------------------------*/
    $('.container').imagesLoaded();

    /*---------------------------------
    toggle-password activation 
    -----------------------------------*/
    $(".toggle-password").click(function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      var password = $('.password');
      if (password.attr("type") == "password") {
        password.attr("type", "text");
      } else {
        password.attr("type", "password");
      }
    });

    $(".toggle-repassword").click(function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      var repassword = $('.repassword');
      if (repassword.attr("type") == "password") {
        repassword.attr("type", "text");
      } else {
        repassword.attr("type", "password");
      }
    });

    /*----------------------------
    checkout payment method active
    ------------------------------*/
    $('input[type="radio"]').click(function(){
      if($(this).attr("value")=="creditcard"){
        $(".card-infor-box").slideDown('slow');
      }
      else {
        $(".card-infor-box").slideUp('slow');
      }
    });

    /*----------------------------
    google-map
    ------------------------------*/
    if ($('#gmap').length > 0) {
      new GMaps({
        div: '#gmap',
        lat: 23.7947172, // 23.7947172,90.3971412
        lng: 90.3971412,
        scrollwheel: false,				
        styles: [
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dddddd"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dddddd"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          }
        ]
      }).addMarker({
        lat: 23.792930, //23.792930, 90.403798
        lng: 90.403798,
        infoWindow: {
          content: '<div class="map-marker-box"><h2 class="title">Headquarter</h2> <p>9541 Brightwell Dr, <br /> Indianapolis, IN 46260</p></div>',
        }
        });
    };

  });

 
})(jQuery);
