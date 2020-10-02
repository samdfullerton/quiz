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
var numCorrect = 0
var interval 

function startQuiz(){
    startDiv.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class"); 
    //code to start the timer here
    interval = setInterval("updateClock()", 1000);
    renderQuestions();
    
}
function updateClock(){
    document.getElementById("timer").innerHTML = timer;
    timer--;
    if (timer < 0){
        clearInterval(interval);
        gameOver();
    }
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
    console.log(this.value)
    endDiv.removeAttribute("class");
    if (this.value !== questions[questionIndex].answer) {
        timer -= 10;
        if (timer < 0) {
            timer = 0;
        } 
        // update the timer
        console.log("wrong");
        endDiv.innerHTML = "incorrect";
    } else {
        console.log("correct");
        endDiv.innerHTML = "correct"
        numCorrect++;
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        clearInterval(interval);
        gameOver();     
    }else {
        renderQuestions();
    }
    

}
function gameOver(){
    endDiv.innerHTML += "<br>" + numCorrect + "/" + questions.length + " correct";
}
function saveHighScore(){
    

}
startBtn.onclick = startQuiz;

