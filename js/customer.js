/**
 * Created by niki on 14.03.17.
 */

var bookingForm = $("#customerInfoForm");
$(window).on("load", function () {
   var restoredData = getCustomerData();
    $("#bookingFirstName").val(restoredData.firstName);
    $("#bookingLastName").val(restoredData.lastName);
});


function getCustomerData() {
    var restoredData = {};
    restoredData.firstName = localStorage.getItem("firstName");
    restoredData.lastName = localStorage.getItem("lastName");
    return restoredData;
}


function validateBooking(bookingData) {

}

$("#bookingSubmibtn").click(function () {
    var bookingData = getBookingInfo();
    validateBooking(bookingData);
    saveCustomerData(bookingData.firstName, bookingData.lastName);


});