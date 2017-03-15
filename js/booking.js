/**
 * Created by niki on 15.03.17.
 */



function showPackage() {
    var selectedPackage = JSON.parse(localStorage.getItem("destination"));
    var packageImg = $("<img>").attr("src", selectedPackage.Picture);
    $("#packagePicture").append(packageImg);
};


showPackage();


/**
 *  If customer's first name starts with C, L, H, I, G  they should immediately get
 *  discount of 20% and they can combine this discount with game discount.
 * @param firstName
 * @param discountCode
 */
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