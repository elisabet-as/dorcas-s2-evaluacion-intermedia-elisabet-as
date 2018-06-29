'use strict';

var randomNumber = document.querySelector('#number');

var pushButton = document.querySelector('#button');

var boxFeedback = document.querySelector('.feedback-box');
// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(getRandomNumber(100));

pushButton.addEventListener('click', function seeRandomNumber() {
  console.log(randomNumber.value);
});
