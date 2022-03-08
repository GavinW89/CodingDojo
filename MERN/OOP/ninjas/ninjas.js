class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`My name is ${this.name}!`);
    }

    showStats(){
        console.log(`${this.name} stats are, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}.`);
    }

    drinkSake(){
        console.log(`${this.name} drinks a bottle of Sake and gains +10 health!`);
        this.health += 10;
    }
}

const ninja1 = new Ninja("Gavin", 10);
const ninja2 = new Ninja("Mike", 10);
ninja1.sayName();
ninja1.showStats();
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name,200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`${this.name} spoke some wise words.`)
    }
}

const sensei1 = new Sensei("Malcolm");
const sensei2 = new Sensei("Thanos")
sensei1.sayName();
sensei1.showStats();
sensei2.speakWisdom();