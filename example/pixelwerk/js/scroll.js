$(document).ready(function() {
	$.fn.fullpage({
		'verticalCentered': true,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'left',
	});
	//playing the video
	$('video').get(0).play();
});