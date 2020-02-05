let text = 'HELLO';
let result = '';

for(let i = text.length - 1 ; i >= 0 ; i--){
    result = result.concat(text.charAt(i).toLowerCase());
}

console.log(`Result: ${result}`);