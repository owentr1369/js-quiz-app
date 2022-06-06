// Quiz Data
const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Markup Leveler",
    correct: "c",
  },
  {
    question: "Which of the following is not a programming language?",
    a: "TypeScript",
    b: "Python",
    c: "Anaconda",
    d: "Rupee",
    correct: "c",
  },
  {
    question: "Python is _____ programming language.",
    a: "high-level",
    b: "mid-level",
    c: "low-level",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "Which of the following includes Chrome's V8 JavaScript Engine?",
    a: "jQuery",
    b: "Java",
    c: "npm",
    d: "Node.js",
    correct: "d",
  },
  {
    question: "Choose the correct HTML tag for the largest heading",
    a: "<heading>",
    b: "<h6>",
    c: "<head>",
    d: "<h1>",
    correct: "d",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    a: "<a url='http://www.w3schools.com'>W3Schools.com</a>",
    b: "<a name='http://www.w3schools.com'>W3Schools.com</a>",
    c: "<a href='http://www.w3schools.com'>W3Schools</a",
    d: "<a>http://www.w3schools.com</a>",
    correct: "c",
  },
  {
    question: "Which of these tags are all <table> tags?",
    a: "<table> <head> <tfoot>",
    b: "<table> <tr> <td>",
    c: "<thead> <body> <tr>",
    d: "<table> <tr> <tt>",
    correct: "b",
  },
];

// Get Elements
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
// Loadquiz: question and answers

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();
//
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Deselect answer
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// submmit functionality for Submit button
submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      console.log(score);
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Show: Results
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`;
    }
  }
});
