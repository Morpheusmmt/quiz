const questiion = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice=text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnsewrs = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Quando e onde foi a primeira vez que conversamos?",
        choice1: "26/10/2024, pedras 2"
    }
]