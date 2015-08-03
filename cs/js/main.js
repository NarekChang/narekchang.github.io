$(document).ready(function(){
	$(".content .table_hedear .search .search_text").change(function(){
		if($(this).val()==""){$(this).removeClass("active")}else{$(this).addClass("active")};
	});
});