// EXERCICE GESTIONNAIRE DE taskS

// function createTaskManager() {
//     return {
//         tasks: [],

//         addTask(description) {
//             this.tasks.push({
//                 description: description,
//                 finish: false
//             });
//         },

//         finishTask(index) {
//             if (index >= 0 && index < this.tasks.length) {
//                 this.tasks[index].finish = true;
//             } else {
//                 console.log("Index invalide");
//             }
//         },

//         showTask() {
//             this.tasks.forEach((task) => {
//                 const etat = task.finish ? "Terminée" : "Non terminée";
//                 console.log(`${task.description} - ${etat}`);
//             });
//         }
//     };
// }

// const gestionnaire = createTaskManager();

// gestionnaire.addTask("Faire les courses");
// gestionnaire.addTask("Répondre aux emails");

// console.log("Tâches initiales :");
// gestionnaire.showTask();

// gestionnaire.finishTask(1);

// console.log("\nTâches après modification :");
// gestionnaire.showTask();


// CORRECTION

function creerGestionnaire()  {
    let gestionnaire = {
        taches : [],
        ajouterTache : function(desc) {
            let tache = {description : desc, terminee: false}
            this.taches.push(tache);
        },
        terminerTache : function(index) {
            this.taches[index].terminee = true;
        },
        afficherTaches : function() {
            for (let i =0; i<this.taches.length; i++) {
                console.log(this.taches[i].description+" "+(this.taches[i].terminee?"terminée":"non terminée"))
            }
        }
    }
    return gestionnaire;
}

let ges1 = creerGestionnaire();

ges1.ajouterTache("Faire les courses");
ges1.terminerTache(0);
ges1.afficherTaches();
