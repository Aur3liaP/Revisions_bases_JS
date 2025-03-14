class Person {
    constructor (name, age) { // variable d'instance
        this.name = name;
        this.age = age;
    }
    getIntroduce() { // methode d'instance
        return `Hi my name is ${this.name} and i'm ${this.age} yo.` 
    }
}

let p1 = new Person("Didier", 72); // appel du constructeur
console.log(p1.getIntroduce());