let paysData = [];

function initialiserDonnees() {
    fetch('https://digicode.cleverapps.io/json/pays/pollution')
        .then(res => res.json())
        .then(data => {
            paysData = data;
            afficherDonnees(data);
            document.getElementById('minMaxForm').addEventListener('submit', trierValeur);
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

function afficherDonnees(data) {
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
}

function trierValeur(e) {
    e.preventDefault();
    const form = e.target;
    const min = form.min.value ? parseFloat(form.min.value) : 0;
    const max = form.max.value ? parseFloat(form.max.value) : Number.MAX_VALUE;

    if (min > max) {
        alert("Hop hop hop ! Le minimum ne peut pas être supérieur au maximum !");
        return
    } else if (min < 0 || max < 0) {
        alert("Ils polluent tous ! Les valeurs doivent être positives :(");
        return
    } 
    const filtreData = {
        ...paysData,
        pays : paysData.pays.filter(pays => pays.valeur >= min && pays.valeur <= max)
    }
    
    afficherDonnees(filtreData);
}