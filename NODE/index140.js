const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

const updatedMutants = mutants.filter(item => {
    if(item !== 'Iceman' && item !== 'Magneto' && item !== 'Logan')
        return item;
});

updatedMutants.forEach(item => console.log(item));