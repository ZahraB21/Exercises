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

games.forEach(item => 
    console.log(`Name: ${item.name}, Price: ${item.price}, Sold: ${item.sold}, Console: ${item.console}`));