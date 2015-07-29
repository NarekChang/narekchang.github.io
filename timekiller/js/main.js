$(document).ready(function() {
	
	function gameContainerRiseze(){
		var gameContainerWidth = $(".cell-wrapper").width();
		$(".cell-wrapper").height(gameContainerWidth);	
	}

	gameContainerRiseze();

	$(".level").on("mouseup", function(){gameContainerRiseze()})
	$(window).on('resize', function(){gameContainerRiseze()});

	$(".level").on("click", function(){
		$(".start-block-wrap").addClass("hide");
	});

});