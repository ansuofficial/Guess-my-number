'use strict';

// document.querySelector('.message').textContent= 'Correct number'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

// document.querySelector('.number').textContent = 13
// console.log(document.querySelector('.number').textContent)
 
let randomNumber = Math.trunc(Math.random()*20+1)
let score = 20
let highscore=0;

const message = getElement('.message')
const number = getElement('.number')

function getElement (element) {
    const item = document.querySelector(element)
    return item
}

getElement('.check').addEventListener ('click', function () {
    let x = Number((document.querySelector('.guess').value))
   

    if (!x) {
        message.textContent = 'There is no number'
    } 

    else if (x === randomNumber) {
        number.textContent = randomNumber
        message.textContent = 'Congrats you got it right'
        getElement('body').style.backgroundColor = 'green'
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
        getElement('.message').textContent = 'You loose the game!!!'
        getElement('body').style.backgroundColor = 'red'
    }

});


getElement('.again').addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random()*20+1)
    score=20;

    getElement('body').style.backgroundColor ='#222';
    getElement('.message').textContent = 'Start guessing...'
    getElement('.guess').value = 0;
    number.textContent = '?'
    number.style.width = '15rem'
    getElement('.score').textContent = score;
});


// const cameraFeed = document.getElementById('cameraFeed')

// navigator.mediaDevices.getUserMedia({video:true})
// .then(stream => {
//     cameraFeed.srcObject = stream;
// })

const calcRandomNum = () => {
    let calc = (70*50) / 12
    return calc
}
console.log(calcRandomNum())
