const google = {
    "nom": "Google",
    "siege_social": "Googleplex, Mountain View, California, United States",
    "fondateurs": [
      {
        "nom": "Larry Page",
        "date_naissance": "1973-03-26",
        "lieu_naissance": "East Lansing, Michigan"
      },
      {
        "nom": "Sergey Brin",
        "date_naissance": "1973-08-21",
        "lieu_naissance": "Moscou, Union Soviétique"
      }
    ],
    "chiffre_affaire" : [
        {
            "année" : "2008",
            "montant" : 16.49
        },
        {
            "année" : "2012",
            "montant" : 37.97
        },
        {
            "année" : "2016",
            "montant" : 89.46
        },
        {
            "année" : "2018",
            "montant" : 136.2
        },
    ]
};

google.fondateurs.forEach(fondateur => {
    console.log(`Nom: ${fondateur.nom}, Date de naissance: ${fondateur.date_naissance}, Lieu de naissance: ${fondateur.lieu_naissance}`);
    },
);

google.chiffre_affaire.forEach(ca => {
    console.log(`Année: ${ca.année}, Montant: ${ca.montant} milliards USD`);
    }
);
