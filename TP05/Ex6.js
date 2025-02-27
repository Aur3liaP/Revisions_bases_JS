// EXERCICE FONCTIONMAJ

function capitalize (string) {
    const firstLetter = string.charAt(0).toUpperCase();
    console.log(firstLetter + string.slice(1))
    // console.log(string.charAt(0).toUpperCase().substring(1))
}

capitalize("didier");

// Ou avec les Regex ?

function capitalizeRegex(string) {
    console.log(string.replace(/\b[a-z]/g, char => char.toUpperCase()));
}

capitalizeRegex("didier");