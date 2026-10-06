
interface QuestionAnswer {
  question: string;
  answer: string;
  difficulty?: number
}

let questionAnswerPairs: Array<QuestionAnswer> = [
  {
    question: "let count = 10;",
    answer: "let count:number = 10;",
  },{
    question: "let welcome = `hello, ${user}`;",
    answer: "let welcome: string = `hello, ${user}`;",
  },{
    question: "What is the type of \"10\"",
    answer: "string",
  }
];

let currentQuestion:number;
let score:number = 0;


function initialise() {
  displayNewQuestion();
  const ctaButton:HTMLButtonElement = document.getElementById("submitAnswer") as HTMLButtonElement;
  ctaButton.addEventListener("click", (event:PointerEvent) => {
    event.preventDefault();
    handleSubmit();
  })
}
function handleSubmit() {
  console.log("hello")
  const textAreaElement:HTMLTextAreaElement = document.getElementById("answerField") as HTMLTextAreaElement;
  const answerGiven:string = textAreaElement.value;
  const correctAnswer:string = questionAnswerPairs[currentQuestion].answer;
  
  const strippedAnswerGiven:string = stripString(answerGiven);
  const strippedCorrectAnswer:string = stripString(correctAnswer);
  
  if(strippedAnswerGiven === strippedCorrectAnswer) {
    // display correct
    textAreaElement.style.borderColor = "#0f0";
    score++;
  } else {
    // display wrong
    textAreaElement.style.borderColor = "#f00";
    score--;
  }
  const scoreElement: HTMLParagraphElement = document.getElementById("score") as HTMLParagraphElement;
  scoreElement.innerText = score.toString();
  
  setTimeout(() => {
    displayNewQuestion();
  }, 2000);
}

function displayNewQuestion() {
  const textAreaElement:HTMLTextAreaElement = document.getElementById("answerField") as HTMLTextAreaElement;
  textAreaElement.style.borderColor = "#000";
  
  currentQuestion = Math.floor(Math.random() * questionAnswerPairs.length);
  
  const questionElement:HTMLHeadingElement = document.getElementById("question") as HTMLHeadingElement;
  questionElement.innerText = questionAnswerPairs[currentQuestion].question;
  textAreaElement.value = "";
  
}
function stripString(str: string): string {
  return str.trim().replace(/ /g, "").replace(/\n/g, "").toLowerCase();
}



initialise();