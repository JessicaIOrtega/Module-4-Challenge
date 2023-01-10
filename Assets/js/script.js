var timer;
var timerCounter;
var viewScores = document.getElementById('highBtn');
var timerDiv = document.getElementById('timer');
var choicesArray = document.getElementById('choices');

var qTitle = document.getElementById('titleQuestion');
var choices = document.getElementById('choices')

var score = 0;

var index = 0;

var questionsHolder = [
    {
        questionTitle: '1. How many times did Ross get divorced?',
        choices: ['1', '4', '3', '2'],
        answer: '3'
    },
    {
        questionTitle: '2. What store does Phoebe hate?',
        choices: ['Pottery Barn', 'Room Store', 'Bath & Body Works', 'Blockbuster'],
        answer: 'Pottery Barn'
    },
    {
        questionTitle: '3. Which character famously said, "PIVOT!"',
        choices: ['Rachel', 'Ross', 'Chandler', 'Monica'],
        answer: 'Ross'
    },
    {
        questionTitle: '4. What form of self-defense does Ross try to teach Rachel and Phoebe?',
        choices: ['Wakumi', 'Unagi', 'Sushi', 'Zanshin'],
        answer: 'Unagi'
    },
    {
        questionTitle: '5. Who introduced Phoebe and Mike?',
        choices: ['Joey', 'Rachel', 'Ross', 'Chandler'],
        answer: 'Joey'
    }
]



var start = document.querySelector('.startBtn')
start.addEventListener('click', beginQuiz)

function beginQuiz() {
    startTimer()
    start.style.display = 'none';
    timerCounter = 60
    renderQuestion()

}

function startTimer() {
    timer = setInterval(function () {
        timerCounter--;
        timerDiv.textContent = timerCounter
        if (timerCounter === 0) {
            clearInterval(timer)
            endGame()
        }
    }, 1000)
}
function loseTime() {
    timerCounter -= 5;
}
function endGame() {
    localStorage.setItem('finalHighscore', score)
    alert('This is the end of your Friends Quiz. Go to Highscores')
    window.location.href = 'highscores.html'
}

function renderQuestion() {
    var currentQuestion = questionsHolder[index]
    console.log(currentQuestion);
    var qTitle = document.getElementById('titleQuestion')
    qTitle.textContent = currentQuestion.questionTitle

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choice')
        choiceBtn.setAttribute('value', choice)

        choiceBtn.textContent = questionsHolder[index].choices[i];

        choiceBtn.onclick = checkAnswer;
        qTitle.appendChild(choiceBtn);

    })


}

function checkAnswer(event) {
    if (event.target.value !== questionsHolder[index].answer) {
        var textAnswer = document.getElementById('textAnswer');
        alert('Oh no! you got it wrong');
        timerCounter = timerCounter - 5;
        index++;
    } else {
        alert('Whoop, you got it right!')
        score += 10;
        index++;
    }

    if (index === questionsHolder.length) {
        endGame();
    } else {
        renderQuestion();
    }

}
