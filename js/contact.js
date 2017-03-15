/**
 * Created by niki on 14.03.17.
 */

var bookinForm = $("customerInfoForm");

function saveCustomerData(firstName, lastName, bankAccount) {
    var toSaveData = {};
    toSaveData.firstName = firstName;
    toSaveData.lastName = lastName;
    toSaveData.bankAccount = bankAccount;

    var toSaveString = JSON.stringify(toSaveData);
    localStorage.saveItem("customerData", toSaveString);
}

function getCustomerData() {
    var restoredString = localStorage.getItem("customerData");
    var restoredData = JSON.parse(restoredData);

    return restoredData;
}
