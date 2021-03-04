// Autor: João Victor Pistório Martins
// Trybe - Turma 10 B

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let response = valueOne && valueTwo;
  console.log(`[Requisito 1] - Resultado da comparação: ${response}`);

  return response;
}

// Desafio 2
function calcArea(base, height) {
  let response = ((base * height) / 2);
  console.log(`[Requisito 2] - Área do Triângulo: ${response}`);

  return response;
}

// Desafio 3
function splitSentence(stringSplit) {
  let arrayStrings = stringSplit.split(' ');
  console.log(`[Requisito 3] - Conteúdo do array:  ${arrayStrings.join('/')}`);

  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  let response = '';
  response = `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
  console.log(`[Requisito 4] - Concatenação: ${response}`);

  return response;
}

// Desafio 5
function footballPoints(wins, ties) {
  let response = 0;
  response += wins * 3;
  response += ties;
  console.log(`[Requisito 5] - Total de pontos: ${response}`);

  return response;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let response; let counter = 0; let larger = 0;

  larger = Math.max(...arrayNumbers);

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (larger === arrayNumbers[i]) { counter += 1; }
  }

  response = counter;
  console.log(`[Requisito 6] - Maior número: ${larger}, Repetições: ${response}`);

  return response;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let larger1 = Math.max(mouse, cat1);
  let larger2 = Math.max(mouse, cat2);

  let distance1 = larger1 === mouse ? mouse - cat1 : cat1 - mouse;
  let distance2 = larger2 === mouse ? mouse - cat2 : cat2 - mouse;

  let response = distance1 < distance2 ? 'cat1' : 'cat2';
  if (distance1 === distance2) { response = 'os gatos trombam e o rato foge'; }
  console.log(`[Requisito 7] - cat1: ${distance1} | cat2: ${distance2} | Resultado: ${response}`);

  return response;
}

// Funções auxiliares do [Requisito 8]
function fill(value) {
  let response;
  switch (value) {
  case 1: response = 'fizz'; break;
  case 2: response = 'buzz'; break;
  case 3: response = 'fizzBuzz'; break;
  default: response = 'bug!'; break;
  }

  return response;
}

function verify(value) {
  let result = 0; let response;
  if (value % 3 === 0) { result = 1; }
  if (value % 5 === 0) { result = 2; }
  if (value % 3 === 0 && value % 5 === 0) { result = 3; }
  response = fill(result);

  return response;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let response = [''];

  arrayNumbers.forEach(function (number, index) {
    response[index] = verify(number);
  });
  console.log(`[Requisito 8] - Array: ${response}`);

  return response;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

let concat = ['João', 'Victor', 'Pistório', 'Martins'];
let numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 9];
let fizz = [9, 25];

compareTrue(false, false);
calcArea(10, 50);
splitSentence('Teste de Split');
concatName(concat);
footballPoints(14, 8);
highestCount(numbers);
catAndMouse(0, 3, 3);
fizzBuzz(fizz);

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
