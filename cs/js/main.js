$(document).ready(function(){
	$(".content .table_hedear .search .search_text").change(function(){
		if($(this).val()==""){$(this).removeClass("active")}else{$(this).addClass("active")};
	});
	$(".call_modal").on("click", function(){

		var modalName = "#" + $(this).data("modal-name");

		$(".wrapper").addClass("blur");

		$(modalName).addClass("show");
	});
	$(".close_btn").on("click", function(){
		$(".wrapper").removeClass("blur");

		$(this).parent().removeClass("show");
	});
});