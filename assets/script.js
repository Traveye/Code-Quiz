
// Timer Section triggered by beginQuiz function.

const timerEl = document.querySelector(".timer")
totalTime = 60
var timeLeft = 60
const quizDone = false;


function countDown () {
    
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining!";
        

        if(timeLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
            //add call to end game
        }

        

    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Your time is up!"
}

// This section styles HTMl for pre quiz content.

const titleEl = document.querySelector(".title")
const questionEl = document.querySelector(".questions")
const answerEl = document.querySelector(".answerField")
var score = 0;

function beginQuiz () {
    timerEl.textContent = "You will have " + totalTime + " seconds"
    titleEl.textContent = "Welcome to Code-Quiz!"
    questionEl.textContent = "This quiz will present you with a series of quesitons to test your coding knowledge. Once you click start you will have " + totalTime + " seconds to complete all the quesitons. But be careful! Any wrong answers will subtract 10 seconds from your remaining time! Good luck!"
    answerEl.style.display = "none";
   
    let btn = document.createElement("button");
    btn.innerHTML = "Start";
    btn.className = "startBut"
    btn.onclick = function () {
        countDown();
        quizGo();
        btn.style.display = "none"
        
    
    }
    document.querySelector(".questionField").appendChild(btn);

    
}

beginQuiz();

// action 6 once all answers done or when time runs out - the game ends and score total is rendered
// action 7 then you can enter you name / score in local storage and restart the game. 

toAsk = ["Using _______ statement is how you test for a specific condition?", "How do you create a function in JavaScript?", "What JavaScript keyword declares a variable?"]

userOptions = [
    ["Select", "If", "Switch", "For"],

    ["function:myFunction()", "function myFunction()", "function = myFunction()", "function is myFunction()"],

    ["var", "if", "for", "create"]
]

var i = 0
var j = 0

function quizGo() {
    //set display and options for first question
    titleEl.textContent = "Quiz Engaged"
    answerEl.style.display = "flex"
    questionEl.textContent = toAsk[i];
    userOptions[j].forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.setAttribute('data-value', option);
        button.addEventListener("click", checkAnswer)
        answerEl.appendChild(button);
      });
}

function checkAnswer() {
    console.log("hey")
    i++;
    j++;
    quizGo();
    
}







