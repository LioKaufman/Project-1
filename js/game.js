/**
 * Created by niki on 14.03.17.
 */


var countries = [
    {name: "Austria", capital: "Vienna"},
    {name: "Russia", capital:  "Moscow"},
    {name: "Norway", capital:  "Oslo"},
    {name: "Czech Republic", capital:  "Prague"},
    {name: "Croatia", capital:  "Zagreb"}
];

function Question(country) {
    this.country = country;

    this.mainElement = $("<div class='row'>");
    this.contentElement = $("<div class='col col-xs-12'>");
    this.mainElement.append(this.contentElement);

    this.heading = $("<h3>").text("Quiz");
    
    this.inputForm = $("<form>").preventDefault().appendTo(this.contentElement);
    this.formGroup = $("<div class='form-group'>");
    this.question = $("<label for='game--answer'>").text("Enter this capital of "+this.country.name+"!")
        .appendTo(this.formGroup);
    this.inputField = $("<input type='text' class='form-control' id='game--answer'>").appendTo(this.formGroup);
    this.submitButton = $("<button type='submit' class='btn btn-default'>").text("Submit").appendTo(this.formGroup);
    this.formGroup.appendTo(this.inputForm);



    this.checkAnswer = function (answer) {
        if (answer.toUpperCase() == this.country.capital.toUpperCase()) {
            return 1;
        } else {
            return 0;
        }
    }

}
var modalContent = $("<div class='modal-content'>");

var gameModal = $("<div class='modal fade game--modal' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>").append($("<div class='modal-dialog modal-lg' role='document'>").append(modalContent));

var startGameButton = $("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.game--modal'>").text(" Discount Game! ");

$("#navigation").append(startGameButton);
$("main .container").append(gameModal);