// form validation


$(document).ready(function () {
    $('.bookingForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            lastName: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },

            passengers: {
                validators: {
                    greaterThan: {
                        value: 1
                    },
                    notEmpty: {
                        message: 'Please supply the number of people taking the trip.'
                    }
                }
            },
            nights: {
                validators: {
                    greaterThan: {
                        value: 1
                    },
                    notEmpty: {
                        message: 'Please supply the number of nights for your trip.'
                    }
                }
            },

            promoCode: {
                validators: {
                    regex: {
                        regexp: /^\d{5}$/,
                        message: 'Please enter a 5-digit discount code.'
                    }
                }
            }


        }
    })
});

