"use strict";
let questionAnswerPairs = [
    {
        question: "let count = 10;",
        answer: "let count:number = 10;",
    }, {
        question: "let welcome = `hello, ${user}`;",
        answer: "let welcome: string = `hello, ${user}`;",
    }, {
        question: "What is the type of \"10\"",
        answer: "string",
    }
];
let currentQuestion;
let score = 0;
function initialise() {
    displayNewQuestion();
    const ctaButton = document.getElementById("submitAnswer");
    ctaButton.addEventListener("click", (event) => {
        event.preventDefault();
        handleSubmit();
    });
}
function handleSubmit() {
    console.log("hello");
    const textAreaElement = document.getElementById("answerField");
    const answerGiven = textAreaElement.value;
    const correctAnswer = questionAnswerPairs[currentQuestion].answer;
    const strippedAnswerGiven = stripString(answerGiven);
    const strippedCorrectAnswer = stripString(correctAnswer);
    if (strippedAnswerGiven === strippedCorrectAnswer) {
        // display correct
        textAreaElement.style.borderColor = "#0f0";
        score++;
    }
    else {
        // display wrong
        textAreaElement.style.borderColor = "#f00";
        score--;
    }
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = score.toString();
    setTimeout(() => {
        displayNewQuestion();
    }, 2000);
}
function displayNewQuestion() {
    const textAreaElement = document.getElementById("answerField");
    textAreaElement.style.borderColor = "#000";
    currentQuestion = Math.floor(Math.random() * questionAnswerPairs.length);
    const questionElement = document.getElementById("question");
    questionElement.innerText = questionAnswerPairs[currentQuestion].question;
    textAreaElement.value = "";
}
function stripString(str) {
    return str.trim().replace(/ /g, "").replace(/\n/g, "").toLowerCase();
}
initialise();
