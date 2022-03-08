class Sundae{
    constructor(flavor,numScoops,sauce,toppings,whipped=true, container="tall sundae glass"){
        //flavor,numScoops,sauce,toppings,whipped(boolean), container
        this.flavor = flavor;
        this.numScoops = numScoops;
        this.sauce = sauce;
        this.toppings = toppings;
        this.whipped = whipped;
        this.container = container;
    }
    eat(){
        this.numScoops -= 1;
        console.log(`wow thats good! I really like ${this.flavor} ice cream!`)
    }
}

const tinRoof = new Sundae("vanilla",2, "chocolate syrup", ["peanuts", "rainbow spranks"],true, "glass bowl");
console.log(tinRoof);
const clevelandBrownie = new Sundae("vanilla",1,"hot fudge", ["pecans", "raindbow spranks", "brownie"], false, "sugar cone");
console.log(clevelandBrownie);
clevelandBrownie.eat();
console.log(clevelandBrownie);