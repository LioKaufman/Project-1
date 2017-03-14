/**
 * Created by niki on 14.03.17.
 */


var countries = [
    {question: "In which city can you find a famous ferris wheel featured in the movie Before Sunrise?", answer: "Vienna"},
    {question: "Which city is home to the White House currently occupied by Donald Trump?", answer: "Washington D.C."},
    {question: "Which city can you ride on the BTS or MRT?", answer: "Bangkok"},
    {question: "Which city is home to the famous Eiffel Tower?", answer: "Paris"},
    {question: "In which city can you walk through Checkpoint Charlie?", answer: "Berlin"},
    {question: "Which capital city is also know simply as DF?", answer: "Mexico City"},
    {question: "Which city is the current home of the Egyptian temple of Debod?", answer: "Madrid"},
    {question: "Which city is home to Hallgrimskirkja?", answer: "Reykjavik"},
    {question: "In which city can you find the Ponte Vasco de Gama?", answer: "Lisbon"},
    {question: "Which city is home to the famous nightlife district called Itaewon?", answer: "Seoul"},
    {question: "What is the Capital of the largest Muslim country in the world?", answer: "Jakarta"},
    {question: "In which city can you find the Gold Mask of Tutankhamun?", answer: "Cairo"},
    {question: "What city is home to the world famous Colosseum?", answer: "Rome"},
    {question: "In which city can you ski on the Holmenkollbakken?", answer: "Oslo"},
    {question: "In which city is the headquarters of the European Union?", answer: "Brussels"},
    {question: "Which city is the hub of the airline known as KLM?", answer: "Amsterdam"},
    {question: "In which city can you find the township of Soweto?", answer: "Johannesburg"},
    {question: "In which city can you walk through the Red Square to see the Kremlin?", answer: "Moscow"},
    {question: "Which city is located on the western bank of the Rio de la Plata?", answer: "Buenos Aires"},
    {question: "Which city is portrayed in the film Black Hawk Down?", answer: "Mogadishu"},
    {question: "Which city is home to Etihad Airways?", answer: "Abu Dhabi"},
    {question: "Which city is home to the fictional character known as Borat?", answer: "Astana"},
    {question: "What is the capital city of the most populous country in the world?", answer: "Beijing"},
    {question: "Which capital city is located on the island called Luzon?", answer: "Manila"},
    {question: "Which city is located high above the Taedong River?", answer: "Pyongyang"},
    {question: "Which city was featured in the film Lost in Translation?", answer: "Tokyo"},
    {question: "What is the Capital of Turkey?", answer: "Ankara"},
    {question: "In which capital city can you cross the Thames River?", answer: "London"},
    {question: "Which capital city is closest to Machu Picchu?", answer: "Lima"},
    {question: "Which capital city was home to Fidel Castro?", answer: "Havana"}
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



    this.scoreAnswer = function (answer) {
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


function generateDiscountCode() {
    var length = 5;
    var characters = [];
    for (var i=0; i<length; i++) {
        var character = (Math.floor(Math.random() * 36)).toString(36);
        characters.push(character);
    }
    return characters.join('');
}

function gradeResults(score) {
    var discount = 0;
    var grade = {};
    var code = generateDiscountCode();
    var message = $("<div class='game--score'>");
    switch(score) {
        case 5:
            discount = 0.1;
            $("<p>").text("Congratulations, your knowledge of the World is impressive!").appendTo(message);
            $("<p>").text("You have earned a " + (discount*100).toFixed() +"% Discount.").appendTo(message);
            $("<p>").text("Your Discount code: " + code).appendTo(message);

            break;
        case 4:
            discount = 0.05;
            $("<p>").text("Congratulations!").appendTo(message);
            $("<p>").text("You have earned a " + (discount*100).toFixed() +"% Discount.").appendTo(message);
            $("<p>").text("Your Discount code: " + code).appendTo(message);
            break;
        default:
            $("<p>").text("Thank you for playing!").appendTo(message);
            break;
    }
    grade[code] = discount;
    return {"discountCode": grade, "message": message};
}

function showResults(score) {
    var grade = gradeResults(score);
    var mainElement = $("<div class='row'>");
    var contentElement = $("<div class='col col-xs-12'>");
    mainElement.append(contentElement);
    var heading = $("<h3>").text("Quiz Results").appendTo(contentElement);
    $("<p>").text("You have "+globalScore+"/5 answers correct").appendTo(contentElement);
    grade.message.appendTo(contentElement);
    modalContent.html(mainElement);
}

function getDiscount(discountCode, codes) {
    var currentCodes;

    if (typeof code === "undefined") {
        currentCodes = JSON.parse(localStorage.getItem("discountCodes"));
    } else {
        currentCodes = codes;
    }

    var selectedDiscount;
    try {
        selectedDiscount = currentCodes[discountCode];
    } catch (err) {
        if (err instanceof ReferenceError) {
            selectedDiscount = 0;
        }
    }
    return selectedDiscount;


}

function createDiscountCode(amount) {
    var currentCodes = JSON.parse(localStorage.getItem("discountCodes"));
    do  {
        var discountCode = generateDiscountCode();
        var currentDiscount = getDiscount(discountCode, currentCodes);
    } while (currentDiscount == 0);
    var newCode = {};
    newCode[discountCode] = amount;
    console.log(newCode);
    if (currentCodes === null) {
        currentCodes = {};
    }
    console.log(currentCodes == null);
    Object.assign(currentCodes, newCode);
    localStorage.setItem("discountCodes", JSON.stringify(currentCodes));
    return discountCode;
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
    globalScore = 0;
    var firstForm = questionForms[0];
    //console.log(firstForm);
    for (var questionIndex = 0 ; questionIndex < questionForms.length-1 ; questionIndex++) {
        const currentForm = questionForms[questionIndex];
        const nextForm = questionForms[questionIndex+1];
        console.log(questionIndex);
        currentForm.submitButton.click(function () {
            console.log('click!');
            console.log(globalScore);
            globalScore += currentForm.scoreAnswer();
            nextForm.show();
        })
    }
    firstForm.show();
    questionForms.pop().submitButton.click(function () {
        showResults(globalScore);
    });

}



var startGameButton = $("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.game--modal'>").text(" Discount Game! ");
startGameButton.click(function () {
    //testForm = new Question(countries[0], 1, 5);
    //testForm.show();
    startGame();
});

var gameModal = $("<div class='modal fade game--modal' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>").append($("<div class='modal-dialog modal-lg' role='document'>").append(modalContent));

$("#navigation").append(startGameButton);
$("main.container").append(gameModal);