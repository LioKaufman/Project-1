var bookingForm = $("#customerInfoForm");



// function gets the spesific details of the booking from local storage and displies picture 
function showPackage() {
   // get info from local storage
   var selectedPackage = JSON.parse(localStorage.getItem("destination"));

   // set picture from local storage as variable
   var packageImg = $("<img>").attr("src", selectedPackage.Picture);
   if ("Nights" in selectedPackage) {
       $("#bookingNights").val(selectedPackage.Nights).prop("disabled", true);
   }

   // displys picture of selected locaiton
   $("#packagePicture").append(packageImg);
}; // End of function showPackage.

showPackage();

 
// Set the Google Map API 
function destinationMapAPI() {
       // get info from local storage
   var selectedPackage = JSON.parse(localStorage.getItem("destination"));

   var mapCenter = new google.maps.LatLng(selectedPackage.Latitude, selectedPackage.Longitude);
   var mapCanvas = document.getElementById("packageMapAPI");
   var mapOptions = {center: mapCenter, zoom: 11};
   var map = new google.maps.Map(mapCanvas, mapOptions);

   var officeLatLng = new google.maps.LatLng(Number(selectedPackage.Latitude), Number(selectedPackage.Longitude));
   var marker = new google.maps.Marker({position:officeLatLng});

   marker.setMap(map);
      
   // var infowindow = new google.maps.InfoWindow({content: markerInfo});
    
   // infowindow.open(map,marker);
}; // end function show google Map API.

$(window).on("load", function () {
    var restoredData = JSON.parse(localStorage.getItem("customerData"));
    console.log($("#bookingFirstName"));
    $("#bookingFirstName").val(restoredData.firstName);
    $("#bookingLastName").val(restoredData.lastName);
    $("#bookingEmail").val(restoredData.email);
});
