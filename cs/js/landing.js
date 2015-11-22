$('.header').scrollToFixed();

$(document).ready(function(){    

    $(document).scroll(function() { 
        var scrl = ($(document).scrollTop()/4);
        if ($(document).height()<1200 || $(document).width()<1111) {
            $(".wrapper").css('background-position-y', "0px");
        }
        else{
            if(scrl<=(-140)){
            
            }
            else{
               $(".wrapper").css('background-position-y', scrl);
             }
        }
    });

    
    $(".call_modal").on("click", function(){

        var modalName = "#" + $(this).data("modal-name");

        $(".wrapper").addClass("blur");

        $(modalName).addClass("show");

    });
    $(".close_btn").on("click", function(){
        $(".wrapper").removeClass("blur");

        $(this).parent().removeClass("show");
    });

     // parallax-window" data-parallax="scroll" data-image-src="file/img/bg_landing_1.jpg

    // $(".carousel_wrapper li:first-child, .carousel_wrapper li:nth-child(5)").addClass("disable");

    // $('.carousel_container').Carousel({visible:5,rotateBy:1,speed: 600,btnNext: '#next',btnPrev: '#prev', auto: false, backslide: true, margin: 0}); 

    

    // slider = $('.carousel').bxSlider({
    //     slideWidth: 220,
    //     minSlides: 5,
    //     maxSlides: 5,
    //     moveSlides: 2,
    //     slideMargin: 10,
    //     navigation: true,
    //     pager: false
    // });

    // $(".bx-wrapper .bx-controls-direction a").on("click", function(){
    //     var current = slider.getCurrentSlide();

    //     var c = Math.floor($('.bx-wrapper').width() / 220);

    //     console.log(c);

    //     $(".content .carousel_container .carousel li").removeClass("active");
    //     $(".content .carousel_container .carousel li").eq(current).addClass("active");

    // });

    //     var current = slider.getCurrentSlide();

    //     console.log(current);

    //     $(".content .carousel_container .carousel li").removeClass("active");
    //     $(".content .carousel_container .carousel li").eq(current).addClass("active");

    $('.carousel').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                centerPadding: '0',
                arrows: false,
                centerMode: true
              }
            }
          ]
        });
                    
});