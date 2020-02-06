const numberArray = [];

for(let i = 1; i <= 100; i++){
    numberArray.push(i);
}

const newNumberArray = numberArray.map(item => item + 10);

for(let i = 0; i < numberArray.length; i++){
    console.log(`Index: ${i+1}, Original: ${numberArray[i]}, Incremented Value: ${newNumberArray[i]}`);
}
