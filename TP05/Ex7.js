// EXERCICE FONCTIONPHRASEMAJ

function capitalize (string) {
    console.log(string.replace(/\b[a-z]/g, char => char.toUpperCase()))
}

capitalize("didier fait une maquette");