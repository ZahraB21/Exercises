let counter = 0;

for(let i = 0 ; i < 100; i++){
    if(i % 2 == 0){
        console.log(i);
        counter++;
        if(counter > 20)
            break;
    }
}