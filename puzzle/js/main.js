$(document).ready(function() {
	
	function gameContainerRiseze(){
		var gameContainerWidth = $(".cell-wrapper").width();
		$(".cell-wrapper").height(gameContainerWidth);	
	}

	gameContainerRiseze();

	$(window).on('resize', function(){gameContainerRiseze()});

	$(".start-game").on("click", function(){
		
		var that = $(this).parent().parent();
		
		that.addClass("hide");
	});
});