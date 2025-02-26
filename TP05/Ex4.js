// EXERCICE FONCTIONCONTROLETABLEAU

function checkArray (array) {
    console.log(array.every(i => typeof i === 'number'))
}

checkArray([3,-4, 8]);
checkArray([3,-4, 8, "didier"]);
checkArray([]);
