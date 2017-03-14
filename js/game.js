/**
 * Created by niki on 14.03.17.
 */


var countries = [
    {question: "What is the Capital of Austria?", answer: "Vienna"},
    {question: "What is the Capital of Russia?", answer:  "Moscow"},
    {question: "What is the Capital of Norway?", answer:  "Oslo"},
    {question: "What is the Capital of Czech Republic?", answer:  "Prague"},
    {question: "What is the Capital of Croatia?", answer:  "Zagreb"}
];

function Question(country) {
    this.country = country;

    this.mainElement = $("<div class='row'>");
    this.contentElement = $("<div class='col col-xs-12'>");
    this.mainElement.append(this.contentElement);

    this.heading = $("<h3>").text("Quiz").appendTo(this.contentElement);
    
    this.inputForm = $("<form>").appendTo(this.contentElement);
    this.formGroup = $("<div class='form-group'>");
    this.question = $("<label for='game--answer'>").text(country.question)
        .appendTo(this.formGroup);
    this.inputField = $("<input type='text' class='form-control' id='game--answer'>").appendTo(this.formGroup);
    this.submitButton = $("<button type='submit' class='btn btn-default'>").text("Submit").appendTo(this.formGroup);
    this.formGroup.appendTo(this.inputForm);



    this.checkAnswer = function (answer) {
        if (answer.toUpperCase() == this.country.answer.toUpperCase()) {
            return 1;
        } else {
            return 0;
        }
    }
}


function gameLoop(questionCount) {
    var points = 0;
    


}
var modalContent = $("<div class='modal-content'>");

var startGameButton = $("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.game--modal'>").text(" Discount Game! ");
startGameButton.click(function () {
    modalContent.html(new Question(countries[0]).mainElement);
});

var gameModal = $("<div class='modal fade game--modal' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>").append($("<div class='modal-dialog modal-lg' role='document'>").append(modalContent));

$("#navigation").append(startGameButton);
$("main.container").append(gameModal);