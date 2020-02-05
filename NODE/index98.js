let sum = 0;

for(let i = 1; i < 1000; i++){
    if(i > 400)
        break;
    sum += i;
}

console.log(`Sum: ${sum}`);