class ComteBancaire {
    static taux = 0.05;


        constructor(solde) {
            this.solde = solde;
        }
        deposer(montant) {
            this.solde += montant;
        }
        retirer(montant) {
            this.solde -= montant;
        }

        static calcul(solde) {
            solde + ComteBancaire.taux
        }

}

let c = new ComteBancaire();
console.log(c.taux); // On ne peut pas y accéder de cette manière, 
// ce n'est pas un attribut, ça appartient à la classe elle même 

console.log(ComteBancaire.taux) // variable de classe, appelle la méthode de la classe. Comme Math.pow,...


// Si pas besion d'accéder a des variables d'instance : peux être static