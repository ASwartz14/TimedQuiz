// Set my variables and hook with the DOM
let startBtn = document.getElementById("start");
let submitBtn = document.getElementById("submit");
let timerEl = document.getElementById("timer");
let scoreEl = document.getElementById("points");
let finishEl = document.getElementById("finish");
let finalScoreEl = document.getElementById("scoreBox");
let answerPoss = document.getElementById("As")
let qEl = document.getElementById("Qs")
let secLeft = 60;
let qNumber = -1;
let score = 1;
let answer="";
let playerName="";

// My questions object
const questions = [
{
    ask: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
    answer: "<script>"
},
{
    ask: "Which of the following function of Array object extracts a section of an array and returns a new array?",
    choices: ["reverse()", "shift()", "blink()","slice()"],
    answer: "slice()"
},
{        
    ask: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface","throws","program","short"],
    answer: "program"
},
{
    ask: "Which of the following is correct about JavaScript?",
    choices: ["JavaScript is a lightweight, interpreted programming language.","JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.","The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.","All of the above"],
    answer : "All of the above"
},
{
    ask: "Which of the following is the correct syntax to redirect a url using JavaScript?",
    choices: ["document.location='http://www.newlocation.com';"," browser.location='http://www.newlocation.com';"," navigator.location='http://www.newlocation.com';","window.location='http://www.newlocation.com';"],
    answer : "window.location='http://www.newlocation.com';"
},
{
    ask: "Which built-in method removes the last element from an array and returns that element?",
    choices: ["last()","get()","pop()","None of the above."],
    answer:"pop()"
},
{
    ask: "Which built-in method reverses the order of the elements of an array?",
    choices: ["changeOrder(order)","reverse()","sort(order)","None of the above."],
    answer: "reverse()"
},
{
    ask:"Which of the following function of String object combines the text of two strings and returns a new string?",
    choices: ["add()","merge()","concat()","append()"],
    answer :"concat()"
},
{
    ask: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
    choices: ["toPrecision()","toExponential()","toFixed()","toLocaleString()"],
    answer : "toPrecision()"
},
{
    ask: "Which of the following function of Number object defines how many total digits to display of a number?",
    choices: ["anchor()","big()","blink()","bold()"],
    answer: "bold()"
},
];
// Sets the stage for the quiz allowing me to use only one HTML for quiz, instructions, and finish page.
document.getElementById("quiz").classList.add("d-none");
document.getElementById("finish").classList.add("d-none");
function startTime(){
    document.getElementById("instructions").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");

    setTimer();
    goQuestions();
}
// Function to set my timer
function setTimer(){
      let timeleft = setInterval(function() {
        timerEl.textContent = "Time: " + secLeft;
        secLeft--;
        if(secLeft === -1 ||qNumber === questions.length){
            clearInterval(timeleft);
            endGame();
        }
    }, 1000);
// Switches to the finish screen when questions are done or player out of time
    function endGame(){
        if (secLeft === -1 ||qNumber === questions.length) {
            document.getElementById("quiz").classList.add("d-none");
            document.getElementById("finish").classList.remove("d-none");
        }

}
 // Generates and displays questions
}
function goQuestions() {
    qNumber++;
    answer = questions[qNumber].answer;

    qEl.textContent = questions[qNumber].ask;
    answerPoss.innerHTML = "";

    let choices = questions[qNumber].choices;
    for (var i = 0; i < choices.length; i++) {
        var next = document.createElement("button");
        
        next.textContent = choices[i]
        ansBtn = answerPoss.appendChild(next).setAttribute("class","p-3 m-1 btn btn-light");
    }
}
// logs score to highscore html and local storage
startBtn.addEventListener("click",startTime);
submitBtn.addEventListener("click",function(event) {
    event.stopPropagation();
    giveScore();

    window.location.href="highscore.html"
});

function giveScore() {
    name = document.getElementById("nameInput").value
    let newScore = {
        playerName: name,
        score: secLeft + score,
    };
    let highScores =JSON.parse(localStorage.getItem("enterScore")||"[]");

    highScores.push(giveScore)
    localStorage.setItem("scoreList", JSON.stringify(highScores));
    console.log(giveScore());
}
//Shows feedback when questions are answered. And deducts time if wrong. 
function hideYesNo() {
   let feedback = document.getElementById("YesNo").style.visibility ="hidden";
}

function showYesNo(){
    let feedback = document.getElementById("YesNo").style.visibility ="visible";
}
answerPoss.addEventListener("click",function(event) {
    let feedback = document.getElementById("YesNo")
    if (answer === event.target.textContent) {
        feedback.innerHTML = "Correct!";
        feedback.style.color ="green";
      
        setTimeout(hideYesNo,1000);
        showYesNo();
        scoreUp();
    } else {
        feedback.innerHTML = "Incorrect.";
        feedback.style.color = "red";
        setTimeout(hideYesNo,1000);  
        secLeft = secLeft -5;
        showYesNo();
    }
    goQuestions()

});
// Controls the score element of the quiz page
function scoreUp() {
        scoreEl.textContent = "Score: " + score;
        score++;
}


