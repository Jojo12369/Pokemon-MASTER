fetch("../Sets infos/base1/base1.json")
    .then(response => response.json())  // Convertir la réponse en JSON
    .then(data => {
        const nb_pokemon = data.data.total
        let collection = document.getElementById("collection")
        let cartes_collection = ""

        for (let i = 1; i <= nb_pokemon; i++) {
            let pokemon = `
            <div class="carte_collection">
                <div class="collection" id="${i}">${i}</div>
                <div class="nb_exemplaire">x <span id="c-${i}">0</span></div>
            </div>
            `
            
            cartes_collection += pokemon
        }
        
        collection.innerHTML = cartes_collection
    })