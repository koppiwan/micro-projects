// Click on Start Quiz [start-btn] button on website to go to quiz page //

const start_btn = document.getElementById("start-btn");

function selectQuizpg () {
    document.querySelector(".start-pg").classList.remove("active")
    document.querySelector(".qna-pg").classList.add("active")
}
start_btn.addEventListener("click" ,selectQuizpg );

// MCQs Questions //

let quizData = [
    {
        question : "What is the capital of France?" ,
        options  : ["Paris", "London", "Berlin", "Rome"],
        true     : "Paris"
    } ,

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        true: "Mars"
    },

    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        true: "William Shakespeare"
    } ,

    {
        question: "Which language is primarily used for web styling?",
        options: ["HTML", "CSS", "Python", "Java"],
        true: "CSS"
    },

    {
        question: "What is the boiling point of water (in °C)?",
        options: ["100", "90", "80", "70"],
        true: "100"
    }

];

//display the quiz questions and options //

let quesEl = document.querySelector(".ques");
let ansEl = document.querySelectorAll(".option .ans");

let currentQuestion = 0;
let score = 0;
function loadQuestions() {

    let data = quizData[currentQuestion] //questions//

    quesEl.textContent = data.question

    ansEl.forEach(function(option,i) {  //options//
        option.textContent = data.options[i];
    });
    document.querySelector("#current-question").textContent = currentQuestion + 1;
    
}
loadQuestions();

// show the answer [red / green] //

function checkAnswer(selectedOption) {

let answerSelected = selectedOption.querySelector(".ans").textContent;
let correctAnswer = quizData[currentQuestion].true;


if (answerSelected === correctAnswer) {
    selectedOption.classList.add("true");
   score++;
    document.querySelector(".score span").textContent = score;
}else {
    selectedOption.classList.add("false");
}
disableOptions();
updateProgressBar();
}

// add a click//

let optionEl = document.querySelectorAll(".option");

optionEl.forEach(function(optionBox){
    optionBox.addEventListener("click", function(){
        checkAnswer(optionBox)
    })
})

// prevent clicking on other option [only one should be cicked] //

function disableOptions(){
    optionEl.forEach(function(option){
        option.classList.add("disabled");
        option.style.pointerEvents = "none";
    });
}


// Update progress //

function updateProgressBar(){
    let progressEl = document.querySelector(".progress")
    let bar = ((currentQuestion+1)/quizData.length)*100;
    progressEl.style.width = bar + "%"
}





