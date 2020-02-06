const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
let selectedMutants = '';
mutants.forEach((item) => {
    if(item === 'Iceman' || item === 'Logan' || item === 'Phoenix')
        selectedMutants = selectedMutants.concat(item).concat(', ');
    }
);


console.log(`The selected mutants are: ${selectedMutants}`)