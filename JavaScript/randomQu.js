const startButton = document.querySelector('#start-btn');
const nextButton = document.querySelector('#next-btn');
const quustionContainerElement = document.querySelector('#container__question');
const questionElement = document.querySelector('#question');
const answerButtonsElement = document.querySelector('#button__answer');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// startButton.addEventListener('click', function(e) {
//     console.log('game started');
// } );


// document.querySelector('#start-btn').addEventListener('click', startGame) 

function startGame() {
  console.log('Game started');
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  quustionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

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

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

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
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

const questions = [
    {
        question: "Who started the research that led to Spiral Dynamics?",
        answers: [
            {text: 'Clare W Graves', correct:true},
            {text:'22', correct:false}    
        ]
    },
    {
        question: "Which stage is the most basic?",
        answers: [
            {text: 'Beige', correct:true},
            {text:'Purple', correct:false},
            {text:'Red', correct:false},
            {text:'Blue', correct:false},
            {text:'Orange', correct:false},
            {text:'Green', correct:false},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    },
    {
        question: "Which stage is the first to look at why things happen?",
        answers: [
            {text: 'Beige', correct:false},
            {text:'Purple', correct:true},
            {text:'Red', correct:false},
            {text:'Blue', correct:false},
            {text:'Orange', correct:false},
            {text:'Green', correct:false},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    },
    {
        question: "Which stage is about breaking free?",
        answers: [
            {text: 'Beige', correct:false},
            {text:'Purple', correct:false},
            {text:'Red', correct:true},
            {text:'Blue', correct:false},
            {text:'Orange', correct:false},
            {text:'Green', correct:false},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    },
    {
        question: "Which stage is about restoring order with heavy dogma?",
        answers: [
            {text: 'Beige', correct:false},
            {text:'Purple', correct:false},
            {text:'Red', correct:false},
            {text:'Blue', correct:true},
            {text:'Orange', correct:false},
            {text:'Green', correct:false},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    },
    {
        question: "Which stage is about winning?",
        answers: [
            {text: 'Beige', correct:false},
            {text:'Purple', correct:false},
            {text:'Red', correct:false},
            {text:'Blue', correct:false},
            {text:'Orange', correct:true},
            {text:'Green', correct:false},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    },
    {
        question: "Which stage is about understanding others feelings?",
        answers: [
            {text: 'Beige', correct:false},
            {text:'Purple', correct:false},
            {text:'Red', correct:false},
            {text:'Blue', correct:false},
            {text:'Orange', correct:false},
            {text:'Green', correct:true},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    },
    {
        question: "Which stage is about understanding others feelings?",
        answers: [
            {text: 'Beige', correct:false},
            {text:'Purple', correct:false},
            {text:'Red', correct:false},
            {text:'Blue', correct:false},
            {text:'Orange', correct:false},
            {text:'Green', correct:true},
            {text:'Yellow', correct:false},
            {text:'Turquoise', correct:false}
        ]
    }
]
