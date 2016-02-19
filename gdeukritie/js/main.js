$(document).ready(function(){
  $('html').click(function() {
      $("#select-city_check").prop("checked", false);
  });
  $(".select-city_block").click(function(event){
      event.stopPropagation();
  });

  $(".header .select-city_block .select-city li label").click(function(){
    var that = $(this),
    checkSelect = $("#select-city_check"),
    currentCity = $(".header .cur_city"),
    cityName = that.html();

    currentCity.html(cityName);
    checkSelect.prop( "checked", false );
  });

  $(".modal_call").click(function(){
    var that = $(this),
    el_id = $("#" + that.data("el-id"));

    $(".modal_block").removeClass("show");
    el_id.addClass("show");
  });

  $(".close_modal").click(function(){
    var that = $(this),
    parent = that.parents(".modal_block");

    parent.removeClass("show");
   });

});
