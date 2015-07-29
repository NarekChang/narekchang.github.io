$(document).ready(function() {

	function getRandomArbitrary(min, max) {
	    return Math.random() * (max - min) + min;
	}

	var arrayEmojiEasy = ["emoji1f617", "emoji1f617", "emoji1f61f", "emoji1f61f", "emoji1f627", "emoji1f627", "emoji1f62e", "emoji1f62e", "emoji1f634", "emoji1f634", "emoji1f681", "emoji1f681", "emoji1f686", "emoji1f686", "emoji1f68d", "emoji1f68d"];

	$(".easy").on("click", function(){
		
		$(".cell-wrapper").remove();

		var $cellWrapper = $('<div class="cell-wrapper cell-wrapper_' + 44 + '"/>');
		$(".game-container").append( $cellWrapper );
		
		for (var i = 1; i < 17; i++) {

			var n = 16 - i;
			var rand = Math.round(getRandomArbitrary(0, n));
			var emojiNum = arrayEmojiEasy[rand];

			var $emoji = $('<span class="emoji ' + emojiNum + '" data-value="' + emojiNum + '"/>');
			var $cell = $('<span class="cell hidden"/>').append($emoji);

			arrayEmojiEasy.splice(rand,1);

			$(".cell-wrapper").append( $cell );
		}

		var gameContainerWidth = $(".cell-wrapper").width();
		$(".cell-wrapper").height( gameContainerWidth );	
	});

	$(".cell.hidden").live("click", function(){

		var score = +$("#score").html()+1;
		$("#score").html(score);
		$("#result").html(score);

		$(this).removeClass("hidden").addClass("show");

		if($(".cell.show").length>=2){
			var val1 = $(".cell.show").eq(0).children(".emoji").data("value");
			var val2 = $(".cell.show").eq(1).children(".emoji").data("value");

			if(val1 == val2){
				
				$(".cell.show").removeClass("hidden show");

				if($(".cell.hidden").length==0){
					$(".result-block-wrap").removeClass("hide");
				}
			}else{
				$(".cell-wrapper").addClass("no_active");

				function closeCell(){
					$(".cell.show").removeClass("show").addClass("hidden");
					$(".cell-wrapper").removeClass("no_active");
				}

				setTimeout(closeCell, 400);				
			}
		}
	})
});