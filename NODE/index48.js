let message = '3.14 it\'s a great number but 42 it\'s the answer to life';
let pi = parseFloat(message.slice(0,3));
let answerToLife = parseInt(message.slice(29,31));

let result = pi + answerToLife;

console.log(`${result.toString()} is the result of adding ${pi} and ${answerToLife}`);