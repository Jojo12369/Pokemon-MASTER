import { booster_animation } from "../../JavaScript/booster.js"

// Veuillez entrez le nom du set choisit :
const nom_du_set = "base1"

export function base1() {
    fetch(`../Sets infos/${nom_du_set}/list-${nom_du_set}.json`)
    .then(response => response.json())
    .then(data => {
        let energies = data.energies
        let common = data.common
        let uncommon = data.uncommon
        let rare = data.rare
        let rareHolo = data.rareHolo

        // Ce code gère les energies
        let liste_energies = []
        for (let e = 0; e < 2; e++) {
            let random_energie = Math.floor(Math.random() * energies.length)
            liste_energies.push(energies[random_energie])
            energies.splice(random_energie, 1)
        }

        // Ce code gère les common
        let liste_common = []
        for (let c = 0; c < 5; c++) {
            let random_common = Math.floor(Math.random() * common.length)
            liste_common.push(common[random_common])
            common.splice(random_common, 1)
        }

        // Ce code gère les uncommon
        let liste_uncommon = []
        for (let u = 0; u < 3; u++) {
            let random_uncommon = Math.floor(Math.random() * uncommon.length)
            liste_uncommon.push(uncommon[random_uncommon])
            uncommon.splice(random_uncommon, 1)
        }

        // Ce code gère les rare
        let liste_rare = []
        for (let e = 0; e < 2; e++) {
            let random_rare = Math.floor(Math.random() * rare.length)
            liste_rare.push(rare[random_rare])
            rare.splice(random_rare, 1)
        }

        let random_rareHolo = Math.floor(Math.random() * rareHolo.length)
        liste_rare.push(rareHolo[random_rareHolo])
        rareHolo.splice(random_rareHolo, 1)

        random_rareHolo = Math.floor(Math.random() * liste_rare.length)
        let rare_carte = liste_rare[random_rareHolo]

        // Générer le code du booster avec l'image récupérée
        let booster_code = `
            <div id="${nom_du_set}">
                <div id="${nom_du_set}_haut"></div>
                <div id="${nom_du_set}_bas"></div>
            </div>
            <img src="${rare_carte}" class="carte" alt="Charizard">
            <img src="${liste_uncommon[2]}" class="carte" alt="Charizard">
            <img src="${liste_uncommon[1]}" class="carte" alt="Charizard">
            <img src="${liste_uncommon[0]}" class="carte" alt="Charizard">
            <img src="${liste_common[4]}" class="carte" alt="Charizard">
            <img src="${liste_common[3]}" class="carte" alt="Charizard">
            <img src="${liste_common[2]}" class="carte" alt="Charizard">
            <img src="${liste_common[1]}" class="carte" alt="Charizard">
            <img src="${liste_common[0]}" class="carte" alt="Charizard">
            <img src="${liste_energies[1]}" class="carte" alt="Charizard">
            <img src="${liste_energies[0]}" class="carte" alt="Charizard">
        `

        // Maintenant tu peux utiliser booster_code comme tu le souhaites, par exemple l'ajouter au DOM
        document.getElementById("open_booster").innerHTML = booster_code

        booster_animation()
    })
}