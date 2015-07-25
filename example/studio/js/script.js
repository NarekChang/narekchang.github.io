$(document).ready(function() {
    if($(window).height()>=600){$('#welcome_block').height($(window).height()-94);}
    else{$('#welcome_block').height('506px');} 
    $(window).resize(function() {
        if($(window).height()>=600){$('#welcome_block').height($(window).height()-94);}
        else{$('#welcome_block').height('600px');}
    });
    if($(window).width()<=360){
    $(".welcome_block_wrapper span").html("Vi lager minimalistiske, brukervenlige og på samme tid fine websider og apper.");
    }
    $("#scrll_down").click(function() {
    	$("html, body").animate({scrollTop: $("#work_block").offset().top}, 700);
    });
    $("#scrll_contact").click(function() {
    	$("html, body").animate({scrollTop: $("#contact_block").offset().top}, 700);
    });
    $(".nav_head li a").click(function() {
    	var block = $(this).attr("data-block");
    	$("html, body").animate({scrollTop: $(block).offset().top}, 700);
    });
    $(".post_view__shadow").click(function() {
        $(".post_view__wrapper").css("display","none")
    });
    if(location.hash != ''){ 
        var hash = location.hash;
        hash = hash.substring(1);
        $(".nav_work_block_subject li").removeClass("active");
        $(".work_subject").removeClass("active");
        $(".work_subject").css("display","none");
        $("#" + hash).addClass("active");
        $("." + hash).addClass("active");
        if(hash == "workall"){ 
                $(".work_subject").css("display","none");
                $(".work_subject").removeClass("active");
                $(".work_subject").addClass("active");
            }
    } 
    else {}
    $( window ).on( "hashchange", function( event ) { 
                var hash = location.hash;
                hash = hash.substring(1);
                $(".work_subject").removeClass("active");
                $(".work_subject").css("display","none");
                $("." + hash).addClass("active");
                if(hash == "workall"){ 
                    $(".work_subject").css("display","none");
                    $(".work_subject").removeClass("active");
                    $(".work_subject").addClass("active");
                 }
        });
    $(".nav_work_block_subject li a").click(function () {
        $(".nav_work_block_subject li").removeClass("active");
        $(this).parent().addClass("active");
    //calculate destination place
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
    } else {
        dest = $(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({
        scrollTop: dest
    }, 700, 'swing');
});
});
