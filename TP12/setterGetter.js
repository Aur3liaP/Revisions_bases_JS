class GestionnaiteTaches{
    #nom;
    #taches;

    constructor(nom, taches) {
        this.#nom = nom;
        this.#taches= []; 
    }
    ajouter(tache){ 
        this.#taches.push(tache);
    }

    afficher(){
        console.log(this.#nom)
    }

    // Getter : récupère que le nom
    get nom(){
        return this.#nom;
        }

        // Setter : modifier le nom
    set nom(nvNom){  // Ou setNom(nvNom) 
        this.#nom = nvNom;
    }
}

let g3 = new GestionnaiteTaches("Mois de Mars")
g3.ajouter({id:1, libelle:"Pensez à faire blabla"});

console.log(g3.nom);
g3.nom = "Mois d'avril"; // Ou g3.setNom = ("Mois d'avril") 
g3.afficher();