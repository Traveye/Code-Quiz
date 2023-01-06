
// Timer Section triggered by beginQuiz function.

const timerEl = document.querySelector(".timer")
totalTime = 60
var timeLeft = 60
var quizDone = false;
score = 0;


function countDown () {
    
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining!";
        

        if(timeLeft === 0){
            clearInterval(timerInterval);
            //add call to end game
        }

        if(quizDone === true) {
            clearInterval(timerInterval);
            timerEl.textContent = "Done early I see!"
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

    ["var", "set", "for", "create"]
]

var i = 0
var j = 0

function quizGo() {
    //set display and options for first question
    titleEl.textContent = "Quiz Engaged"
    answerEl.style.display = "flex"
    questionEl.textContent = toAsk[i];
    makeButtons();
   
}

function makeButtons() {
    answerEl.innerHTML = "";
    userOptions[j].forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.setAttribute('data-value', option);
        button.addEventListener("click", checkAnswer)
        answerEl.appendChild(button);
});

}

function checkAnswer(event) {
    selection = event.target;
    var userAnswer = selection.getAttribute('data-value');
    console.log(userAnswer)
    i++;
    j++;
    if (i >= toAsk.length) {
        if (userAnswer === "var") {
            score += 33.34; 
            
        }
        endGame()
    }
    else if (userAnswer === "If"|| userAnswer === "function myFunction()") 
    {
        score += 33.33;
        console.log("wrong")
        quizGo();
        
    }

    else {
        timeLeft -= 10;
        timerEl.textContent = timeLeft;
        quizGo();

    }
    
    
}

function endGame() {
    console.log("done")
    quizDone = true;
    titleEl.textContent = "Quiz Complete!"
    questionEl.textContent = "Your score is below."
    answerEl.innerHTML = ""
    answerEl.textContent = score
    
}







