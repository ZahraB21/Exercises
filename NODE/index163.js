let add = function() {
    let result = 0;
    for(let i = 0 ; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(add(1,2,3));

