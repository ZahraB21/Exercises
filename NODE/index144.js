let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
}

console.log(`Username: ${user.username}, Password: ${user.password}`);
console.log(`Username: ${user.username.charAt(0).toUpperCase().concat(user.username.substr(1))}
Password: ${user.password.split('1960').join(' ')}`);
