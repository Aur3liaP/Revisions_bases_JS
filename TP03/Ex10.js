// EXERCICE SOMMEDETABLEAUXDIFF

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18] ;

let sumArray = array1.map((value, i) => value + (array2[i] || 0));

console.log(sumArray);