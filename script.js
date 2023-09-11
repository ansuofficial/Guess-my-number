'use strict';

// document.querySelector('.message').textContent= 'Correct number'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

// document.querySelector('.number').textContent = 13
// console.log(document.querySelector('.number').textContent)

let randomNumber = Math.trunc(Math.random()*20+1)
let score = 19
document.querySelector('.check').addEventListener ('click', function () {
    let x = Number((document.querySelector('.guess').value))
   

    if (!x) {
        document.querySelector('.message').textContent = 'There is no number'
    } 

    else if (x === randomNumber) {
        document.querySelector('.number').textContent = randomNumber
        document.querySelector('.message').textContent = 'Congrats you got it right'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'
    }
    
    else if (x > randomNumber) {
        document.querySelector('.message').textContent = 'Too high'
        document.querySelector('.score').textContent = score--;
    } 
    
    else if (x < randomNumber) {
        document.querySelector('.message').textContent = 'Too low'
        document.querySelector('.score').textContent = score--;
    }

    if (score < 0) {
        document.querySelector('.score').textContent = 0
        document.querySelector('.message').textContent = 'You loose the game!!!'
        document.querySelector('body').style.backgroundColor = 'red'
    }

})

// const cameraFeed = document.getElementById('cameraFeed')

// navigator.mediaDevices.getUserMedia({video:true})
// .then(stream => {
//     cameraFeed.srcObject = stream;
// })