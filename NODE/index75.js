let firstNumber = 0;
let secondNumber = 1;

let thisNumber = 10;
let i = 0;
let result = firstNumber.toString().concat('\t').concat(secondNumber.toString());
while( i < thisNumber){
    let temp = secondNumber;
    secondNumber = secondNumber + firstNumber;
    firstNumber = temp;
    result = result.concat('\t').concat(secondNumber.toString());
    i++;
}

console.log(`${result}`)

