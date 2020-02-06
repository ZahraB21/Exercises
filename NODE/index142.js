let firstPerson = ['Node', 'N'];
let secondPerson = ['Node', 'N'];

let conditionLeft = firstPerson.reduce( (accum, value) => accum.concat(value).concat(' '));
let conditionRight = secondPerson.reduce( (accum, value) => accum.concat(value).concat(' '));

if( conditionLeft === conditionRight )
    console.log(`Same person!!`);
else
    console.log(`Different people`);