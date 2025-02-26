// EXERCICE FONCTIONMOYENNE

function checkArray (array) {
    if (array.every(i => typeof i === 'number')) {
        console.log(array.reduce((a, b) => a + b, 0)/ array.length)
    } else {
        console.log("Un des élément n'est pas un nombre !")
    }
    
}

checkArray([3,-4, 8]);
checkArray([3,-4, 8, "didier"]);
