var offices = [
  {Name: 'Mount Everest Travel Agency', Address: 'Herklotzgasse 21', City: 'Wien', PostCode: '1150', Country: 'Austria', Latitude: 48.1894, Longitude: 16.3345}
];

  // Set the Google Map API 
function officeLocation() {
  var mapCenter = new google.maps.LatLng(48.1894, 16.3345);
  var mapCanvas = document.getElementById("gMapAPI");
  var mapOptions = {center: mapCenter, zoom: 17};
  var map = new google.maps.Map(mapCanvas, mapOptions);
 
 
  // initialise veriable
  var i=0;

  // inseret office addresses into API info Marker
  while (i<offices.length) {
    var markerInfo = offices[i].Name+"<br>"+offices[i].Address+"<br>"+offices[i].City+" "+offices[i].PostCode+"<br>"+offices[i].Country+"<br>";
    var officeLatLng = new google.maps.LatLng(Number(offices[i].Latitude), Number(offices[i].Longitude));
    var marker = new google.maps.Marker({position:officeLatLng});
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({content: markerInfo});
    
    infowindow.open(map,marker);
    i++
  };  // end of loop.
};  // end of map API function.