// criador: Mário Estima
// date: 14/11/2024
// copyright.


const questions = [
    {
        question: "Quem é o criador da linguagem python?",
        answer_r: "guido van rossum",
        wrong_answers: ["william shakespiere", "joseph august", "john doe"]
    },
    {
        question: "Em que ano foi criada a linguagem javascript?",
        answer_r: "1995",
        wrong_answers: ["2005", "1900", "2024"]
    },
    {
        question: "Qual é o nome da empresa fundada por bill gates?",
        answer_r: "Microsoft",
        wrong_answers: ["Apple", "Meta", "Amazon"]
    },
    {
        question: "Quem é o fundador da Apple Inc?",
        answer_r: "Steve Jobs",
        wrong_answers: ["bill gates", "mark zuckerberg", "mr robot"]
    },
    {
        question: "O que é git?",
        answer_r: "sistema de versionamento de código",
        wrong_answers: ["Uma rede social", "um sistema de gerenciamento de banco de dados", "um jogador de futebol"]
    },
    {
        question: "HTML é uma linguagem de programação, sim ou não?",
        answer_r: "não",
        wrong_answers: ["é uma exceção", "sim", "talvez"]
    },
    {
        question: "Quem é o criador da rede social Facebook?",
        answer_r: "Mark Zuckerberg",
        wrong_answers: ["peter parker", "joseph august", "bill gates"]
    },
    {
        question: "Quem é o melhor programador de todos os tempos?",
        answer_r: "Mario Estima",
        wrong_answers: ["Lucas Santiago", "Ersilio el Fraco", "joão Peniel"]
    },
];

let currentQuestionIndex = 0;

let questionContainer = document.getElementById('question-container');
let questionCard = document.getElementById('question-card-right');

let responseDiv = document.createElement('div');
let responseText = document.createElement('h1');

responseDiv.id = 'response-div';
loadQuestion();

function loadQuestion() {
    
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.innerHTML = `<h1>${currentQuestion.question}</h1>`;
        questionCard.textContent = currentQuestion.answer_r;

        setWrongOptions(currentQuestion.wrong_answers);
    } else {
        WinGame();
    }
}

function randomQuestionPosition(question_position) {
    const first_position = document.querySelector(".question-card-right");
}

function setWrongOptions(wrongAnswers) {
    const oneWrong = document.getElementById('one')
    const twoWrong = document.getElementById('two');
    const threeWrong = document.getElementById('three');

    const wrongOptions = [wrongAnswers[0], wrongAnswers[1], wrongAnswers[2]];
    
    const wrongElements = [oneWrong, twoWrong, threeWrong];

    wrongElements.forEach((element, index) => {
        element.textContent = wrongOptions[index];
        element.style.backgroundColor = '';
        element.onclick = () => wrongAnswerClicked(element);
    });
}


function RigthAnswerClicked() {
    questionCard.addEventListener('click', () => {
        if (questionCard.textContent === questions[currentQuestionIndex].answer_r) {
            questionCard.style.backgroundColor = '';
            currentQuestionIndex++;
            loadQuestion();

        }
        
    });
}

function wrongAnswerClicked(element) {
    element.style.backgroundColor = '#e62222';
    setTimeout(generateYouLoseScreen, 1000);
}

function generateYouLoseScreen() {
    responseDiv.innerHTML = `<button class='play-again'>Jogar Novamente</button>`;
    responseText.innerHTML = "<h1 class='danger'>Você perdeu.🤮</h1>";
    responseDiv.appendChild(responseText);
    document.body.appendChild(responseDiv);
    document.querySelector("#main")?.remove();

    document.querySelector('.play-again').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

function WinGame() { 
    responseDiv.innerHTML = `<button class='play-again'>Jogar Novamente</button>`;
    responseText.textContent = "Parabéns! Você completou o quiz. Seus conhecimentos são de outro nível.🥳";
    responseDiv.appendChild(responseText);
    document.body.appendChild(responseDiv);
    document.querySelector("#main")?.remove();

    document.querySelector('.play-again').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}


RigthAnswerClicked();
