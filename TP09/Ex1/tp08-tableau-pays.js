function initialiserDonnees() {
    fetch('https://digicode.cleverapps.io/json/pays/pollution')
        .then(res => res.json())
        .then(data => {
            document.getElementById("titre").innerHTML = `Pays les plus polluants pour le ${data.polluant} (${data.unite})`;
            document.getElementById("annee").innerHTML = `En ${data.annee}`;
            document.getElementById("corps").innerHTML = data.pays
                .map(
                    (pays) =>
                        `<tr>
                            <td align="center"><img src="https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom} flag"></td>
                            <td>${pays.nom}</td>
                            <td align="center">${pays.valeur}</td>
                            <td align="center">${pays.pourcentage}%</td>
                        </tr>`
                )
                .join("");
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
}
