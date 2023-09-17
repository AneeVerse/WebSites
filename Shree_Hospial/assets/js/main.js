
(function($){
    "use strict";
    $(document).ready(function(){

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/  
        $(document).on('click','.navbar-area .navbar-nav li.menu-item-has-children>a',function(e){
            e.preventDefault();
        }) 

        /*---------------------------
              Mobile Cross Menu
        -----------------------------*/
        $(document).on('click','.cross-menu',function(e){
            e.preventDefault();
            $(this).toggleClass("change");
        })  
       
        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

        //Scroll Down
        $(document).on('click', '.scroll-down-area a', function(e){
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        })

        //Hide Alert Box
        $(document).on('click','.alert-box .close-btn',function(){
            $(this).parent().hide(200);
        });

        //Modal Hide
        $(document).on('click','#close-btn1',function(){
            $(this).parent().hide(200);
        })
        $(document).on('click','#close-btn2',function(){
            $(this).parent().hide(200);
        })
        $(document).on('click','#close-btn3',function(){
            $(this).parent().hide(200);
        })


        /*------------------------------
            counter section activation
        -------------------------------*/
        var counternumber = $('.count-num');
        if(counternumber.length > 0){ 
            counternumber.rCounter({
                duration: 20
            });
        }

        /* ------------------------------
                 Countdown
        ---------------------------------*/
        if($("#mycountdown").length > 0){
            $("#mycountdown").countdown("2019/11/23", function(event) {$('.days').text(
                    event.strftime('%D')
                );
                $('.hours').text(
                    event.strftime('%H')
                );
                $('.mins').text(
                    event.strftime('%M')
                );
                $('.secs').text(
                    event.strftime('%S')
                );
         });}

        // Search Popup
        $(document).on('click','.openSearchBtn',function(){
            $('.searchOverlay').css('width', '100%');
        })
        $(document).on('click','.closebtn',function(){
            $(".searchOverlay").css('width', '0');
        })

        // Side Menu Popup
        $(document).on('click','.open-side-menu',function(){
            $('.sidenav').css('width', '100%');
        })

        $(document).on('click','.closebtn',function(){
            $('.sidenav').css('width', '0');
        })

        $(document).on('click','.click-to-top',function(){
            $('body,html').animate({scrollTop: 0}, 1000)
        })
   
        // Video popup  
        if($(".hosted-popup").length > 0){
            $(".hosted-popup").rPopup({
                'video': {
                    embed: true,
                    autoplay: true,
                },
            });
        }

         //Image Popup 
        if($(".plus-icon").length > 0){
            $(".plus-icon").rPopup({ 
                'image': true 
            });
        }

        /*-------------------------------------
                Latest Storiest Carousel
        ---------------------------------------*/
        var latestStoriestCarousel = $('.storiest-carousel');
        if(latestStoriestCarousel.length > 0){
            latestStoriestCarousel.slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                nextArrow: '<div class="slick-prev"> <i class="fas fa-chevron-left"></i> </div>',
                prevArrow: '<div class="slick-next"> <i class="fas fa-chevron-right"></i> </div>',
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: true,
                    }
                    }
                ]
    
            });      
        }

        /*------------------------------------
            Home Slider / Main Slider
        --------------------------------------*/ 
        var homeManiSlider = $('.home-slider-wrapper');
        if(homeManiSlider.length > 0){
            
            homeManiSlider.slick({
                dots: true,
                infinite: true,
                speed: 1600,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                appendDots: $('.carousel-dots-area'),
            });  

            var homeSliderDots = $('.carousel-dots-area .slick-dots li');
            homeSliderDots.each(function(index,value){
                var el = $(this);
                var number = el.children('button').text();
                el.children('button').text(check_number(number));
            });
        }

        /*------------------------------------
                Plastic Surgery 02
        --------------------------------------*/ 
        var surgerySliderTwo = $('.surgery-slider-wrapper');
        if(surgerySliderTwo.length > 0){
            surgerySliderTwo.slick({
                dots: true,
                infinite: true,
                speed: 1600,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                appendArrows: $('.slider-arrow-items'),
                nextArrow: '<div class="slick-prev"> <i class="fas fa-chevron-left"></i> </div>',
                prevArrow: '<div class="slick-next"> <i class="fas fa-chevron-right"></i> </div>',
            });
    
            // On before home slider change
            surgerySliderTwo.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var testSlider =  surgerySliderTwo.slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            SliderProgressbarStart(progressWidth)
            $('.slider-arrow-area .arrow-top').text(check_number(totalSlide));
            $('.slider-arrow-area .arrow-top').text(check_number(currentSliderIndex));
    
            $('.right-controller .number').text(check_number(totalSlide));
            $('.right-controller .number').text(check_number(currentSliderIndex));
    
            var nextSliderTitle =   $('.surgery-slider-wrapper .slick-slide[data-slick-index="'+currentSliderIndex+'"]').find('.slider-heading').text();
            var nextSliderimg =   $('.surgery-slider-wrapper .slick-slide[data-slick-index="'+currentSliderIndex+'"]').find('.slider-img-area').css('background-image');
            
            $('.surgery-slider-area-02 .slider-controller .left-controller').css('background-image',nextSliderimg);
            $('.surgery-slider-area-02 .slider-controller .right-controller').find('.heading-03').text(nextSliderTitle);
            });

        }

        /*------------------------------------
                timeline slider
        --------------------------------------*/ 
        var timelineSliderBig = $('.timeline-slider-big');
        var timelineSliderSmall = $('.timeline-slider-small');
        if(timelineSliderBig.length > 0){

            $('.time-line-area').imagesLoaded(function () {
                timelineSliderBig.slick({
                    dots: false,
                    infinite: true,
                    speed: 600,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows:false,
                    asNavFor: timelineSliderSmall,               
                });
            });

            timelineSliderSmall.slick({
                dots: false,
                infinite: true,
                speed: 600,
                slidesToScroll: 1,
                autoplay: true,
                slidesToShow: 3, 
                arrows:false,
                asNavFor: timelineSliderBig
            })
            
            // On before slide change
            timelineSliderBig.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                ++nextSlide;
                $('.big-slider-area .year-area ul li').removeClass('active');
                $('.big-slider-area .year-area ul li:nth-child('+nextSlide+')').addClass('active');
            });    
        }
        $(document).on('click','.big-slider-area .year-area ul li',function(e){
            e.preventDefault();
            var el = $(this);
            var slideIndex = el.data('slide-index');
            timelineSliderBig.slick('slickGoTo',slideIndex);
        });
 


        /*-----------------------------------------
                    Paralax Slider
        -------------------------------------------*/
        var paralaxSlider = $('.paralax-slider-wrapper');
        if(paralaxSlider.length > 0){
            paralaxSlider.slick({
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows:false, 
            });
        }

        /*-----------------------------------------
                    Dentist Slider
        -------------------------------------------*/
        var dentalSlider = $('.dental-slider');
        if(dentalSlider.length > 0){
            dentalSlider.slick({
                dots: false,
                infinite: true,
                speed: 1600,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows:true, 
                prevArrow: '<div class="slick-prev">  <div class="arrow-down"> <span class="arrow-line"></span><span class="caret-down"></span></div></div>',
                nextArrow: '<div class="slick-next"> <div class="arrow-up"> <span class="arrow-line"></span><span class="caret-up"></span></div> </div>',
            });
    
            // On before home slider change
            dentalSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                var testSlider =  dentalSlider.slick('getSlick');
                var totalSlide = testSlider.$slides.length;
                var currentSliderIndex = nextSlide;
                ++currentSliderIndex;
                var progress = 100 / totalSlide;
                var progressWidth = progress * currentSliderIndex;
                SliderProgressbarStart(progressWidth)
                $('.controller-area .total-controller').text(check_number(totalSlide));
                $('.controller-area .active-controller').text(check_number(currentSliderIndex));
            }); 
        }


        /*-----------------------------------
                Testimonials Slick Slider
        -------------------------------------*/
        var testimonialCarouselImg = $('.testimonial-carousel-img');
        var testimonialCarouselContent = $('.testimonial-carousel-content');

        if(testimonialCarouselImg.length > 0){
            testimonialCarouselImg.slick({   
                autoplay: true,
                draggable: true,
                speed: 400,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,       
                arrows: true,  
                responsive: [
                    {
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 485,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }    
                ],        
                asNavFor: testimonialCarouselContent,          
                appendArrows: $('.testimonial-arrow'),  
                prevArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',   
                nextArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>',  
                
            });
            // On before slide change
            testimonialCarouselImg.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var testSlider =  testimonialCarouselImg.slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            testProgressbarStart(progressWidth)
            $('.testimonials-carousel-controller .total-controller').text(check_number(totalSlide));
            $('.testimonials-carousel-controller .active-controller').text(check_number(currentSliderIndex));
                if(nextSlide > 0){
                    var customActive = nextSlide + 4;
                    testimonialCarouselImg.find('.slick-slide').removeClass('right_active_item');
                    testimonialCarouselImg.find('.slick-slide[data-slick-index="'+customActive+'"]').addClass('right_active_item');
                }else{
                    testimonialCarouselImg.find('.slick-slide').removeClass('right_active_item');
                    testimonialCarouselImg.find('.slick-slide[data-slick-index="4"]').addClass('right_active_item');
                }
            });
        }

        if(testimonialCarouselContent.length > 0){
            testimonialCarouselContent.slick({
                dots: false,
                infinite: true,
                speed: 400,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows:false, 
                asNavFor: $(testimonialCarouselImg), 
            });
    
        }

        /*------------------------------------------
            Plastic surgery One home slider
        -------------------------------------------*/
        var PlasticSurgeryOne = $('.surgery-slide-wrapper');
        if(PlasticSurgeryOne.length > 0){
            PlasticSurgeryOne.slick({
                dots: false,
                infinite: true,
                speed: 1600,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                prevArrow: '<div class="slick-prev">  <div class="arrow-down"> <span class="arrow-line"></span><span class="caret-down"></span></div></div>',
                nextArrow: '<div class="slick-next"> <div class="arrow-up"> <span class="arrow-line"></span><span class="caret-up"></span></div> </div>',
            });
            
            // On before home slider change
            PlasticSurgeryOne.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                var testSlider =  PlasticSurgeryOne.slick('getSlick');
                var totalSlide = testSlider.$slides.length;
                var currentSliderIndex = nextSlide;
                ++currentSliderIndex;
                var progress = 100 / totalSlide;
                var progressWidth = progress * currentSliderIndex;
                surgeryProgressbarStart(progressWidth)
                $('.controller-wrapper .total-controller').text(check_number(totalSlide));
                $('.controller-wrapper .active-controller').text(check_number(currentSliderIndex));
            });
        }


        /*-----------------------------
                Date picker
        -------------------------------*/
        if($("#datepicker, #datepicker2").length > 0){
            $("#datepicker, #datepicker2").datepicker({
                dateFormat: "dd-mm-yy",
                duration: "fast"
            });
        }

   
        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();


         //PROGRESS SECTION   
        var dentalProgressBar = $('.dental');
        if(dentalProgressBar.length > 0){       
            dentalProgressBar.rProgressbar({ percentage: 90, fillBackgroundColor: '#F2F5F7', backgroundColor: 'transparent', AbsoluteProgressCount: true});
        }
        var cardioProgressBar = $('.cardio');
        if(cardioProgressBar.length > 0){       
            cardioProgressBar.rProgressbar({ percentage: 70, fillBackgroundColor: '#F2F5F7', backgroundColor: 'transparent', AbsoluteProgressCount: true});
        }
        var neurologieProgressBar = $('.neurologie');
        if(neurologieProgressBar.length > 0){       
            neurologieProgressBar.rProgressbar({ percentage: 85, fillBackgroundColor: '#F2F5F7', backgroundColor: 'transparent', AbsoluteProgressCount: true});
        }
        var orthopedyProgressBar = $('.orthopedy');
        if(orthopedyProgressBar.length > 0){       
            orthopedyProgressBar.rProgressbar({ percentage: 65, fillBackgroundColor: '#F2F5F7', backgroundColor: 'transparent', AbsoluteProgressCount: true});
        }


    
        /*-----------------------------
           Isotop Active For Blog Page
        -------------------------------*/
        if($('.blog-filter-section').length > 0){
            $('.blog-filter-section').imagesLoaded(function () {
                $('.blog-filter-content').isotope({
                      itemSelector: '.content-item',
                      layoutMode: 'fitRows',      
                  });  
              });
        }


        /*-----------------------------
         Isotop Active For Gallery Page
        -------------------------------*/ 
        if ($('.blog-filter-section').length > 0){
            $('.blog-filter-section').imagesLoaded(function () {
                var $gallery = $('.gallery-filter-images').isotope({
                    itemSelector: '.gallery-grid',
                    masonry: {
                    columnWidth: 50
                    }        
                });
            });
        }

        /*-----------------------------
        Isotop Active For Membership Page
        -------------------------------*/

        if($('.membership-filter-section').length > 0){
            $('.membership-filter-section').imagesLoaded(function () {
                $('.membership-filter').isotope({
                    itemSelector: '.membership-grid',
                    filter: '.standard',      
                });    
            });
        }
  
        /*---------------------------------
            Isotop Filter Function
        -----------------------------------*/ 
        var filterFns = {
            numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
            },
            ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
            }
        };
        $('.filters-button-group').on( 'click', 'li', function() {
            var filterValue = $( this ).attr('data-filter');
            filterValue = filterFns[ filterValue ] || filterValue;
            $('.blog-filter-content').isotope({ filter: filterValue });
            $('.gallery-filter-images').isotope({ filter: filterValue });
            $('.membership-filter').isotope({ filter: filterValue });
        });
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
            });
        });
    
        /*===========================================
                Popup on Click
        ===========================================*/

        // Opening popup
        $(document).on('click','#open-opening-popup',function(){
            $(".location-popup, .form-popup").removeClass("popup-show ")
            $("#open-location-popup, #open-form-popup").removeClass("active")
        
            $(".popup-wrapper, .opening-popup").animate().addClass("popup-show ");
            $("#open-opening-popup").addClass("active")         
        })
        
        $(document).on('click','#open-location-popup',function(){
            $(".opening-popup, .form-popup").removeClass("popup-show ")
            $("#open-opening-popup, #open-form-popup").removeClass("active")
        
            $(".popup-wrapper, .location-popup").animate().addClass("popup-show ");
            $("#open-location-popup").addClass("active")

        })
 
        $(document).on('click','#open-form-popup',function(){
            $(".opening-popup, .location-popup").removeClass("popup-show ")
            $("#open-opening-popup, #open-location-popup").removeClass("active")
        
            $(".popup-wrapper, .form-popup").animate().addClass("popup-show ");
            $("#open-form-popup").addClass("active")
        })        
    
         // Close popup
        $(document).on('click','.close-popup',function(){
            $(".popup-wrapper").removeClass("popup-show ")
            $("#open-opening-popup, #open-location-popup, #open-form-popup").removeClass("active")
            $("body").css("overflow-y", "auto");
        }) 


    });

    //document dots ready function End

    //define variable for store last scrolltop

    var lastScrollTop = "";
    var floatingIcon = $(".side-form-icons");

    $(window).on('scroll', function () {       
        /*---------------------------------------
                     Sticky Icon Bar
        -----------------------------------------*/
        var st = $(this).scrollTop();

        if ($(this).width() < 992) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown
                showFloatingIcon();
            } else {
                // active sticky menu on scrollup
                hideFloatingIcon();
            }
        }
        else {
            floatingIcon.css({ display: "inline-block" });
        }
        lastScrollTop = st;

    });

    $(window).on('scroll', function(){
        //back to top show/hide
        var ScrollTop = $('.back-to-top'); 
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }  
    })


    /*-----------------------------------------
              Window dots on load
    -------------------------------------------*/
    $(window).on("load", function() {
        //floatingIcon
         if ($(window).width() < 992) {
             hideFloatingIcon();
         } else {
             showFloatingIcon();
         }

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

     });
 
     /*----------------------
        Window dots Resize
     -----------------------*/
     $(window).on("resize", function(e) {
         e.preventDefault();
        // floatingIcon
         if ($('body').width() < 768) {
             hideFloatingIcon();
         } else {
             showFloatingIcon();
         }
     });
 
     function hideFloatingIcon() {
         //floatingIcon
         floatingIcon.hide();
     }
 
     function showFloatingIcon() {
         //floatingIcon
         floatingIcon.show();
     }

    function check_number(num) {
        var IsInteger = /^[0-9]+$/.test(num);
        return IsInteger ? '0' + num : null;
    }
    function testProgressbarStart(progressWidth){
        $('.testimonials-carousel-controller .testimonial-progressbar .progress-active-line').css({'width': progressWidth+'%'});
    }
    function SliderProgressbarStart(homeprogressWidth){
        $('.home-slider-progressbar .home-slider-progress-active').css({'width': homeprogressWidth+'%'});
    }
    function surgeryProgressbarStart(surgeryrogressWidth){
        $('.home-slider-progressbar .home-slider-progress-active').css({'width': surgeryrogressWidth+'%'});
    }


})(jQuery);












