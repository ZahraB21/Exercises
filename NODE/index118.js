let grades = [1,2,3,4,5,6,7,8,9,10];
let result = ((grades) => {
    let sum = 0;
    for(let i = 0 ; i < grades.length; i++){
        if(i === 0 || i === 2 || i === grades.length - 1)
            sum += grades[i];
    }
    return sum;
})(grades);

console.log(`Sum of grades: ${result}`);
