const tripExpenses = [1000, 200, 100];

let budget = tripExpenses.reduce((accumulator, item) => accumulator + item);

console.log(`Hotel Expense: ${tripExpenses[0]}, Trip Expenses: ${tripExpenses[1]}, Meals Expenses: ${tripExpenses[2]}, Total = ${budget}`);