let restartBtn = document.getElementById("restart");
let clearBtn = document.getElementById("clearList");

// Get score list and make it an object
highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
playerHSlist = document.getElementById("scoreList");

// sort the scores from highest to lowest
highScores.sort(function(a,b){
    return b.score - a.score
})
// show the scores on the page
for (var p =0; p < highScores.length; p++){
    var newIn = document.createElement("li")
    newLi.textContent = highScores[p].name + " - " + highScores[p]
    scoreList.appendChild(newLi);
}

// onclicks for r clear
clearBtn.addEventListener("click",function(){
    localStorage.clear();
    history.back();
});
