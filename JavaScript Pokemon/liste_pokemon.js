const fs = require('fs')
const path = require('path')

fs.readdir("../Sets POKEMON/base1", (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire :", err)
        return
    }

    // Filtrer uniquement les fichiers JSON
    const pokemonFiles = files.filter(file => file.endsWith('.json'))

   

    // Sauvegarder les listes dans le fichier JSON
    fs.writeFile("../Sets infos/base1/base1_pokemon.json", JSON.stringify(pokemonFiles, null, 2), err => {
        if (err) {
            console.error("Erreur lors de l'écriture du fichier :", err)
        }
    })
})