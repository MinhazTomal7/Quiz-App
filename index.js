const quizData = [
    {
        question: "Which is the largest animal in the world?",
        answers: ["Elephant", "Shark", "Blue Whale", "Giraffe"],
        correct: 2
    },
    {
        question: "What is the capital city of France?",
        answers: ["Berlin", "Madrid", "Rome", "Paris"],
        correct: 3
    },

    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Venus", "Mars", "Jupiter"],
        correct: 2
    },
    {
        question: "Which is the longest river in the world?",
        answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1
    },
    {
        question: "Which element does 'O' represent on the periodic table?",
        answers: ["Oxygen", "Osmium", "Oganesson", "Oxide"],
        correct: 0
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Leo Tolstoy"],
        correct: 2
    },
    {
        question: "Which country is home to the kangaroo?",
        answers: ["India", "Australia", "South Africa", "Canada"],
        correct: 1
    },
    {
        question: "What is the smallest continent?",
        answers: ["Asia", "Australia", "Europe", "Africa"],
        correct: 1
    },
    {
        question: "Which ocean is the deepest in the world?",
        answers: ["Atlantic", "Indian", "Pacific", "Southern"],
        correct: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2
    }

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    let currentQuestionData = quizData[currentQuestion];
    document.getElementById("question").textContent = currentQuestion+1 +") " +currentQuestionData.question
    let choices = document.querySelectorAll(".choice");

    choices.forEach((choice, index)=>{
        choice.textContent = currentQuestionData.answers[index]
        choice.style.color = "white"
        choice.style.backgroundColor = "#222"
        choice.disabled = false;
    })

    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(index){
    let currentQuestionData = quizData[currentQuestion];
    let choices = document.querySelectorAll(".choice");
    if(index === currentQuestionData.correct){
        score++;
        choices[index].style.background = "#28a745"
    }
    else {
        choices[index].style.background = "#dc3545"
        choices[currentQuestionData.correct].style.background = "#28a745";
    }

    choices.forEach(choice=>{
        choice.disabled = true;
    })

    document.getElementById("next-btn").style.display = "block"

}

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion<quizData.length){
        loadQuestion();
    }
    else{
        showScore()
    }
}

function showScore(){
    document.getElementById("app").innerHTML = `
    
    <h2 style="text-align: center"> Your Score: ${score} out of ${quizData.length} </h2>
    
    <button  id="restartButton">Restart Quiz</button>
    `
    document.getElementById("restartButton").addEventListener("click", restartQuiz)
}
function restartQuiz(){
    window.location.reload()

}


window.onload = loadQuestion;





















