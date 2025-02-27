        function calcul() {
            const number1 = parseFloat(document.getElementById('num1').value);
            const number2 = parseFloat(document.getElementById('num2').value);
            const operator = document.getElementById('op').value;
            let resultat;

            if (operator === '+') {
                resultat = number1 + number2;
            } else if (operator === '-') {
                resultat = number1 - number2;
            } else if (operator === '*') {
                resultat = number1 * number2;
            } else if (operator === '/') {
                resultat = number1 / number2;
            } else {
                resultat = '! Select an operator !';
            }

            document.getElementById("resultat").innerHTML = `= ${resultat}`;
        }