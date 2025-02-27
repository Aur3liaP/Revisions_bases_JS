        function form() {
            const nom = document.getElementById('nom').value;
            const prénom = document.getElementById('prénom').value;
            const birthDate = document.getElementById('birthDate').value;

            let resultat;
            if (nom == "" && prénom == "" && birthDate == "") {
                resultat = "Merci de renseigner les champs"
            } else if (nom == "" ) {
                resultat = "Merci de renseigner le nom"
            } else if (prénom == "" ) {
                resultat = "Merci de renseigner le prénom"
            } else if (birthDate == "" ) {
                resultat = "Merci de renseigner la date de naissance"
            } else {
                document.getElementById("resultat").style.backgroundColor = "rgb(123, 235, 129)";
                resultat = "Merci pour l'envoi, bisous ♥"
            }


            document.getElementById("resultat").innerHTML = `= ${resultat}`;
        }