$(document).ready(function(){

	$('.header').scrollToFixed();

    $(".faq-item_text, .drop-item_text").slideUp(0);

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

        $("html, body").animate({ scrollTop: 0 }, 0);
    });

    function close_modal(){
        $(".wrapper").removeClass("blur");

        $(".modal_block_wrap.show").removeClass("show");
    }

    $(".close_btn").on("click", function(){
        close_modal();
    });

    $(".drop-menu_parent.drop-menu-event_click").on("click", function(){
        var $that  = $(this).children(".drop-menu_block");

        if($that.hasClass("show")){
            $that.removeClass("show").addClass("hide");
        }else{
            $that.removeClass("hide").addClass("show");
        }
    })

    $(".drop-menu_block.change_game_drop .drop-menu_item").on("click", function(){
        var $that = $(this),
        $parent = $that.parent(),
        clss = $that.children(".change_game").attr("class");

        $("#game_name").attr("class", clss);


        $parent.prepend( $that );

    });

    $(".check_btn").on("click", function(){
        var that = $(this);
        var el_checked = $("#" + that.data("el-checked"));

        if (!el_checked.prop("checked")) {
            that.addClass("error").delay(1000).queue(function(){
                $(this).removeClass("error").dequeue();
            });;

        }else{
            close_modal();
        }
    });

    $(".alert").each(function(){
        var that = $(this);

        setTimeout(function() {
           that.delay(2000).removeClass("show");
       }, 5000);

       that.remove();        
    });

    $(".nav-top_item").on("click", function(){
        var width = $(this).width() - 4;
        var left = $(this).offset().left - $(".container").offset().left + 1;

        $(".nav-top_item").removeClass("active");
        $(this).addClass("active");

        $(".nav-top .effect").css({
            "width" : width,
            "left"  : left
        });

    });

    $(".faq-block .faq-item .title").on("mouseup click mousedown", function(){
        
        var $that = $(this).parent().children(".faq-item_text");
        var $check = $(this).parent().children(".faq-item_check");

        if($check.prop("checked")){
            $that.slideUp();
        }else{
            $that.slideDown();
        }
    });

    $(".modal_block_wrap .drop-item .title").on("mouseup click mousedown", function(){
        
        var $that = $(this).parent().children(".drop-item_text");
        var $check = $(this).parent().children(".drop-item_check");

        if($check.prop("checked")){
            $that.slideUp();
        }else{
            $that.slideDown();
        }
    });


    $(".tooltip-event_click").on("click", function(){
        if($(this).hasClass("tooltip_parent")){
            var $this = $(this),
            $that = $this.children(".tooltip");

        }else{
            var $this = $(this).parent(),
            $that = $this.children(".tooltip");
        }

        if($that.hasClass("show")){
            $that.removeClass("show").addClass("hide");
            $this.removeClass("active");
        }else{
            $that.addClass("show").removeClass("hide");
            $this.addClass("active");
        }
    });

    $(".tooltip-event_focus").on("focus", function(){
        if($(this).hasClass("tooltip_parent")){
            var $this = $(this),
            $that = $this.children(".tooltip");

        }else{
            var $this = $(this).parent(),
            $that = $this.children(".tooltip");
        }

        if($that.hasClass("show")){
            $that.removeClass("show").addClass("hide");
            $this.removeClass("active");
        }else{
            $that.addClass("show").removeClass("hide");
            $this.addClass("active");
        }
    });

    $(".tooltip .tooltip_close").on("click", function(){
        $(this).parent().parent().removeClass("active");
        $(this).parent().removeClass("show").addClass("hide");
    });

    $(".tooltip.bottom, .tooltip.top").each(function(){
        var parent = $(this).parent(),
        right = parent.width()/2+21;
        $(this).children(".tooltip_triangle").css("right", right);
    });
    $(".tooltip.bottom.bottom_center, .tooltip.top.top_center").each(function(){
        var parent = $(this).parent(),
        left = parent.width()/2-10;
        $(this).children(".tooltip_triangle").css("left", left);
    });
    $(".tooltip.bottom.bottom_left, .tooltip.top.top_left").each(function(){
        var parent = $(this).parent(),
        left = parent.width()/2+15;
        $(this).children(".tooltip_triangle").css("left", left);
    });
    $(".tooltip.right, .tooltip.left").each(function(){
        var parent = $(this).parent(),
        top = parent.height()/2+15;
        $(this).children(".tooltip_triangle").css("top", top);
    });
    $(".tooltip.left").each(function(){
        var parent = $(this).parent(),
        top = parent.height()/2+15;
        $(this).children(".tooltip_triangle").css("top", top);
    });
    $(".tooltip.left.left_top").each(function(){
        var parent = $(this).parent(),
        top = parent.height()/2;
        $(this).children(".tooltip_triangle").css("top", top);
    });
    $(".tooltip.right.right_bottom, .tooltip.left.left_bottom").each(function(){
        var parent = $(this).parent(),
        bottom = parent.height()/2+15;
        $(this).children(".tooltip_triangle").css("bottom", bottom);
    });
    $(".tooltip-menu .tooltip-menu_item").on("click", function(){
        $(this).parent().removeClass("show").addClass("hide");       
    });

    $('html').click(function() {
        $(".tooltip_parent").removeClass("active");
        $(".tooltip, .drop-menu_parent.drop-menu-event_click .drop-menu_block").removeClass("show");
    });
    $(".tooltip_parent, .drop-menu_parent.drop-menu-event_click").click(function(event){
        event.stopPropagation();
    });


    $(".load").each(function(){
        var w = $(this).data("load");

        $(this).children(".load_line").width(w+"%");
    });
});