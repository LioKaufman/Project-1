var destinations = [
  {Name: 'Mount Everest Travel Agency', Address: 'Herklotzgasse 21', City: 'Wien', PostCode: '1150', Country: 'Austria', Latitude: 48.1894, Longitude: 16.3345}
];

  // Set the Google Map API 
function destinationLocation() {
  var mapCenter = new google.maps.LatLng(13.75, 100.50);
  var mapCanvas = document.getElementById("destinationMapAPI");
  var mapOptions = {center: mapCenter, zoom: 4};
  var map = new google.maps.Map(mapCanvas, mapOptions);
 
 
  // initialise veriable
  var i=0;

  // inseret office addresses into API info Marker
  while (i<destinations.length) {
    var markerInfo = destinations[i].Name+"<br>"+destinations[i].Address+"<br>"+destinations[i].City+" "+destinations[i].PostCode+"<br>"+destinations[i].Country+"<br>";
    var officeLatLng = new google.maps.LatLng(Number(destinations[i].Latitude), Number(destinations[i].Longitude));
    
    infowindow.open(map,marker);
    i++
  };
};