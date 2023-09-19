'use strict';

let randomNumber = Math.trunc(Math.random()*20+1)
let score = 20
let highscore=0;

const message = getElement('.message')
const number = getElement('.number')
const _body = getElement('body')
const guess = getElement('.guess')
const again = getElement('.again')

function getElement (element) {
    const item = document.querySelector(element)
    return item
}

getElement('.check').addEventListener ('click', function () {
    let x = Number((guess.value))
   
    if (!x) {
        message.textContent = 'There is no number'
    }

    else if (x === randomNumber) {
        number.textContent = randomNumber
        message.textContent = 'Congrats you got it right'
        _body.style.backgroundColor = 'green'
        number.style.width = '30rem'

        getElement('.highscore').textContent = score > highscore? score: highscore;
        
    }
    
    else if (x > randomNumber) {
        score--;
        message.textContent = 'Too high'
        getElement('.score').textContent = score;
    } 
    
    else if (x < randomNumber) {
        score--;
        message.textContent = 'Too low'
        getElement('.score').textContent = score;
    }

    if (score < 0) {
        getElement('.score').textContent = 0
        message.textContent = 'You loose the game!!!'
        _body.style.backgroundColor = 'red'
    }

});

again.addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random()*20+1)
    score=20;

    _body.style.backgroundColor ='#222';
    getElement('.message').textContent = 'Start guessing...'
    guess.value = 0;
    number.textContent = '?'
    number.style.width = '15rem'
    getElement('.score').textContent = score;
});