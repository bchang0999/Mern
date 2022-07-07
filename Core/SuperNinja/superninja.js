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
    class Sensei extends Ninja {
        constructor(name, health) {
            super(name, health);
            this.wisdom = 10;
        }
        SpeakWisdom(){
            super.DrinkSake();
            console.log(`Anything worth doing is certinly worth over doing!`)
            console.log(`Ninja Health is - ${this.health}`)

        }

    }
    const char1 = new Sensei("Brandon", 25);
    char1.SayName();
    char1.ShowStats();
    char1.SpeakWisdom();