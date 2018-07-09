'use strict';

//variables para llamar a los elements del html
var containtBox = document.querySelector('#number');

var pushButton = document.querySelector('#button');

var boxFeedback = document.querySelector('.feedback-box');

var showCounter = document.querySelector('.counter-box');

var counter = 0;
// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Guardo el resultado de la función en una variable
var randomNumber = getRandomNumber(100);

function seeRandomNumber() {

  var numberBox = parseInt(containtBox.value);
  //Comparación del número del input con el aleatorio y cambio de feedback
  if (numberBox > randomNumber) {
    boxFeedback.innerHTML = 'demasiado alto';
  }
  else if (numberBox < randomNumber) {
    boxFeedback.innerHTML = 'demasiado bajo';
  }
  else if (numberBox === randomNumber) {
    boxFeedback.innerHTML = '¡HAS GANADO, CAMPEONA!';
  }
  else if (containtBox.value !== numberBox) {
    boxFeedback.innerHTML = 'Solo puedes introducir números';
  }
}

//Funcion para el contador
function increaseCounter() {
  counter += 1;
  showCounter.innerHTML = counter;
}

function play() {
  seeRandomNumber();
  increaseCounter();
}
pushButton.addEventListener('click', play);
