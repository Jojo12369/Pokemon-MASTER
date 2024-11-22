// Entrz le nom du set pokemon désirer pour en faire une liste de tri :
const set_pokemon = "base1"

const fs = require('fs')
const path = require('path')

// Répertoire contenant les fichiers Pokémon
const pokemonDir = path.join(__dirname, `../Sets POKEMON/${set_pokemon}`)

// Fichier JSON à générer
const outputFile = path.join(__dirname, `../Sets infos/${set_pokemon}/list-${set_pokemon}.json`)

// Créer les listes pour les cartes triées par rareté
const common = []
const uncommon = []
const rare = []
const rareHolo = []
const energies = []

// Lire le contenu du répertoire
fs.readdir(pokemonDir, (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire :", err)
        return
    }

    // Filtrer uniquement les fichiers JSON
    const pokemonFiles = files.filter(file => file.endsWith('.json'))

    // Lire et classer les fichiers JSON
    pokemonFiles.forEach(file => {
        const filePath = path.join(pokemonDir, file)

        // Lire chaque fichier JSON
        const data = fs.readFileSync(filePath, 'utf8')
        const card = JSON.parse(data) // Parse les données JSON

        // Vérifie la rareté et ajoute la carte dans la bonne liste
        switch (card.rarete) {
            case 'Common':
                common.push(card.images)
                break
            case 'Uncommon':
                uncommon.push(card.images)
                break
            case 'Rare':
                rare.push(card.images)
                break
            case 'Rare Holo':
                rareHolo.push(card.images)
                break
            default:
                energies.push(card.images)
        }
    })

    // Créer un objet pour sauvegarder toutes les listes
    const outputData = {
        common,
        uncommon,
        rare,
        rareHolo,
        energies
    }

    // Sauvegarder les listes dans le fichier JSON
    fs.writeFile(outputFile, JSON.stringify(outputData, null, 2), err => {
        if (err) {
            console.error("Erreur lors de l'écriture du fichier :", err)
        } else {
            console.log(`Listes des cartes Pokémon triées sauvegardées dans ${outputFile}`)
        }
    })
})