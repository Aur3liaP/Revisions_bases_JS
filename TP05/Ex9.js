// EXERCICE GESTIONNAIRE DE taskS

function createTaskManager() {
    return {
        tasks: [],

        addTask(description) {
            this.tasks.push({
                description: description,
                finish: false
            });
        },

        finishTask(index) {
            if (index >= 0 && index < this.tasks.length) {
                this.tasks[index].finish = true;
            } else {
                console.log("Index invalide");
            }
        },

        showTask() {
            this.tasks.forEach((task) => {
                const etat = task.finish ? "Terminée" : "Non terminée";
                console.log(`${task.description} - ${etat}`);
            });
        }
    };
}

const gestionnaire = createTaskManager();

gestionnaire.addTask("Faire les courses");
gestionnaire.addTask("Répondre aux emails");

console.log("Tâches initiales :");
gestionnaire.showTask();

gestionnaire.finishTask(1);

console.log("\nTâches après modification :");
gestionnaire.showTask();
