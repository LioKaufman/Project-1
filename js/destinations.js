



// genarate the destination cards. 
for(i=0; i<destinations.length; i++) {
  var price = Number(destinations[i].Extra+destinations[i].BaseRate);
  var destinationCard = "<div class='Destination col-md-4 col-sm-6 col-xs-12'> <h2 class='destinationTitle col-xs-12'>"+destinations[i].Title+"</h2> <figure class='col-xs-12'> <img class='destinationImage img-responsive' src='"+destinations[i].Picture+"' alt='Picture of "+destinations[i].Title+" Destination'> </figure> <div class='destinationDescription col-xs-12'> "+destinations[i].Desc+"</div> <article class='row'> <h5 class='destinationPrice col-xs-7'> <b>Price:</b> €"+price+".00 per Person</h5> <button type='button' id='btn"+destinations[i].Title+"' class='btn btn-primary col-xs-3 col-xs-offset-1'>Book Now</button> </article> </div>" 

  $("#destinationCards").prepend(destinationCard);

  //console.log(destinations[i].Title);
  const currentDestination = destinations[i];
  
  // store the data into Local Storage
  $("#btn"+destinations[i].Title).click(function(){
    console.log(currentDestination);
    var packageSelected = JSON.stringify(currentDestination);
    localStorage.setItem("destination", packageSelected);

    // link to booking page
    window.open("booking.html");
  });  // end function to store data
}  // end for looop to genarate the destination cards.


 var offices = [
  {Name: 'Mount Everest Travel Agency', Address: 'Herklotzgasse 21', City: 'Wien', PostCode: '1150', Country: 'Austria', Latitude: 48.1894, Longitude: 16.3345}
];

  // Set the Google Map API 
function desLocations() {
  var mapCenter = new google.maps.LatLng(48.1894, 16.3345);
  var mapCanvas = document.getElementById("destinationsMapAPI");
  var mapOptions = {center: mapCenter, zoom: 2};
  var map = new google.maps.Map(mapCanvas, mapOptions);
 
 
  // initialise veriable
  var i=0;

  // inseret office addresses into API info Marker
  while (i<destinations.length) {
    var markerInfo = destinations[i].Title;
    var officeLatLng = new google.maps.LatLng(Number(destinations[i].Latitude), Number(destinations[i].Longitude));
    var marker = new google.maps.Marker({position:officeLatLng});
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({content: markerInfo});
    
    infowindow.open(map,marker);
    i++
  }  // end of loop.
}  // end of map API function.
