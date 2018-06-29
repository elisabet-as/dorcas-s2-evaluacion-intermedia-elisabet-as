'use strict';

//variables para llamar a los elements del html
var containtBox = document.querySelector('#number');

var pushButton = document.querySelector('#button');

var boxFeedback = document.querySelector('.feedback-box');
// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Guardo el resultado de la función en una variable
var randomNumber = getRandomNumber(100);

console.log(randomNumber);

pushButton.addEventListener('click', function seeRandomNumber() {

  //Imprime en la consola el número introducido en el input
  console.log(containtBox.value);

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
});
