$(document).ready(function() {
	function gameContainerRiseze(){
			var gameContainerWidth = $(".cell-wrapper").width();
			$(".cell-wrapper").height(gameContainerWidth);	
	}
	gameContainerRiseze();
	 $(window).resize(function() {
	 	gameContainerRiseze()	
	 });

});