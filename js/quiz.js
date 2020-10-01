var questions = [{
    question:"What color is the sky?",
    choices:["green","yellow","blue","purple"],
    answer:"blue"
},  {
    question:"What color is dirt?",
    choices:["brown" , "red", "black", "green"],
    answer:"black"
},  {
    question:"How many feet are in a mile?",
    choices:["525000", "60", "5280", "2300"],
    answer:"5280"
}
]

var startDiv = document.getElementById("start");
var questionsDiv = document.getElementById("questions")
var endDiv = document.getElementById("end")
var startBtn = document.getElementById("startBtn")
var choicesDiv = document.getElementById("choices")
var questionIndex = 0
var timer = 60


function startQuiz(){
    startDiv.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class"); 
    //code to start the timer here

    renderQuestions()
    
}
function renderQuestions(){
    var currentQuestion = questions[questionIndex]
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.question;
    choicesDiv.innerHTML ="";
    currentQuestion.choices.forEach(function(choice){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class","choice");
        choiceBtn.setAttribute("value",choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = answerClick;
        choicesDiv.appendChild(choiceBtn);

    })



}
function answerClick(){
    if (this.value !== questions[questionIndex].answer) {
        timer -= 10;
        if (timer < 0) {
            timer = 0
        } 
        // update the timer
        console.log("wrong");
    } else {
        console.log("correct")
    }

}
function gameOver(){

}
function saveHighScore(){

}
startBtn.onclick = startQuiz;

