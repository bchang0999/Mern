class Character {
    constructor(name, health, strength, intelligence) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.intelligence = intelligence;
    }

    attack(target) {
        target.health -= this.strength;
        console.log(`//////////////////////////////////`)
        console.log(`${this.name} attacked ${target.name}`)
        console.log(`${target.name} now has ${target.health} HP`); {
            if (target.health < 0) {
                console.log(`${target.name} is Dead...`)
            }
        }
    }
}
//Introducing Inheritance
class MagicUser extends Character {
    constructor(name, health, strength, intelligence, mana) {
        super(name, health, strength, intelligence);
        this.mana = mana;
    }
    attack(target) {
        target.health -= this.intelligence;
        this.mana -= 8;
        console.log(`//////////////////////////////////`)
        console.log(`${this.name} Fire's a spell on ${target.name}`)
        console.log(`${target.name} now has ${target.health} HP`); {
            if (target.health < 0) {
                console.log(`${target.name} is Defeated ^.^`)
            }
        }
    }
}

const char1 = new Character("Lesly", 10, 8, 6);
const char2 = new Character("Brandon", 50, 12, 14);
char1.attack(char2);
char2.attack(char1);

