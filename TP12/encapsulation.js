class Person {
    constructor (name, age, montant) { // variable d'instance
        this.name = name;
        this.age = age;
        this.montant = this.montant;
    }
    getIntroduce() { // methode d'instance
        return `Hi my name is ${this.name} and i'm ${this.age} yo.` 
    }
}

let p1 = new Person("Didier", 72); // appel du constructeur
console.log(p1.getIntroduce());
// RAISON 1 : moins de cotrôle - accès en lecture, en écriture
// RAISON 2 : variables liées
// RAISON 3 : il faut toujours masquer l'organisation d'une classe => en cas de modification de la structure d'une 
// classe, les coûts de dev peuve,t être énormes si tous les attributs sont réstés publics.

class GestionnaiteTaches1 {
    constructor(nom) {
        this.nom=nom;
        this.taches= []; // Admettons il faut changer la structure de la classe après de nombreuses tâches ajoutées ?
    }
}
let g1 = new GestionnaiteTaches1("Mois de Mars")
g1.taches.push({id:1, libelle:"Pensez à faire blabla"});

// Comment je change mon tableau en autre chose sans impacter ? :

class GestionnaiteTaches2 {
    constructor(nom) {
        this.nom = nom;
        this.taches= []; // En cas de changement, seule la methode sera impactée
    }
    ajouter(tache){
        this.taches.push(tache);
    }
}
let g2 = new GestionnaiteTaches2("Mois de Mars")
g2.ajouter({id:1, libelle:"Pensez à faire blabla"});

// Déclarer attribut privé
// Avant 2022 : this._name = name;
// Depuis 2022 : # :

class GestionnaiteTaches3{
    #nom;
    #taches;

    constructor(nom, taches) {
        this.#nom = nom;
        this.#taches= []; 
    }
    ajouter(tache){ // Seule la fonction est accessible en public
        this.#taches.push(tache);
    }
}
let g3 = new GestionnaiteTaches3("Mois de Mars")
g3.ajouter({id:1, libelle:"Pensez à faire blabla"});
