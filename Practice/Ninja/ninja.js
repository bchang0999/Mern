class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    SayName(){
        console.log(`My name is ${this.name}`);
    }
    ShowStats(){
        console.log(`////////SHOW STATS//////////`)
        console.log(`Ninja name is - ${this.name}`)
        console.log(`Ninja Health is - ${this.health}`)
        console.log(`Ninja speed is - ${this.speed}`)
        console.log(`Ninja strength is - ${this.strength}`)
    }
    DrinkSake(){
        this.health += 10
        console.log(`Ninja Health is - ${this.health}`)
    }
}

const char1 = new Ninja("Brandon", 25);
char1.SayName();
char1.ShowStats();
char1.DrinkSake();
char1.DrinkSake();