// GET

let usersData = [];
let userIdToDelete = null;
let userIdToUpdate = null;

function initialiserDonnees() {
  fetch('http://localhost:3000/utilisateurs')
    .then(res => res.json())
    .then(data => {
      usersData = data;
      console.log("Données des utilisateurs récupérées :", usersData);
      afficherUtilisateurs(data);
    })
    .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

function afficherUtilisateurs(data) {
  document.getElementById("userInfos").innerHTML = data
    .map(
      (user) =>
        `<tr>
          <td>${user.id}</td>
          <td>${user.nom}</td>
          <td>${user.prenom}</td>
          <td>${user.dateNaissance}</td>
          <td>${user.lieuNaissance}</td>
          <td>${user.numeroRue} ${user.libelleRue}, ${user.codePostal} ${user.ville}</td>
          <td><i class="fa-solid fa-pen" onclick="modification(${user.id})"></i></td>
          <td><i class="fa-solid fa-trash" onclick="suppression(${user.id})"></i></td>
        </tr>`
    )
    .join("");
}

// CREATE
function creerUtilisateur() {
  const form = document.getElementById('userForm');
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch('http://localhost:3000/utilisateurs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(text => { throw new Error(text); });
    }
    return response.json();
  })
  .then(data => {
    closeModale('modaleCreate');
    initialiserDonnees(); 
  })
  .catch(error => {
    console.error('Erreur lors de la création de l\'utilisateur:', error.message);
    closeModale('modaleCreate');
    initialiserDonnees(); 
  });
}

// DELETE
function suppression(userId) {
  userIdToDelete = userId;
  openModale('modaleDelete');
}

function confirmerSuppression() {
  if (userIdToDelete) {
    fetch(`http://localhost:3000/utilisateurs/${userIdToDelete}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        closeModale('modaleDelete');
        initialiserDonnees(); 
      } else {
        console.error('Erreur lors de la suppression de l\'utilisateur');
      }
    })
    .catch(error => console.error('Erreur lors de la suppression de l\'utilisateur:', error));
  }
}

// PUT
function modification(userId) {
  userIdToUpdate = userId;
  console.log("ID de l'utilisateur à modifier :", userIdToUpdate);
  const user = usersData.find(u => u.id === userIdToUpdate);
  console.log("Utilisateur trouvé :", user);
  if (user) {
    const form = document.getElementById('updateUserForm');
    if (form) {
      form.nom.value = user.nom;
      form.prenom.value = user.prenom;
      form.dateNaissance.value = user.dateNaissance;
      form.lieuNaissance.value = user.lieuNaissance;
      form.departementNaissance.value = user.departementNaissance;
      form.numeroRue.value = user.numeroRue;
      form.libelleRue.value = user.libelleRue;
      form.codePostal.value = user.codePostal;
      form.ville.value = user.ville;
    } else {
      console.error('Formulaire de mise à jour non trouvé');
    }
  } else {
    console.error('Utilisateur non trouvé dans usersData');
  }
  openModale('modaleUpdate');
}

function modifierUtilisateur() {
  if (userIdToUpdate) {
    const form = document.getElementById('updateUserForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch(`http://localhost:3000/utilisateurs/${userIdToUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        closeModale('modaleUpdate');
        initialiserDonnees(); 
      } else {
        console.error('Erreur lors de la modification de l\'utilisateur');
      }
    })
    .catch(error => console.error('Erreur lors de la modification de l\'utilisateur:', error));
  }
}