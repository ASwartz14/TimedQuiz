var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var finishEl = document.getElementById("finish");
var finalScoreEl = document.getElementById("enterScore");
var answerPoss = document.getElementById("As")
var qEl = document.getElementById("Qs")
var secLeft = 60;
var qNumber= -1;
var answer;
var playerName;
const questions = [
{
    ask: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
    answer: "<script>"
},
{
    ask: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
    choices: ["anchor()", "big()", "blink()","bold()"],
    answer: "bold()"
},
{        
    ask: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface","throws","program","short"],
    answer: "program"
},
{
    ask: "Which of the following is correct about JavaScript?",
    choices: ["JavaScript is a lightweight, interpreted programming language.","JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.","The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.","All of the above."],
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
    choices: ["slice()","split()","substr()","search()"],
    answer : "substr()"
},
{
    ask: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
    choices: ["anchor()","big()","blink()","bold()"],
    answer: "bold()"
},
];
document.getElementById("quiz").classList.add("d-none");
document.getElementById("finish").classList.add("d-none");
function startTime(){
    document.getElementById("instructions").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");

    setTimer();
    goQuestions();
}

function setTimer(){
       timeleft = setInterval(function() {
        secLeft--;
        timerEl.textContent = "Time: " + secLeft;

        if(secLeft >= 0){
            clearInterval(secLeft);
        }
    }, 1000);
}
function goQuestions() {
    qNumber++;
    answer = questions[qNumber].answer

    qEl.textContent = questions[qNumber].ask;
    answerPoss.innerHTML = "";

    var choices = questions[qNumber].choices;
    for (var i = 0; i < choices.length; i++) {
        var next = document.createElement("button");
        
        next.textContent = choices[i]
        ansBtn = answerPoss.appendChild(next).setAttribute("class","p-3 m-1 btn btn-light");
    }
}
startBtn.addEventListener("click",startTime);
submitBtn.addEventListener("click",function(event) {
    event.stopPropagation();
    giveScore();

    window.location.href = "highscore.html"
});

function giveScore() {
    playerNameIn = document.getElementById("playerName").value
    var newScore = {
        name: playerNameIn,
        score:secLeft
    };
    var highScores =JSON.parse(localStorage.getItem("highScores")||"[]");

    highScores.push(giveScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideYesNo() {
    var feedback = document.getElementById("YesNo").style.visibility ="hidden";
}

function showYesNo(){
    var feedback = document.getElementById("YesNo").style.visibility ="visible";
}
answerPoss.addEventListener("click",function(event) {
    var feedback = document.getElementById("YesNo")

    if (answer === event.target.textContent) {
        feedback.innerHTML = "Correct!";
        feedback.style.color ="green";
        setTimeout(hideYesNo,1000);
        showYesNo();
    } else {
        feedback.innerHTML = "Incorrect.";
        feedback.style.color = "red";
        setTimeout(hideYesNo,1000);  
        secLeft = secLeft -5;
        showYesNo();
    }
    goQuestions()
});
