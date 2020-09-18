function initMap() {

//Get elements for map functionality
var mapLocation = {lat: 55.449833 , lng: -2.2341695};


//Map functionality

var map = new google.maps.Map(
document.getElementById('map'), {zoom: 20, center: mapLocation}
);

var marker = new google.maps.Marker({position: mapLocation, map: map});    
}