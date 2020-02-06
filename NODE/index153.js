let arithmetic = {
    add: ( a , b ) => a + b,
    subtract: ( a , b ) => a - b,
    multiply: ( a , b ) => a * b,
    divide: ( a , b ) => a / b,
    remainder: ( a , b ) => a % b
}

console.log(`Adding 2 + 3 = ${arithmetic.add(2,3)}`);
console.log(`Subtract 3 - 2 = ${arithmetic.subtract(3,2)}`);
console.log(`Multiply 2 * 3 = ${arithmetic.multiply(2,3)}`);
console.log(`Divide 6 / 2 = ${arithmetic.divide(6,2)}`);
console.log(`Remainder 6 % 3 = ${arithmetic.remainder(6,3)}`);