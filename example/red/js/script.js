 
$(document).ready(function() { 
	if($(document).width()<1050){$('#slider-nav-block').css('display','none');$(document).css('width','941');}
		$('.selector').prepend('<div class="drop-arrow"></div>');
		$('.item-img').prepend('<div class="plus"></div>');
		$('.screen').prepend('<div class="plus"></div>');
});
