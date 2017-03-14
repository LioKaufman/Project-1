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

var modalContent = $("<div class='modal-content'>");


function Question(country, number, count) {
    this.country = country;

    this.mainElement = $("<div class='row'>");
    this.contentElement = $("<div class='col col-xs-12'>");
    this.mainElement.append(this.contentElement);

    this.heading = $("<h3>").text("Quiz").appendTo(this.contentElement);
    this.counter = $("<p>").text("Question "+number+" of "+count).appendTo(this.contentElement);
    
    this.inputForm = $("<form>").appendTo(this.contentElement);
    this.formGroup = $("<div class='form-group'>");
    this.question = $("<label for='game--answer'>").text(country.question)
        .appendTo(this.formGroup);
    this.inputField = $("<input type='text' class='form-control' id='game--answer'>").appendTo(this.formGroup);
    this.submitButton = $("<button type='button' class='btn btn-default'>").text("Submit").appendTo(this.formGroup);
    this.formGroup.appendTo(this.inputForm);

    this.setCallBack = function (callback) {
        this.submitButton.click(callback);
    };

    this.show = function () {
        modalContent.html(this.mainElement);
    };



    this.checkAnswer = function (answer) {
        if (typeof answer === "undefined") {
            answer = this.inputField.val();
        }
        if (answer.toUpperCase() == this.country.answer.toUpperCase()) {
            return 1;
        } else {
            return 0;
        }
    }
}


function pickRandomQuestions(questionCount) {
    var questions = [];
    while (questions.length < questionCount) {
        var questionIndex = Math.floor(Math.random() * countries.length);
        nextQuestion = countries[questionIndex];
        var unique = true;
        questions.map(function (element) {
            if (element.question == nextQuestion.question) {
                unique = false;
            }
        });
        if (unique) {
            questions.push(nextQuestion);
        }
    }
    return questions;
}

function startGame() {
    var questions = pickRandomQuestions(5);
    var questionForms = questions.map(function (question, index) {
        return new Question(question, index + 1, questions.length);

    });
    var score = 0;
    var firstForm = questionForms[0];
    //console.log(firstForm);
    for (var questionIndex = 0 ; questionIndex < questionForms.length-1 ; questionIndex++) {
        const currentForm = questionForms[questionIndex];
        const nextForm = questionForms[questionIndex+1];
        console.log(questionIndex);
        currentForm.submitButton.click(function () {
            console.log('click!');
            score += currentForm.checkAnswer();
            nextForm.show();
        })
    }
    firstForm.show();

}



/*
function gameLoop(questionCount) {
    var points = 0;

    var questions = pickRandomQuestions(questionCount);
    var firstQuestion = new Question(questions[0], 1, questions.length);
    firstQuestion.setCallBack(function () {

    });
    firstQuestion.show();

    })


}
*/

var startGameButton = $("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.game--modal'>").text(" Discount Game! ");
startGameButton.click(function () {
    //testForm = new Question(countries[0], 1, 5);
    //testForm.show();
    startGame();
});

var gameModal = $("<div class='modal fade game--modal' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>").append($("<div class='modal-dialog modal-lg' role='document'>").append(modalContent));

$("#navigation").append(startGameButton);
$("main.container").append(gameModal);