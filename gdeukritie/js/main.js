$(document).ready(function(){
  $(".header .select-city_block .select-city li label").click(function(){
    var that = $(this),
    checkSelect = $("#select-city_check"),
    currentCity = $(".header .cur_city"),
    cityName = that.html();

    currentCity.html(cityName);
    checkSelect.prop( "checked", false );
  });
});
