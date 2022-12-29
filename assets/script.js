// Timer Section
var timerEl = document.querySelector(".timer")
var timeLeft = 91

function countDown () {
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

countDown();