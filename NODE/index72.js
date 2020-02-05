let counter = 1;

while(counter <= 10){
    let j = 1;
    let stars = '*';
    while(j <= counter){
        if( counter === 1 )
            console.log(`${stars}`);
        stars = stars.concat('*');
        j++;
    }
    console.log(`${stars}`);
    counter++;
}