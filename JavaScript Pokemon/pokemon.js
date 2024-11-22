// Pour lancer ce script :
// - Ouvrir la console
// - S'assurer d'être dans le bon répertoire ou se trouve le fichier.js
// - Taper la commande suivante : node pokemon.js

// Voici ma clé API si besoin :
const API_Key = "782c043b-7477-462d-8741-0987b333fa46"



///////////////
// Les pokemons
///////////////

// Voici l'URL du set pokemon choisit :
const set_de_base = "https://api.pokemontcg.io/v2/sets/base1"

fetch(set_de_base)
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        console.log(data) // Afficher les données récupérées dans la console

        const id = data.data.id
        const nb_pokemon = data.data.total

        const fs = require('fs')

        fs.writeFile(`../Sets infos/${id}/${id}.json`, JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Erreur lors de l\'écriture du fichier :', err)
            } else {
                console.log(`Données enregistrées dans ${id}.json`)
            }
        })

        for (let i = 1; i <= nb_pokemon; i++) {
            
            // Voici l'URL pour définir les cartes :
            const url_cartes = `https://api.pokemontcg.io/v2/cards/${id}-${i}`

            // Utilisation de fetch pour récupérer les données de l'API
            fetch(url_cartes)
                .then(response => response.json())  // Convertir la réponse en JSON
                .then(data => {
                    console.log(data) // Afficher les données récupérées dans la console

                    const carte = data.data

                    const name = data.data.name

                    const dossier_path = `../Sets POKEMON/${id}`  // Le chemin du dossier à créer

                    // Créer le dossier si ce n'est pas déjà fait
                    

                    // Vérifier si le dossier existe déjà, sinon le créer
                    if (!fs.existsSync(dossier_path)) {
                        fs.mkdirSync(dossier_path, { recursive: true })
                        console.log(`Dossier créé : ${dossier_path}`)
                    }

                    const fichier_name = `${dossier_path}/${name}.json`

                    const carte_infos = {
                        id: carte.id,
                        nom: carte.name,
                        supertype: carte.supertype, // Exemple : "Pokémon", "Trainer", etc.
                        subtypes: carte.subtypes, // Exemple : ["Basic"]
                        rarete: carte.rarity,
                        images: carte.images.large, // Lien vers l'image large
                    }

                    fs.writeFile(fichier_name, JSON.stringify(carte_infos, null, 2), (err) => {
                    if (err) {
                        console.error('Erreur lors de l\'écriture du fichier :', err)
                    } else {
                        console.log(`Données enregistrées dans ${name}.json`)
                    }
                    })
                })
                .catch(error => console.error('Erreur de récupération:', error))
        }
    })
    .catch(error => console.error('Erreur de récupération:', error))