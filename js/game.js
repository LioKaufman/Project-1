/**
 * Created by niki on 14.03.17.
 */

/**
 * The content of the Modal
 * @type {*}
 */
var modalContent = $("<div class='modal-content'>");

/**
 * The array of questions for the game.
 * @type {[*]}
 */



/**
 * Generate a new form for the Quiz
 * @param country
 * @param number
 * @param count
 * @constructor
 */
function Question(country, number, count) {
    this.country = country;

    this.mainElement = $("<div class='row'>");
    this.contentElement = $("<div class='col col-xs-12'>");
    this.mainElement.append(this.contentElement);

    this.modalHeader = $("<div class='modal-header'>");
    this.modalHeader.append($("<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"));
    this.modalBody = $("<div class='modal-body'>");
    this.modalFooter = $("<div class='modal-footer'>");

    this.contentElement.append(this.modalHeader).append(this.modalBody).append(this.modalFooter);

    this.heading = $("<h4>").text("Quiz").appendTo(this.modalHeader);
    this.counter = $("<p>").text("Question "+number+" of "+count).appendTo(this.modalBody);
    
    this.inputForm = $("<form>").appendTo(this.modalBody);
    this.formGroup = $("<div class='form-group'>");
    this.question = $("<label for='game--answer'>").text(country.question)
        .appendTo(this.formGroup);
    this.inputField = $("<input type='text' class='form-control' id='game--answer'>").appendTo(this.formGroup);
    this.submitButton = $("<button type='button' class='btn btn-primary'>").text("Submit").appendTo(this.modalFooter);
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

/**
 * Generate a 5 digit discount code
 * @returns {string}
 */
function generateDiscountCode() {
    var length = 5;
    var characters = [];
    for (var i=0; i<length; i++) {
        var character = (Math.floor(Math.random() * 36)).toString(36);
        characters.push(character);
    }
    return characters.join('');
}

/**
 * Generate grading data from a given score
 * @param score
 * @returns {{discountCode: {}, message: (*|jQuery|HTMLElement)}}
 */
function gradeResults(score) {
    var discount = 0;
    var grade = {};
    var message = $("<div class='game--score'>");
    var code = createDiscountCode(discount);
    switch(score) {
        case 5:
            discount = 0.1;
            $("<p>").text("Congratulations, your knowledge of the World is impressive!").appendTo(message);
            $("<p>").text("You have earned a " + (discount*100).toFixed() +"% Discount.").appendTo(message);
            $("<p class='strong'>").text("Your Discount code: " + code).appendTo(message);
            break;
        case 4:
            discount = 0.05;
            $("<p>").text("Congratulations!").appendTo(message);
            $("<p>").text("You have earned a " + (discount*100).toFixed() +"% Discount.").appendTo(message);
            $("<p class='strong'>").text("Your Discount code: " + code).appendTo(message);
            break;
        default:
            $("<p>").text("Thank you for playing!").appendTo(message);
            break;
    }
    grade[code] = discount;
    return {"discountCode": grade, "message": message};
}

/**
 * Generate the score display with a short sentence, the number of correct answers and a discount code.
 * @param score
 */
function showResults(score) {
    var grade = gradeResults(score);
    var mainElement = $("<div class='row'>");
    var contentElement = $("<div class='col col-xs-12'>");


     var modalHeader = $("<div class='modal-header'>");
     modalHeader.append($("<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"));
     var modalBody = $("<div class='modal-body'>");
     var modalFooter = $("<div class='modal-footer'>");
    contentElement.append(modalHeader).append(modalBody).append(modalFooter);


    mainElement.append(contentElement);

    var heading = $("<h4>").text("Quiz Results").appendTo(modalHeader);
    $("<p>").text("You have "+globalScore+"/5 answers correct").appendTo(modalBody);
    grade.message.appendTo(modalBody);
    modalContent.html(mainElement);
}

/**
 * Get the discount amount from local storage.
 * @param discountCode
 * @param codes
 * @returns {*}
 */
function getDiscount(discountCode, codes) {
    var currentCodes;

    if (typeof code === "undefined") {
        currentCodes = JSON.parse(localStorage.getItem("discountCodes"));
    } else {
        currentCodes = codes;
    }

    var selectedDiscount = 0;
    try {
        selectedDiscount = currentCodes[discountCode];
    } catch (err) {
        if (err instanceof ReferenceError) {
            selectedDiscount = 0;
        }
    }
    return selectedDiscount;

}
/**
 * Remove all discount codes from local storage.
 */
function resetDiscounts() {
    localStorage.setItem("discountCodes", JSON.stringify({}));
}

/**
 * Create and store a discount code with the given amount.
 * @param amount
 * @returns {string}
 */
function createDiscountCode(amount) {
    var currentCodes = JSON.parse(localStorage.getItem("discountCodes"));
    //do  {
        var discountCode = generateDiscountCode();
        var currentDiscount = getDiscount(discountCode, currentCodes);
       // console.log('*');
    //} while ( currentCodes !== null && !(currentDiscount in currentCodes));
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

/**
 * Pick an amount of random questions from countries.
 * @param questionCount
 * @returns {Array}
 */
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

/**
 * Main entrance point of the game, should be triggered by the start game button.
 */
function startGame() {
    var questions = pickRandomQuestions(5);
    var questionForms = questions.map(function (question, index) {
        return new Question(question, index + 1, questions.length);

    });
    globalScore = 0;
    var firstForm = questionForms[0];
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
    currentForm = questionForms.pop();
    currentForm.submitButton.click(function () {
        globalScore += currentForm.scoreAnswer();
        showResults(globalScore);
    });

}


/**
 * The button to start the game.
 * @type {*}
 */

function GameButton() {
    var startGameButton = $("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.game--modal'>").text(" Game ");
    startGameButton.click(function () {
        //testForm = new Question(countries[0], 1, 5);
        //testForm.show();
        startGame();
    });
    return startGameButton;
}


/**
 * The modal where the game is displayed in.
 * @type {*}
 */
var gameModal = $("<div class='modal fade game--modal' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>").append($("<div class='modal-dialog modal-lg' role='document'>").append(modalContent));


/**
 * Appending the game button and the game Modal to the index.html page.
 */
$("#gameNav").append(GameButton());

$("#indexGame").append(GameButton());
$("#game").append(GameButton());

$(".container").append(gameModal);

