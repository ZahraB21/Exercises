let player = {
    name : null,
    energy: 100,
    lives: 3,
    loseEnergy: (damage) => {
        this.energy -= damage;
        if(this.energy)
            if(this.lives > 0)
                this.lives--;
            else
                console.log('You lost!!');
        },
    recoverEnergy: (energyUp) => {
        if(this.energy >= 100)
            console.log('Maximum Energy!!');
        else
            this.energy += energyUp
        },
    loseLife: () => {
        if(this.lives > 0)
            this.lives--;
        else
            console.log(`No more lives. You lost !!`);
        },
    recoverLife: () => {
        if(this.lives < 100)
            this.lives++
        else
            console.log('Maximum lives!!');
        }
}

player.name = 'Zahra';
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);

player.recoverEnergy(10);
player.loseEnergy(30);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(`${player.name} has ${player.energy} energy and ${player.lives} lives`);