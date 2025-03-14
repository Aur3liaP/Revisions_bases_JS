class Utilisateur {
    constructor(nom, prenom) { // variable d'instance
        this.nom = nom;
        this.prenom = prenom;
    }

    getIntroduce() { // methode d'instance
        return `Hi my name is ${this.nom} ${this.prenom}.`;
    }
}

let p1 = new Utilisateur("Didier", "Mazier"); // appel du constructeur
console.log(p1.getIntroduce());

// Heritage avec Utilisateur :

class Person extends Utilisateur {
    #age;

    constructor(nom, prenom, age) {
        super(nom, prenom); // Appel du constructeur de la classe parente avec les bons arguments
        this.#age = age;
    }

    getIntroduce() {
        super.getIntroduce(); // Appelle methode de la classe mère - optionnel
        console.log(`Hi my name is ${this.nom} ${this.prenom} and I'm ${this.#age}.`);
    }
}

let p2 = new Person("Didier", "Mazier", 72);
p2.getIntroduce();
