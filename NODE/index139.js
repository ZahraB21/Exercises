const numArray = [];

for(let i = 1; i < 50; i++){
    numArray.push(i);
}

const evenArray = numArray.filter( num => num % 2 == 0);
const oddArray = numArray.filter ( num => num % 2 != 0);

const print = (array, index) => {
    for(let i = 0; i <= index; i++){
        console.log(`Index[${i}]: ${array[i]}`);
    }
}

// console.log(`-------Even Array Outputs:-------\n${print(evenArray, 20)}`);
// console.log(`-------Odd Array Outputs:-------\n${print(oddArray.reverse(), 10)}`);

console.log(`--- Even Array Output ---`);
print(evenArray, 20);

console.log(`--- Odd Array Output ---`);
print(oddArray.reverse(), 10);