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
            timerEl.textContent = "So close but so far!"
            
        }

        if(quizDone === true) {
            clearInterval(timerInterval);
            timerEl.textContent = "Done early I see!"
        }

    }, 1000);
}

// This section styles HTMl for pre quiz content.
const titleEl = document.querySelector(".title")
const questionEl = document.querySelector(".questions")
const answerEl = document.querySelector(".answerField")
const nameEl = document.querySelector(".name")
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

// below arrays store quesitons and corresponding answer options. 

toAsk = ["Using _______ statement is how you test for a specific condition?", "How do you create a function in JavaScript?", "What JavaScript keyword declares a variable?"]

userOptions = [
    ["Select", "If", "Switch", "For"],

    ["function:myFunction()", "function myFunction()", "function = myFunction()", "function is myFunction()"],

    ["var", "set", "for", "create"]
]

var i = 0
var j = 0

//sets stage for questions / answer options to display 
function quizGo() {
    //set display and options for first question
    titleEl.textContent = "Quiz Engaged"
    answerEl.style.display = "flex"
    questionEl.textContent = toAsk[i];
    makeButtons();
   
}

//creates buttons w/ event listener for each option in userOptions array.
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
// evaluates user selection for correctness. moves to endGame when toAsk array has been completed.
function checkAnswer(event) {
    selection = event.target;
    var userAnswer = selection.getAttribute('data-value');
    i++; // i and j moves to next question/answers in their respective array. 
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
        quizGo();
        
    }

    else {
        timeLeft -= 10;
        timerEl.textContent = timeLeft;
        quizGo();

    }
}

function endGame() {
    quizDone = true;
    titleEl.textContent = "Quiz Complete!";
    questionEl.textContent = "Your score is " + score;
    answerEl.innerHTML = "";

    saveName();

}

var userName = "";
var allNames = [];
var allScores = [];


function saveName() {
    // making input section for intials after game w/ submit button and then appending
    nameInput = document.createElement('input');
    nameInput.textContent = "";
    nameInput.style.width = '30px';
    var nameName = nameInput.value;

    nameSubmit = document.createElement('button');
    nameSubmit.type = 'submit';
    nameSubmit.textContent = "Submit";

    nameEl.appendChild(nameInput);
    nameEl.appendChild(nameSubmit);
   
    // Label input
    var inputLabel = document.querySelector('label[for="nameInput"]');
    inputLabel.textContent = "You can store your score! Enter your initials here!";

    nameSubmit.addEventListener('submit', highscore)
    console.log(nameName)
}

function highscore() {
    //reset screen look
    titleEl.textContent = "HighScores"
    questionEl.textContent = "";
    answerEl.innerHTML = "";
    nameEl.innerHTML = "";
    // set local stoarge
    var newName = localStorage.setItem('name', nameInput.value)
    var newScore = localStorage.setItem('score', score)

    allNames.push(newName)
    allScores.push(newScore)

    console.log(nameInput.value)

    console.log(newName)
    console.log(newScore)
    //render local storage arrays 
    // allNames.forEach((name, index) => {
    //     var scoreList = document.createElement('div');
    //     scoreList.textContent = `${name}: ${allScores[index]}`;
    //     questionEl.appendChild(scoreList);
    // });
    // //set button to trigger begin quiz

}

