// Define an array of questions with options and correct answer
const questions = [
  {
    Q: "What is the capital of France?",
    opt1: "Paris",
    opt2: "Rome",
    opt3: "Madrid",
    opt4: "Berlin",
    ans: "A",
  },
  {
    Q: "What is the highest mountain in the world?",
    opt1: "Kilimanjaro",
    opt2: "Mount Everest",
    opt3: "Mount Fuji",
    opt4: "Mount Kilimanjaro",
    ans: "B",
  },
  {
    Q: "What is the currency of Japan?",
    opt1: "Yuan",
    opt2: "Yen",
    opt3: "Dollar",
    opt4: "Euro",
    ans: "B",
  },
  {
    Q: "What is the largest continent in the world?",
    opt1: "Europe",
    opt2: "South America",
    opt3: "Africa",
    opt4: "Asia",
    ans: "D",
  },
  {
    Q: "What is the smallest country in the world by land area?",
    opt1: "Monaco",
    opt2: "Vatican City",
    opt3: "Liechtenstein",
    opt4: "San Marino",
    ans: "B",
  },
];

// Get the button and all labels on the page
let button = document.getElementById("button");
const label = document.getElementsByTagName("label");
let i = 0;

// Display the first question and its options
const questions_display = () => {
  document.getElementById("Question").innerHTML = questions[i].Q;
  label[0].innerHTML = questions[i].opt1;
  label[1].innerHTML = questions[i].opt2;
  label[2].innerHTML = questions[i].opt3;
  label[3].innerHTML = questions[i].opt4;
};

// Call the function to display the first question
questions_display();

// Get the value of the selected answer if a radio button is checked
function getCheckAnswer() {
  const selectedOption = document.querySelector('input[name="Q1"]:checked');
  if (selectedOption) {
    return selectedOption.value;
  }
}

// Keep track of the number of correct answers
let count = 0;

// Add an event listener to each radio button to enable the submit button when one is clicked
const radioButtons = document.querySelectorAll(".option");
radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    button.disabled = false;
  });
});

// Add an event listener to the submit button to check the selected answer and move to the next question
button.addEventListener("click", function () {
  const selectedAnswer = getCheckAnswer();
  if (selectedAnswer) {
    // Check if the selected answer is correct and increment the count if so
    function checkanswer() {
      if (selectedAnswer === questions[i].ans) {
        console.log("correct answer");
        count++;
      } else {
        console.log("wrong answer");
      }
    }
    checkanswer();
  }
  console.log(selectedAnswer);
  i++;
  // If there are more questions, display the next question
  if (i < questions.length) {
    questions_display();
  } else {
    // If there are no more questions, display the score on the button
    button.style.backgroundColor = "purple";
    button.innerHTML = "Your score is " + count;
  }
});

// Add an event listener to the restart button to reload the page and start over
const restart = document.getElementById("restart");
restart.addEventListener(
  "click",
  (reload = () => {
    location.reload();
  })
);
