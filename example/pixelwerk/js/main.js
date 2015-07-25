$(document).ready(function() {
    if($(window).height()>=678){
		$(".video-bg-block, .page_about_view_head").height($(window).height());
		$(".video-bg").css("margin-left", -($(".video-bg").width()/2));
	}
    else{$('.video-bg-block').height('678px');$(".video-bg").css("margin-left", -($(".video-bg").width()/2));$(".page_about_view_head").height("687px");}
    $(window).resize(function() {
    	if($(window).height()>=678){
		$(".video-bg-block, .page_about_view_head").height($(window).height());
		$(".video-bg").css("margin-left", -($(".video-bg").width()/2));
        $(".view_work_block").css("top", -($(window).height()));
	}
    else{$('.video-bg-block').height('678px');$(".video-bg").css("margin-left", -($(".video-bg").width()/2));$(".page_about_view_head").height($(window).height());$(".page_about_view_head").height("687px");}
    });
    setTimeout(function(){
        $('.video-bg').animate({opacity: 1}, 1500);
    }, 2000);
    var count_works = $(".works_block li").length/2;
    if ($(".works_block ul li").length%2 >> 0) {
        count_works+=1/2;
    }
    var width_works = count_works*323;
    $(".works_block").width(width_works);
    $(".work_item").click(function(){
        $(".view_work_block").css("display","block");
        $(".view_work_block").animate({opacity: 1}, 200);
        $(".view_work_box").animate({opacity: 1, right: 0}, 500);
        $("body").css("overflow-y","scroll");
        $("#fullPage-nav, .logo, .video-bg-block").css("display","none");
        
        $(".view_work_block_close").click(function(){
            $(".view_work_block").animate({opacity: 0}, 510);
            $(".view_work_box").animate({opacity: 0, right: -600}, 300);
            setTimeout(function(){
                $(".view_work_block").css("display","none");
                $("#fullPage-nav, .logo, .video-bg-block").css("display","block");
            }, 511);    
            $(".video-bg-block").addClass("active")
            $("body").css("overflow-y","hidden");
            });
    });
    $(".logo").click(function(){
        $(".section, .logo").addClass("move_left");
        $("#page_name").css("display","none");
        $("#fullPage-nav").addClass("active");
        $(".body_block").css("display","block");
    });
    $("#fullPage-nav ul li a").click(function(){
        $(".section, .logo").removeClass("move_left");
        $("#page_name").css("display","block");
        $("#fullPage-nav").removeClass("active");
    });
    $("#superContainer").mouseenter(function(){
         $("#superContainer").click(function(){
            $(".section, .logo").removeClass("move_left");
            $("#page_name").css("display","block");
            $("#fullPage-nav").removeClass("active");
         });
    });
    if($(window).height()>=750){
       $(".page_about_view_head").height($(window).height());
    }
    $(".about_block").click(function(){  
        $(".page_about_view").css("display","block"); 
        setTimeout(function(){ 
            $(".page_about_view").addClass("show");
            $('.iphone_block').addClass("show");
        }, 100);     
    });
    $(".page_about_view_btn").click(function(){
        $(".send_status__iphone").css("display","block");
        setTimeout(function(){ 
            $(".send_status__iphone").addClass("active");
        }, 10); 
        setTimeout(function(){ 
            $(".iphone_block").addClass("active");
            $(".about_app, .about_app span a").addClass("show");
        }, 900); 
        return false;
    });
    $(".page_about_view__close").click(function(){
        if($(".iphone_block").hasClass("active")){
            $(".about_app, .about_app span a").removeClass("show");
            $(".iphone_block").removeClass("active"); 
             setTimeout(function(){ 
                 $(".iphone_block").removeClass("show"); 
            }, 400);  
            setTimeout(function(){ 
                $(".page_about_view").removeClass("show");  
            }, 500);        
        }
        else{
            $(".iphone_block, .page_about_view").removeClass("show"); 
        }
        setTimeout(function(){ 
            $(".iphone_block").removeClass("show"); 
            $(".page_about_view, .send_status__iphone").css("display","none");
            $(".send_status__iphone").removeClass("active");
        }, 800);     
    });    
    $(".iphone_block__form").focus(function(){
        $(".iphone_block_title").addClass("active");
    });
    $(".iphone_block__form").focusout(function(){
        $(".iphone_block_title").removeClass("active");
    });
});