
// Timer Section triggered by beginQuiz function.

var timerEl = document.querySelector(".timer")


function countDown () {
    var timeLeft = 91
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining!";

        quizGo();
        

        if(timeLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Times AHP"
}

// This section styles HTMl for pre quiz content.

var titleEl = document.querySelector(".title")
var questionEl = document.querySelector(".questions")
var answerEl = document.querySelector(".answerField")

function beginQuiz () {
    timerEl.textContent = "You will have 90 Seconds"
    titleEl.textContent = "Welcome to Code-Quiz!"
    questionEl.textContent = "This quiz will present you wiht a series of quesitons to test your coding knowledge. Once you click start you will have 90 seconds to complete all the quesitons. But be careful! Any wrong answers will subtract 10 seconds from your remaining time! Good luck!"
    answerEl.style.display = "none";
   
    let btn = document.createElement("button");
    btn.innerHTML = "Start";
    btn.className = "startBut"
    btn.onclick = function () {
        countDown();
        btn.style.display = "none"
    
    }
    document.querySelector(".questionField").appendChild(btn);
  
 
}

beginQuiz();
// end pre quiz section


// Quiz Question array

questionsArr = [
    "Using _______ statement is how you test for a specific condition?", "How do you create a function in JavaScript?", "What JavaScript keyword declares a variable?"
]

answersArr = {
   question1: [["Select", false], ["If", true], ["Switch", false] ["For", true]],
   question2: [[" function:myFunction()", false], [" function myFunction()", false], ["function = myFunction()", true], ["function is myFunction()", false]],
   question3: [["var", true], ["if", false], ["for", false], ["create", false]]
}

answerKey = [
    [false, true, false, true],
    [false, false, true, false]
    [true, false, false, false]
]



function quizGo () {
    answerEl.style.display = "flex";
    titleEl.textContent = "Quiz Engaged"
    questionEl.textContent = questionsArr[0];
    document.querySelector("#answer1").textContent = answersArr[0][0];
    document.querySelector("#answer2").textContent = answersArr[0][1];
    document.querySelector("#answer3").textContent = answersArr[0][2];
    document.querySelector("#answer4").textContent = answersArr[0][3];

    // questions and options populated now onClick we need to check if correct

    document.querySelectorAll('.button').forEach(function(button) {
        button.addEventListener('click', function() {
          console.log('Button was clicked');
        });
      });
      

    //sub funciont
        //here we will add eevent listern for answer select
        // if right increase score/ if wrong penalize time
        // increment answer array and quesiton array




function quizEnd () {

}

function highScore () {

}

}