var destinations = [
  {
    Title: "Thailand",
    Picture: "../img/locations/thailand.jpg",
    BaseRate: 600, 
    Extra: 50,
    Latitude: 13.75,
    Longitude: 100.50,
    Desc: "Our tours to Thailand are one of the most popular on our entire website. We'll fly you in to Bangkok where you start your trip seeing the capital city and eat amazing street food. We'll then take you on a tour through Chiang Mai in the north, and the beautiful southern island of Phuket."
  },
  {
    Title: "Egypt",
    Picture: "../img/locations/egypt.jpg",
    BaseRate: 400,
    Extra: 50,
    Latitude: 30.04,
    Longitude: 31.24,
    Desc: "Our pacakge to Egypt is an unforgettable experience. From seeing the timeless pyraminds of Giza and the Sphinx, to a river cruise along the Nile, you will have memories to last a lifetime. We also take you for scuba diving in the Red Sea at Sharm El Sheik, and an excusrsion to Luxor in the south to visit the Valley of the Kings."
  },
  {
    Title: "United States",
    Picture: "../img/locations/usa.jpg",
    BaseRate: 800,
    Extra: 50,
    Latitude: 40.78,
    Longitude: -73.97,
    Desc: "Our USA tour starts off in New York City, finises in Los Angeles, and has stops in Florida and Texas along the way, all by cross-country rail. There is no better way to see all the best sights America has to offer. We also take a side trip to see the Grand Canyon and Roswell, New Mexico in the Southwest."
  },
  {
    Title: "Brazil",
    Picture: "../img/locations/brazil.jpg",
    BaseRate: 700,
    Extra: 50,
    Latitude: -22.92,
    Longitude: -43.19,
    Desc: "Visiting Brazil is the experience of a lifetime. Seeing the Cristo Redentor in Rio de Janeiro from a hill overlooking the entire city at sunset, is on everyone's bucket list. We also include a visit to Florianopolis in the south to visit some amazing beaches and try out your paragliding skills as well!"
  },
  {
    Title: "South Korea",
    Picture: "../img/locations/korea.jpg",
    BaseRate: 650,
    Extra: 50,
    Latitude: 37.54,
    Longitude: 126.93,
    Desc: "Visit South Korea for a cultural experience like no other. We start from Seoul with a full day trip to the DMZ, the most controversial border in the world, where the Korean War technically has never ended! Along the way you'll experience Soju, Korean BBQ, and the all night experience of partying in Itaewon. We finish the tour with the beautiful coastal city of Busan in the south."
  },
  {
    Title: "Australia",
    Picture: "../img/locations/australia.jpg",
    BaseRate: 900,
    Extra: 50,
    Latitude: -33.86,
    Longitude: 151.21,
    Desc: "If you fancy seeing some kangaroos, snakes, and jellyfish, you'll get all of that and more, with our Australia package! We'll visit Sydney and Melbourne on this trip, see some amazing coastline, beaches, animals, and the funniest english accent you'll ever meet on this side of the equator! The Sydney Opera house is world famous and you'll have an amazing view of it while climbing to the top of the Sydney Harbor Bridge!"
  },
  {
    Title: "France",
    Picture: "../img/locations/france.jpg",
    BaseRate: 300,
    Extra: 50,
    Latitude: 48.85,
    Longitude: 2.34,
    Desc: "Everyone has to visit France at least once in their life! We will stop in Paris to see the Eiffel Tower, Arc de Triumph, Notre Dame, and the best croissants you'll ever eat! Then we head west to see the beaches of Normandy, the historical site from the D-Day landings of World War Two. Finally we'll head south to Bordeaux and Lyon to cap off this trip."
  },
  {
    Title: "South Africa",
    Picture: "../img/locations/southAfrica.jpg",
    BaseRate: 500,
    Extra: 50,
    Latitude: -33.92,
    Longitude: 18.42,
    Desc: "We fly into Johannesburg to start the tour and spend a few days, then you'll be whisked off to Cape Town in the south, where you can see sharks, climb Table Mountain and Lion's Head, take some relaxing tours of the local vineyards, and hike to Cape Point, the southernmost point of the entire African continent!"
  },
  {
    Title: "Portugal",
    Picture: "../img/locations/portugal.jpg",
    BaseRate: 250,
    Extra: 50,
    Latitude: 38.72,
    Longitude: -9.13,
    Desc: "Portugal is one of Europe's best kept secrets, but we've got the inside scoop on it all! We'll visit Porto and Lisbon, the 2 biggest cities in Portugal, where you can indulge on amazing food and wine, and see all the historical sites of one of the oldest countries of Europe. We finish the tour with the pristine beaches of Faro in the south."
  },
  {
    Title: "Mexico",
    Picture: "../img/locations/mexico.jpg",
    BaseRate: 750,
    Extra: 50,
    Latitude: 19.43,
    Longitude: -99.13,
    Desc: "If you love tequila and tacos, our Mexico tour is just for you! This is one of the best countries in the world to satisfy your taste buds, and we'll also include some memororable sightseeing destinations as well, like the pyramids of Teotihuacan and Chichen Itza, the Jose Cuervo tequila distillery, and the party beaches of Cancun and Playa del Carmen on the Yucatan peninsula."
  },
  {
    Title: "India",
    Picture: "../img/locations/india.jpg",
    BaseRate: 450,
    Extra: 50,
    Latitude: 28.70,
    Longitude: 77.10,
    Desc: "We've got a full itinerary on the slate for you if you choose our India package. Mumbai, Delhi, the Taj Mahal, and amazing vegetarian food are all part of this journey. Experience a culture like none other around the world. Just watch out for elephants and cows crossing the road!"
  },
  {
    Title: "Iceland",
    Picture: "../img/locations/iceland.jpg",
    BaseRate: 250,
    Extra: 50,
    Latitude: 64.12,
    Longitude: -21.81,
    Desc: "Contrary to popular belief, Iceland is actually not full of ice! And in the summertime, its actually quite warm, try out the black sand beaches in the south if you're feeling adventurous! We fly in to the capital region to see Reykyjavik and meet our local guides, who will then take us on a tour of the Golden Circle, to see the waterfalls of Gullfoss, the Continental Divide, and try out fermented shark meat, a specialty amongst the locals!"
  }
];

