let getUserID = () => 21;
let isUserValid = function() { 
    if(getUserID() > 30) 
        return true;
    else
        return false;
};


if(isUserValid())
    console.log(`User Valid`);
else
    console.log(`User not valid`);