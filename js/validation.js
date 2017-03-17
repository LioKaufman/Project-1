// validation for form input on contact, booking and payment forms.




// settings of validation fields
const validationSettings = {
    phoneNumber: {
        regex: /^(\+|0|00){10}$/,
        message: "Please enter a valid Phone Number with area code.",
        optional: true
    },
    eMail: {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid eMail address.",
        optional: false
    },
    firstName: {
        regex: /^\w$/,
        message: "Please enter your First Name.",
        optional: false
    },
    lastName: {
        regex: /^\w$/,
        message: "Please enter your Last Name.",
        optional: false
    }
};


// check if a given string in fieldContent validates according to a setting in fieldName
function validateField(fieldName, fieldContent) {
    // store the selected setting
    const setting = validationSettings[fieldName];
    // test if field is optional and it doesn't contain any value
    if (setting.optional && (typeof fieldContent === "undefined" || fieldContent == "")) {
        return { valid: true, message: "ok" };
    }
    // test if the fieldContent is valid
    if (setting.regex.test(fieldContent)) {
        return { valid: true, message: "ok" };
    }
    // when all other tests fail return valid: false and the message
    return { valid: false, message: setting.message }
}


