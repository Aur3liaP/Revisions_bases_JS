// EXERCICE FONCTION QUI RETOURNE UNE FONCTION

function func (n) {
    return function(nb) {
        console.log(n * nb);
    }
}

const multiplyBy10 = func(10);
const multiplyBy5 = func(5);

multiplyBy10(2);
multiplyBy5(2); 