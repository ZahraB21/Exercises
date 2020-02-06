let games = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4'
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX'
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4'
    }
];

let propertyNames = ['name', 'price', 'sold', 'console'];

games.forEach( item => console.log(`Name: ${item[propertyNames[0]]}, Price: ${item[propertyNames[1]]}, Sold: ${item[propertyNames[2]]}, Console: ${item[propertyNames[3]]}`));