const data = [42, true, function() {return 'The meaning of life is: '}];

if(data[1]){
    console.log(`${data[data.length-1]()}${data[0]}`);
}