
const questions = [
    { question: "Quem é o criador da linguagem python?", answer: "guido van rossum" },
    { question: "Em que ano foi criada a linguagem javascript?", answer: "1995"},
    { question: "Qual é o nome da empresa fundada por bill gates...?", answer: "Microsoft"},
    { question: "Quem é Mário Estima?", answer: "socio de lucas santiago"},
    { question: "Quem é Lucas santiango?", answer: "socio de Mario Estima"},
    { question: "html é uma linguagem de progrmação sim ou não?", answer: "não"},
    { question: "Quem é o criador da rede social Facebook?", answer: "Mark Zuckerberg"},
];

let currentQuestionIndex = 0;

function submitAnswer() {

    let userAnswer = document.getElementById("answer").value.toLowerCase();
    let currentAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    let responseDiv = document.createElement("div");
    let responseText = document.createElement("h1");


    if (userAnswer === currentAnswer) {
        responseText.innerHTML = "Resposta correcta!";
        responseDiv.id = "right_div";
        responseDiv.appendChild(responseText);
        document.body.appendChild(responseDiv);
        currentQuestionIndex++

        if (currentQuestionIndex < questions.length) {
            setTimeout(generateQuestion, 1000)
            
        } else {
            responseText.innerHTML = "Parabéns! voce completou o quiz!"
            document.querySelector("#main")?.remove();
        
        }

    }else{
        responseText.innerHTML = "Resposta Incorreta!";
        responseDiv.id = "wrong_div";
        responseDiv.appendChild(responseText);
        document.body.appendChild(responseDiv);
        document.querySelector("#main")?.remove();
    }

    document.getElementById("answer").value = "";

}

function generateQuestion(){
    let questionContainer = document.querySelector(".question_container .question");
    if (currentQuestionIndex < questions.length) {
        questionContainer.innerHTML = questions[currentQuestionIndex].question;
        document.querySelector("#right_div")?.remove();
        document.querySelector("#wrong_div")?.remove();
    }
}

generateQuestion()