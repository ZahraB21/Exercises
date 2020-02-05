let evens = function(upperBound){
    for(let i = 0; i <= upperBound; i++){
        if(i % 2 == 0)
            console.log(i);
    }
}

for(let i = 1; i <= 5; i++){
    console.log(`------ ${i} ------`);
    evens(8);
}