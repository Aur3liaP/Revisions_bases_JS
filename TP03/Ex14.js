// EXERCICE ROTATION (FACULTATIF)

let array = [0,1,2,3] ;

for (let i = 0; i < 1; i++) {
    array.unshift(array.pop());
}
console.log(array);