/*Add your JavaScript here*/

var yesScore = 0;
var noScore = 0;

var questionCount = 0;

// // Store HTML elements using the Dom
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

q1a1.addEventListener("click", yes);
q1a2.addEventListener("click", no);

q2a1.addEventListener("click", no);
q2a2.addEventListener("click", yes);

q3a1.addEventListener("click", no);
q3a2.addEventListener("click", yes);

q4a1.addEventListener("click", yes);
q4a2.addEventListener("click", no);

q5a1.addEventListener("click", yes);
q5a2.addEventListener("click", no);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);


function yes() {
  yesScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "yesScore = " + yesScore);

  if (questionCount == 5) {
    console.log("Quiz is done")
    updateResult();
  }
}

function no() {
  noScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "noScore = " + noScore);

  if (questionCount == 5) {
    console.log("Quiz is done")
    updateResult();

  }
}

function updateResult() {
  if (yesScore >= 3) {
    result.innerHTML = "You get mint chocolate chip ice cream :>";
    console.log("You get mint chocolate chip ice cream :>");
  } else if (noScore >= 3) {
    result.innerHTML = "No mint chocolate chip ice cream :<";
    console.log("No mint chocolate chip ice cream :<");
  }
}

// Restart the quiz
function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  yesScore = 0;
  noScore = 0;
  console.log("questionCount = " + questionCount + "/t" + "yesScore = " + yesScore + "/t" + "noScore = " + noScore);
}


