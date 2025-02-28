let paysData = [];
let sortOrder = 'none';

function initialiserDonnees() {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => {
            paysData = data;
            afficherDonnees(data);
            document.getElementById('populationHeader').addEventListener('click', trierParPopulation);
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

function afficherDonnees(data) {
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
}

function trierParPopulation() {
    if (sortOrder === 'none' || sortOrder === 'desc') {
        paysData.sort((a, b) => a.population - b.population);
        sortOrder = 'asc';
        document.getElementById('populationHeader').innerHTML = 'Population <i class="fas fa-sort-up"></i>';
    } else {
        paysData.sort((a, b) => b.population - a.population);
        sortOrder = 'desc';
        document.getElementById('populationHeader').innerHTML = 'Population <i class="fas fa-sort-down"></i>';
    }
    afficherDonnees(paysData);
}
