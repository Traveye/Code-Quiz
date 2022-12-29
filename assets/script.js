// function beginQuiz () {
//     document.querySelector(".timer") = "You will have 90 Seconds"
//     document.querySelector()

// }



// Timer Section
var timerEl = document.querySelector(".timer")


function countDown () {
    var timeLeft = 91
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining!";
        

        if(timeLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Times AHP"
}

// so this needs to display insturction ins question section title and question class
// then hide the buttons
//then add start buttton which will trigger quiz start when clicked

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

function hideBtn () {
    startBut.style.display = "none"
}


// Quiz Question array

questions = [
    {

    }
]
beginQuiz();

//running the timer - need to move once done

function quizGo () {
    
}

function quizEnd () {

}

function highScore () {

}

