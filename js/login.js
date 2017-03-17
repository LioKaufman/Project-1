// User credentials setting and getting using localstorage
// Simulating login functionality


// helper function to retrieve customer data from local storage
function getCustomerData() {

    // check if customer data in local storage
    if (localStorage.hasOwnProperty("customerData")){
        return JSON.parse(localStorage.getItem("customerData"));
    }

    // if there isn't return empty customer object
    return { firstName: "", lastName: "", eMail: "", BIC: "", IBAN: ""}
}

// helper function to set customer data in local storage
function setCustomerData(data) {
    localStorage.setItem("customerData", JSON.stringify(data));
}

// helper function to clear customer data in local storage
function clearCustomerData() {
    localStorage.removeItem("customerData");
}

// execute when the dom is finished building
// earliest point before for instance images are loaded
// content will appear to be already there and not "pop in"
$(document).on("ready", function () {

    // store the current customer data into a variable so we only have to get the data once.
    var customer = getCustomerData();
    $(".formFirstName").val(customer.firstName);
    $(".formLastName").val(customer.lastName);
    $(".formEmail").val(customer.eMail);

    // additional fields for payment, might move to another file
    $(".formBIC").val(customer.BIC);
    $(".formIBAN").val(customer.IBAN);

});
