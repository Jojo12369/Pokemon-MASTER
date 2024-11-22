// Pour lancer ce script :
// - Ouvrir la console
// - S'assurer d'être dans le bon répertoire ou se trouve le fichier.js
// - Taper la commande suivante : node utilitaire.js

// Voici ma clé API si besoin :
const API_Key = "782c043b-7477-462d-8741-0987b333fa46"



////////////
// La Rareté
////////////

// Voici l'URL pour définir les rareté de carte :
const url_rarities = "https://api.pokemontcg.io/v2/rarities"

// Utilisation de fetch pour récupérer les données de l'API
fetch(url_rarities)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        console.log(data) // Afficher les données récupérées dans la console

        const rarities = data
        const fs = require('fs')
        fs.writeFile('../utilitaire/rarities.json', JSON.stringify(rarities, null, 2), (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture du fichier :', err)
        } else {
            console.log('Données enregistrées dans rarities.json')
        }
        })
    })
    .catch(error => console.error('Erreur de récupération:', error))



///////////////
// Le Supertype
///////////////

// Voici l'URL pour définir le supertype de carte :
const url_supertype = "https://api.pokemontcg.io/v2/supertypes"

// Utilisation de fetch pour récupérer les données de l'API
fetch(url_supertype)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        console.log(data) // Afficher les données récupérées dans la console

        const supertype = data
        const fs = require('fs')
        fs.writeFile('../utilitaire/supertype.json', JSON.stringify(supertype, null, 2), (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture du fichier :', err)
        } else {
            console.log('Données enregistrées dans supertype.json')
        }
        })
    })
    .catch(error => console.error('Erreur de récupération:', error))