$(document).ready(function () {
	setTimeout(godown, 1000);
	function godown(){
		$(".scrll-btn").animate({bottom: 30}, 900);
		setTimeout(goup, 900);
	}
	function goup(){
		$(".scrll-btn").animate({bottom: 50}, 900);
		setTimeout(godown, 900);
	}
	if($(window).height()>=678){
		$(".video-bg-block").height($(window).height());
		$(".scrn-wrapper").height($(window).height());
		$(".video-bg").css("margin-left", -($(".video-bg").width()/2));
	}
    else{$('.video-bg-block').height('678px');$(".scrn-wrapper").height("678px");$(".video-bg").css("margin-left", -($(".video-bg").width()/2));} 
    $(window).resize(function() {
    	var hash = location.hash;
    	if(hash==""){}
    	else{	$("html, body").animate({scrollTop: $(hash).offset().top}, 0);}
        if($(window).height()>=678){
        	$('.video-bg-block').height($(window).height());
        	$(".video-bg").css("margin-left", -($(".video-bg").width()/2));
        	$(".scrn-wrapper").height($(window).height());
        }
        else{$(".video-bg-block").height('678px');$(".scrn-wrapper").height("678px");$(".video-bg").css("margin-left", -($(".video-bg").width()/2));}
    });
	$("a.scrll-btn").click(function(){
		var h = $($(this).attr("href")).offset().top;
		$("html, body").animate({
        	scrollTop: h
    	}, 700);
		//$(window).location.hash = $(this).attr("href"); - пригодиться
		return false;
	});
	function scrllto(el){
		$('html,body').stop();
		$('html,body').animate({
	        scrollTop: el.offset().top
	    }, 700);
	}
	
	$(document).keydown(function(k){
	    if (k.keyCode == 38) {  // t
	       	var el = $(".row").eq($(".row.active").index()-1);
	       	scrllto(el);
	       	$(".row").removeClass("active");
	       	$(el).addClass("active");
	       	var hash = $(el).attr("id");
		    location.hash = hash;
	       	return false;
	    }
	    if (k.keyCode == 40) {  // d
		    var el = $(".row").eq($(".row.active").index()+1);
		    scrllto(el);
		    $(".row").removeClass("active");
		    $(el).addClass("active");
		    var hash = $(el).attr("id");
		    location.hash = hash;
		    return false;
	    }
	});
});