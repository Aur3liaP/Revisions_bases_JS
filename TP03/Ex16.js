// EXERCICE INTERACTIFFIBONNACI (FACULTATIF)

let n = 10;

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(n));


// OU pour les + "complexes"

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(fib(n));