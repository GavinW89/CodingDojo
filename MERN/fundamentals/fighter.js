class Fighter{
    constructor(name,playerNum,strength,defense,weight){
        //name, perccent, playerNum, strength(1-10),defense(1-10), weight(1-10)
        this.name = name;
        this.playerNum = playerNum;
        this.strength = strength;
        this.defense = defense;
        this.weight = weight;
        this.percent = 0;
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            opponent.percent += 5;
            console.log(`${this.name} attacked ${opponent.name} and dealt 5%`)
        }
    }

    special(opponent){
        if(opponent instanceof Fighter){
            opponent.percent += 15;
            console.log(`${this.name} preformed a special on ${opponent.name} and dealt 15%`)
        }
    }


}

// const rob = new Fighter("ROB",1,8,7,5);
// const kirby = new Fighter("Kirby",2,5,5,3);
// kirby.attack(rob);
// rob.special(kirby);
// console.log(kirby);
// console.log(rob);

module.exports = Fighter;