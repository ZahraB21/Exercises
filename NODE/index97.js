for(let i = 50; i >= 0; i--){
    if(i % 10 == 0 && i !== 50 && i !== 0)
        console.log(`** ${i} **`);
    else
        console.log(i);
}