var map;
var pos = {lat: 41.85, lng: -87.65};

function ZoomControl(controlDiv, map) {

  // Set CSS for the control wrapper
  var controlWrapper = document.createElement('div');
  controlWrapper.style.cursor = 'pointer';
  controlWrapper.style.width = '56px';
  controlWrapper.style.height = '112px';
  controlWrapper.style.marginLeft = '27px';
  controlDiv.appendChild(controlWrapper);

  // Set CSS for the zoomIn
  var zoomInButton = document.createElement('div');
  zoomInButton.style.width = '56px';
  zoomInButton.style.height = '60px';
  /* Change this to be the .png image you want to use */
  zoomInButton.style.backgroundRepeat = "no-repeat",
  zoomInButton.style.backgroundImage = 'url("files/img/zoom_plus.png")';
  controlWrapper.appendChild(zoomInButton);

  // Set CSS for the zoomOut
  var zoomOutButton = document.createElement('div');
  zoomOutButton.style.width = '56px';
  zoomOutButton.style.height = '56px';
  /* Change this to be the .png image you want to use */
  zoomOutButton.style.backgroundImage = 'url("files/img/zoom_minus.png")';
  controlWrapper.appendChild(zoomOutButton);

  // Setup the click event listener - zoomIn
  google.maps.event.addDomListener(zoomInButton, 'click', function() {
    map.setZoom(map.getZoom() + 1);
  });

  // Setup the click event listener - zoomOut
  google.maps.event.addDomListener(zoomOutButton, 'click', function() {
    map.setZoom(map.getZoom() - 1);
  });

}

//--Geobtn--//
function CenterControl(controlDiv, map) {
  var controlUI = document.createElement('div');
  controlUI.style.marginTop = '10px';
  controlUI.style.marginLeft = '27px';
  controlUI.style.cursor = 'pointer';
  controlUI.style.width = '56px';
  controlUI.style.height = '56px';
  controlUI.style.backgroundImage = 'url(files/img/geo_location.png)';
  controlDiv.appendChild(controlUI);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    map.setCenter(pos);
  });
}
//--Geobtn--//
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 59.95908457546194, lng: 30.321958714294418},
    zoom: 16,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: {lat: 59.95923521858213, lng: 30.320327931213377},
    map: map,
    icon: 'files/img/marker_point.png'
  });
  
//---Временная заглушка----//
  marker.addListener('click', function() {
    $(".more-info_wrapper").addClass("show");
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var punkt = new google.maps.Marker({
        position: pos,
        map: map,
        icon: 'files/img/point.png'
      });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }

 var zoomControlDiv = document.createElement('div');
 var zoomControl = new ZoomControl(zoomControlDiv, map);

 zoomControlDiv.index = 1;
 map.controls[google.maps.ControlPosition.LEFT_CENTER].push(zoomControlDiv);

 //--Geobtn--//
 var centerControlDiv = document.createElement('div');
 var centerControl = new CenterControl(centerControlDiv, map);
 centerControlDiv.index = 1;
 map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);
 //--Geobtn--//

}
