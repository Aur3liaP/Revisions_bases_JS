// EXERCICE FONCTIONMOYENNE

function checkArray (array) {
    if (!Array.isArray(array)) {
        throw "Ce n'est pas un tableau :("
    } else if (!array.every(i => typeof i === 'number')) {
        throw "Un des élément n'est pas un nombre !"
    } else {
        return array.reduce((a, b) => a + b, 0)/ array.length;
    }
}

try {
    console.log(checkArray([3,-4, 8]));
} catch (error) {
    console.error(error)
}

try {
    console.log(checkArray([3,-4, 8, "didier"]));
} catch (error) {
    console.error(error)
}

try {
    console.log(checkArray("Didier fait une maquette"));
} catch (error) {
    console.error(error)
}