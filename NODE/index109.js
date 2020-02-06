let validateUser = function(username, password) {
    if(
        (username === 'nacho' && password === 'Nerd1979') || 
        (username === 'pedro' && password === 'Batman0217') || 
        (username === 'marta' && password === 'Mother2312')
    )
        return true;
    else
        return false;
}

let username = 'nacho';
let password = 'Nerd1979';

if(validateUser(username, password))
    console.log(`Welcome ${username}, nice to see you again`);
else
    console.log(`Please input valid credentials`);