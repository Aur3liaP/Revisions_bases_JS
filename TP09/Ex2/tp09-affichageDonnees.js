function initialiserDonnees() {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => {
            document.getElementById("paysTableBody").innerHTML = data
                .map(
                    (pays) =>
                        `<tr>
                    <td align="center"><img src="${pays.flag}" alt="${pays.name} flag" width="30"></td>
                    <td>${pays.name}</td>
                    <td>${pays.capital || 'N/A'}</td>
                    <td>${pays.region}</td>
                    <td align="center">${pays.population.toLocaleString()}</td>
                </tr>`
                )
                .join("");
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
}