var offers = [
  {Title: "Thailand", MinNights: 4, Discount: 0.1},
  {Title: "Egypt", Title: MinNights: 4, Discount: 0.1},
  {Title: "United States", MinNights: 4, Discount: 0.1},
  {Title: "Brazil", MinNights: 4, Discount: 0.1},
  {Title: "South Korea", MinNights: 4, Discount: 0.1}
];


for(i=0; i<destinations.length; i++) {
  var price = destinations[i].Price+destinations[i].BaseRate;
  var destinationCard = "<div class='Destination col-md-4 col-sm-6 col-xs-12'> <h2 class='destinationTitle col-xs-12'>"+destinations[i].Title+"</h2> <figure class='col-xs-12'> <img class='destinationImage img-responsive' src='"+destinations[i].Picture+"' alt='Picture of "+destinations[i].Title+" Destination'> </figure> <div class='destinationDescription col-xs-12'> "+destinations[i].Desc+"</div> <article class='row'> <h5 class='destinationPrice col-xs-7'> <b>Price:</b> €"+price+".00 per Person</h5> <button type='button' id='btn"+destinations[i].Title+"' class='btn btn-primary col-xs-3 col-xs-offset-1'>Book Now</button> </article> </div>" 

  $("#destinationCards").prepend(destinationCard);

};  // end for looop


   // Set the Google Map API 
function desLocations() {
  var mapCenter = new google.maps.LatLng(48.18971119999999, 16.33426940000004);
  var mapCanvas = $("#destinationsMapAPI");
  var mapOptions = {center: mapCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
 
  
  for(i=0; i<destinations.length; i++) {
    var markerInfo = destinations[i].Title;
    var desLatLng = new google.maps.LatLng(Number(destinations[i].Latitude), Number(destinations[i].Longitude));
    var marker = new google.maps.Marker({position:desLatLng});
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({content: markerInfo});
    
    infowindow.open(map,marker);
  };  // end for loop.
};  // end function officeLocation. 