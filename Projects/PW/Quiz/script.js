const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let score = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    if (currentQuestionIndex < 5) {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
    } else {
        showFinalScore()
    }
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
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        score++
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        button.disabled = true  // Disable all buttons after an answer is selected
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1 && currentQuestionIndex < 4) {
        nextButton.classList.remove('hide')
    } else {
        showFinalScore()
    }
}

function showFinalScore() {
    startButton.innerText = `Restart (Score: ${score})`
    startButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
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
        question: 'What is 2 + 2?',
        answers: [
            { text: '22', correct: false },
            { text: '4', correct: true }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Madrid', correct: false },
            { text: 'London', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Jupiter', correct: false },
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Indian Ocean', correct: false },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Mark Twain', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false },
            { text: 'Harper Lee', correct: true },
            { text: 'Ernest Hemingway', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '3', correct: false },
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '0', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for water?',
        answers: [
            { text: 'CO2', correct: false },
            { text: 'O2', correct: false },
            { text: 'H2O', correct: true },
            { text: 'H2', correct: false }
        ]
    },
    {
        question: 'In what year did the Titanic sink?',
        answers: [
            { text: '1920', correct: false },
            { text: '1905', correct: false },
            { text: '1912', correct: true },
            { text: '1898', correct: false }
        ]
    },
    {
        question: 'What is the speed of light?',
        answers: [
            { text: '299,792 km/s', correct: true },
            { text: '150,000 km/s', correct: false },
            { text: '299,792 m/s', correct: false },
            { text: '300,000 km/s', correct: false }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Claude Monet', correct: false },
            { text: 'Pablo Picasso', correct: false }
        ]
    },
    {
        question: 'What is the largest planet in our solar system?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: true },
            { text: 'Neptune', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the square root of 64?',
        answers: [
            { text: '7', correct: false },
            { text: '8', correct: true },
            { text: '6', correct: false },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'Who discovered penicillin?',
        answers: [
            { text: 'Albert Einstein', correct: false },
            { text: 'Marie Curie', correct: false },
            { text: 'Isaac Newton', correct: false },
            { text: 'Alexander Fleming', correct: true }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Diamond', correct: true },
            { text: 'Iron', correct: false },
            { text: 'Platinum', correct: false },
            { text: 'Gold', correct: false }
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Amazon', correct: false },
            { text: 'Yangtze', correct: false },
            { text: 'Mississippi', correct: false },
            { text: 'Nile', correct: true }
        ]
    },
    {
        question: 'Who is the author of "Harry Potter"?',
        answers: [
            { text: 'J.R.R. Tolkien', correct: false },
            { text: 'George R.R. Martin', correct: false },
            { text: 'C.S. Lewis', correct: false },
            { text: 'J.K. Rowling', correct: true }
        ]
    }
]
