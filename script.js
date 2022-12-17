var homepage = document.querySelector(".homepage");
var quizContainer = document.querySelector(".quizContainer");
var highScore = document.querySelector(".highScore");
var quizQuestion = document.querySelector("#quizQuestion");
var choices = document.querySelector("#choices");
var startIndex = 0;
var score = 0;

var questions = [
  {
    question: "Who is the greatest golfer?",
    answer: "Tiger Woods",
    choices: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Ben Hogan"],
  },
  {
    question: "Which of these is the longest club?",
    answer: "Driver",
    choices: ["Driver", "3 iron", "7 iron", "PW"],
  },
  {
    question: "Which of these is the shortest club?",
    answer: "LW",
    choices: ["3 wood", "4 iron", "8 iron", "LW"],
  },
  {
    question: "Which club do i use in the bunker?",
    answer: "SW",
    choices: ["SW", "5 iron", "9 iron", "5 wood"],
  },
];

var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  quizStart();
});

function quizStart() {
  homepage.setAttribute("class", "hidden");
  quizContainer.removeAttribute("class");
  nextQuestion();
}

function nextQuestion() {
  var currentQuestion = questions[startIndex];
  quizQuestion.textContent = currentQuestion.question;
  choices.innerHTML = "";
  for (let index = 0; index < currentQuestion.choices.length; index++) {
    var button = document.createElement("button");
    const element = currentQuestion.choices[index];
    button.textContent = element;
    button.setAttribute("value", element);
    choices.appendChild(button);
    button.addEventListener("click", checkAnswer);
  }
}
function checkAnswer() {
  //   console.log(this.value);
  if (this.value === questions[startIndex].answer) {
    score += 5;
  } else {
    score -= 5;
  }
  console.log(score);
  startIndex++;
  if (startIndex === questions.length) {
    quizEnd();
  } else {
    nextQuestion();
  }
}
function quizEnd() {
  quizContainer.setAttribute("class", "hidden");
  highScore.removeAttribute("class");
}
