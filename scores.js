let restartBtn = document.getElementById("restart");
let clearBtn = document.getElementById("clearList");

// Get score list and make it an object
highScore = JSON.parse(localStorage.getItem("highScore"));



//show the scores on the page
 for (var i =0; i < highScore.length; i++){
 let newIn = document.createElement("li");
 newIn.textContent = highScore[i].name + " - " + highScore[i].score;
   scoreList.appendChild(newIn);
 }
console.log(highScore);
// sort the scores from highest to lowest
highScore.sort(
  function(a,b) {
  return b.score - a.score;
  }
)
// onclicks for r clear
clearBtn.addEventListener("click",function(){
    localStorage.clear();
    history.back();
  });
restartBtn.addEventListener("click",function(){
  history.back();
});
  