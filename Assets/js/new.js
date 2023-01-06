var timer;
var timerCounter;
var viewScores = document.getElementById('highBtn');
var choicesArray = document.getElementById('choices');
var timerDiv = document.getElementById('timer');
var score = 0;
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
    //timerDiv = setInterval(clockTick, 1000)
    timerCounter = 60
    startTimer()
    //renderQuestion()
    question1()
    //showResults()
    //gameOver

}
function startTimer() {
    timer = setInterval(function () {
        timerCounter--;
        timerDiv.textContent = timerCounter

        if (timerCounter === 0) {
            clearInterval(timer)
            //lostGame()
        }
    }, 1000)
}
function loseTime() {
    timerCounter -= 1;
}




function question1() {
    var qTitle = document.getElementById('titleQuestion')
    qTitle.innerHTML = questionsHolder[0].questionTitle;
    for (var x = 0; x < questionsHolder[0].choices.length; x++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choice')
        choiceBtn.setAttribute('value', questionsHolder[0].choices[x])
        qTitle.appendChild(choiceBtn);
        choiceBtn.innerHTML = questionsHolder[0].choices[x];

        //choiceBtn.onclick = questionPick(choiceBtn.value, questionsHolder[0].answer);
        choiceBtn.addEventListener('click', question2);
        choiceBtn.addEventListener('click', questionPick(choiceBtn.value, questionsHolder[0].answer))
    }

    console.log(choiceBtn.value);
}


function questionPick(c, a) {
    if (c === a) {
        score += 10;
        //add you got it right!
    } else {
        timerCounter--;
    }

}





function question2() {
    var qTitle = document.getElementById('titleQuestion')
    qTitle.innerHTML = questionsHolder[1].questionTitle;
    for (var x = 0; x < questionsHolder[1].choices.length; x++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choice')
        choiceBtn.setAttribute('value', questionsHolder[1].choices[x])
        qTitle.appendChild(choiceBtn);
        choiceBtn.innerHTML = questionsHolder[1].choices[x];
        //choiceBtn.addEventListener('click', questionPick(choiceBtn.value, questionsHolder[0].answer))

        choiceBtn.onclick = questionPick(choiceBtn.value, questionsHolder[1].answer);
        choiceBtn.addEventListener('click', question3);
    }
}

function question3() {
    var qTitle = document.getElementById('titleQuestion')
    qTitle.innerHTML = questionsHolder[2].questionTitle;
    for (var x = 0; x < questionsHolder[2].choices.length; x++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choice')
        choiceBtn.setAttribute('value', questionsHolder[2].choices[x])
        qTitle.appendChild(choiceBtn);
        choiceBtn.innerHTML = questionsHolder[2].choices[x];
        //choiceBtn.addEventListener('click', questionPick(choiceBtn.value, questionsHolder[0].answer))

        choiceBtn.onclick = questionPick(choiceBtn.value, questionsHolder[2].answer);
        choiceBtn.addEventListener('click', question4);
    }
}

function question4() {
    var qTitle = document.getElementById('titleQuestion')
    qTitle.innerHTML = questionsHolder[3].questionTitle;
    for (var x = 0; x < questionsHolder[3].choices.length; x++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choice')
        choiceBtn.setAttribute('value', questionsHolder[3].choices[x])
        qTitle.appendChild(choiceBtn);
        choiceBtn.innerHTML = questionsHolder[3].choices[x];
        //choiceBtn.addEventListener('click', questionPick(choiceBtn.value, questionsHolder[0].answer))

        choiceBtn.onclick = questionPick(choiceBtn.value, questionsHolder[3].answer);
        choiceBtn.addEventListener('click', question5);
    }
}

function question5() {
    var qTitle = document.getElementById('titleQuestion')
    qTitle.innerHTML = questionsHolder[4].questionTitle;
    for (var x = 0; x < questionsHolder[4].choices.length; x++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('class', 'choice')
        choiceBtn.setAttribute('value', questionsHolder[4].choices[x])
        qTitle.appendChild(choiceBtn);
        choiceBtn.innerHTML = questionsHolder[1].choices[x];
        //choiceBtn.addEventListener('click', questionPick(choiceBtn.value, questionsHolder[0].answer))

        choiceBtn.onclick = questionPick(choiceBtn.value, questionsHolder[4].answer);
        // choiceBtn.addEventListener('click', showResults());
    }
}


function questionPick(c, a) {
    if (c === a) {
        score += 10;
        //add you got it right!
    } else {
        timerCounter--;
    }

}





// var start = document.querySelector('.startBtn')
// start.addEventListener('click', beginQuiz)





// function lostGame() {
//     localStorage.setItem('finalHighscore', score)
//     return window.location.href = 'highscores.html'
// }

// function renderQuestion() {
//     var currentQuestion = questionsHolder[0]
//     var qTitle = document.getElementById('titleQuestion')
//     qTitle.textContent = currentQuestion.questionTitle

//     qTitle.innerHTML = ''

//     currentQuestion.choices.forEach(function (choice, i) {
//         var choiceBtn = document.createElement('button')
//         choiceBtn.setAttribute('class', 'choice')
//         choiceBtn.setAttribute('value', choice)

//         // choiceBtn.onclick = questionPick




//         choiceBtn.onclick = respuesta(choiceBtn.value);
//         qTitle.appendChild(choiceBtn)


//     })
// }





// function valapregu() {


//     for (var i = 0; i < questionsHolder.length; i++) {
//         var qTitle = document.getElementById('titleQuestion')

//         qTitle.innerHTML = questionsHolder[i].questionTitle;

//         for (var x = 0; x < questionsHolder[i].choices.length; x++) {
//             var picheboton = document.createElement('button')
//             picheboton.setAttribute('class', 'choice')
//             picheboton.setAttribute('value', questionsHolder[i].choices[x])
//             qTitle.appendChild(picheboton);

//             picheboton.onclick = questionPick(picheboton.value, questionsHolder[i].answer);

//         }

//     }
// }
// function questionPick(c, a) {
//     if (c === a) {
//         score += 10;
//         //add you got it right!
//     } else {
//         loseTime();
//     }

// }
