
window.onload = startGame;

const startButton = document.getElementById('start-btn')
const restartButton = document.querySelector(".restartBtn");
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const introText = document.querySelector(".ready")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// start function
function startGame() {
  restartButton.style.cssText = "display: none;";
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  introText.classList.add('hide')
  
  // to run the next question
  setNextQuestion()
}

// run the next question function
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// show and replace questions in the html tages
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

// to reset for the next question
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


// select answers and these values to check if its correct or wronge and do what comes after
// used some event target and array to pick questions and find the value of it
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    restartButton.style.display = "flex";
    startButton.innerText = 'Restart'
    startButton.classList.add("restartEnd")
    startButton.classList.remove('hide')
    
    if(correct){
      document.getElementById("msg").innerHTML = "Yeay You win!"; 
    }else{
      document.getElementById("msg").innerHTML = "You losed! Next Time";
    }
  }
}

// added some more visuals effect to the background if its correct than the background turn to green if not it turn to red color
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    element.style.cssText = "background: lightgreen;";
  } else {
    element.classList.add('wrong')
    element.style.cssText = "background: red";

  }
}

// basicaly this function reset the background after it show the red or green color 
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
  element.style.cssText = "background: none;";
}
// all the questions that generate randomly in the html tages.
// questions
const questions = [
  {
    question: 'Vad är den bästa css positionering?',
    answers: [
      { text: 'absolute', correct: true },
      { text: 'relative', correct: false }
    ]
  },
  {
    question: 'Gillar du köra bild?',
    answers: [
      { text: 'Aa', correct: true },
      { text: 'Yes', correct: true },
      { text: 'Sometimes', correct: true },
      { text: 'Maybe', correct: true }
    ]
  },
  {
    question: 'e du vuxen?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]


