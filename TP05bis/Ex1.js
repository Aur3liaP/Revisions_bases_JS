// EXERCICE FONCTIONCALCUL

function result (a, b) {
    if (!a || !b) {
        throw 'vous devez fournir 2 paramètres';
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        throw 'un des paramètre n\'est pas un nombre';
    }
    return a * b + a + b
}

console.log(result(2, 4));
console.log(result("2", "4"));