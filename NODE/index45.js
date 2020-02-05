let playerName = 'Patrik Laine';
let team = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let jets = team.slice(45,50);
jets = jets.slice(1,2).toUpperCase().concat(jets.slice(2));

console.log(`${playerName.toUpperCase()}${message.slice(8,20)} ${jets} player, Go ${jets}!!`);