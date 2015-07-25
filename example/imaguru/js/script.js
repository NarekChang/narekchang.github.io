$(document).ready(function() {
    if($(window).height()>=600){$('.header_wrapper').height($(window).height());}
    else{$('.header_wrapper').height('600px');} 
    $(window).resize(function() {
        if($(window).height()>=600){$('.header_wrapper').height($(window).height());}
        else{$('.header_wrapper').height('600px');}
    });
    $(document).scroll(function() { 
        var scrl = ($(document).scrollTop()/5);
        if ($(document).height()<1200 || $(document).width()<1111) {
            $(".header_bg").css('background-position-y', "0px");
        }
        else{
            if(scrl<=(-140)){
            
            }
            else{
               $(".header_bg").css('background-position-y', scrl);
             }
        }
    });
    $(".text-block_wrapper>.text-block").css("display","none");
    $("#btn-more-review").click(function() {
        if($(this).html()=="Скрыть отзывы"){
            $("html, body").animate({scrollTop: $("#review").offset().top}, 700);
            $(this).html("Показать еще");
            $(".text-block_wrapper>.text-block").hide(400);
            $(".text-block_wrapper>.text-block").animate({opacity: 0}, 400);
        }
        else{
            $(this).html("Скрыть отзывы");
            $(".text-block_wrapper>.text-block").css("display","block");
            $(".text-block_wrapper>.text-block").animate({opacity: 1}, 400);
        }
    });
    $(".scrollBottom").click(function() {
        $("html, body").animate({scrollTop: $("#content").offset().top}, 700);
    });
    $(".scrollUP").click(function() {
        $("html, body").animate({scrollTop: $("#content").offset().top}, 700);
    });
    $(".call-feedback").click(function() {
        $(".box-coming_wrapper").css('display','block');
        $(".box-coming_bg").css('display','block');
        $("#feedback").css('display','table-cell');
        $(".box-coming_bg").animate({opacity: 0.4}, 100);
        $("#feedback").animate({opacity: 1}, 100);
        $(".first-form").focus();
    });
    $(".call-order").click(function() {
        $(".box-coming_wrapper").css('display','block');
        $(".box-coming_bg").css('display','block');
        $("#order").css('display','table-cell');
        $(".box-coming_bg").animate({opacity: 0.4}, 100);
        $("#order").animate({opacity: 1}, 100);
        $(".first-form").focus();
    });
    $(".box-coming_bg").click(function() {
        $(".box-coming_wrapper").css('display','none');
        $(".box-coming_bg").css('display','none');
        $(".box-coming").css('display','none');
        $(".box-coming_bg").css('opacity','0');
        $(".box-coming").css('opacity','0');
    });
});