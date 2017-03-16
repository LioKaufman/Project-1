
// Calls the payment request form in a Modal page on click of package selection button.
$("#packageSubmitBtn").click(function(){

	// Constract the payment div elements
	var paymentCard = $("<div class='bookingForm col-xs-8 col-xs-offset-2 modal-content'>");
	var section = $("<section class='row'>");
	var heading = $("<h3>").text("Payment Details");
	var bankIBAN = $("<input id='paymentIBAN' class='input-lg col-xs-5' type='text' name='IBAN' placeholder='IBAN Code'>");
	var banBIC =$("<input id='paymentBIC' class='input-lg col-xs-5 col-xs-offset-2' type='text' name='BIC' placeholder='BIC Code'>");
	var Price = $("<div id='totalPrice' class='input-lg col-xs-5'>");
	var Button = $("<button id='bookingSubmitBtn' class='Submibtn btn btn-primary col-xs-4 col-xs-offset-3' type='button'>").text("Book Destination");

	// construct the elements together into a cohesive layout
	var firstSection = section.append(heading);
	var secondSection = section.append(bankIBAN).append(banBIC);
	var thirdSection = section.append(Price).append(Button);

	paymentCard.append(firstSection).append(secondSection).append(thirdSection);

	// display content
	$("#paymentDetails").html(paymentCard);

	console.log(firstSection);
	console.log(secondSection);
	console.log(thirdSection);
	console.log(paymentCard);

});  // end function payment div in modal page.


// function to collect all the booking and personal data and store it in local storage.
function getBookingData() {

};  // end function getBookingData. 


// function to add 20% discount if customer's first name starts with 'C', 'L', 'H', 'I', or 'G'. 
function calculateDiscount(firstName, discountCode) {
    var discount = 0;

    var firstNameBegin = firstName.charAt(0).toUpperCase();
    switch (firstNameBegin) {
        case "C":
        case "L":
        case "H":
        case "I":
        case "G":
            discount += 0.2;
            break;
        default:
            break;
    }
    discount +=  getDiscount(discountCode);

    return discount;
}

// function to claculate the final price, including discounts, of the selected package. 
Function clacPrice() {
	 var selectedPackage = JSON.parse(localStorage.getItem("destination"));


};  // end function clacPrice.