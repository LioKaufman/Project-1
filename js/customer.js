/**
 * Created by niki on 14.03.17.
 */

var bookingForm = $("#customerInfoForm");
$(window).on("load", function () {
   var restoredData = getCustomerData();
    $("#bookingFirstName").val(restoredData.firstName);
    $("#bookingLastName").val(restoredData.lastName);
    console.log("*");
});


function saveCustomerData(firstName, lastName) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
}

function getCustomerData() {
    var restoredData = {};
    restoredData.firstName = localStorage.getItem("firstName");
    restoredData.lastName = localStorage.getItem("lastName");
    return restoredData;
}

function getBookingInfo() {
    var bookingData = {};
    bookingData.firstName = $("#bookingFirstName").val();
    bookingData.lastName = $("#bookingLastName").val();
    bookingData.email = $("#bookingEmail").val();
    bookingData.passengers = $("#bookingPassengers").val();
    bookingData.date = $("#date").val();
    bookingData.nights = $("#bookingNights").val();
    bookingData.promoCode = $("#bookingPromoCode").val();
    return bookingData;
}

function validateBooking(bookingData) {
    // TODO: implement validation
}

$("#bookingSubmibtn").click(function () {
    var bookingData = getBookingInfo();
    validateBooking(bookingData);
    saveCustomerData(bookingData.firstName, bookingData.lastName);


});