// Permet de gérer l'animation des boosters
export function booster_animation() {

    // Attacher les événements après l'injection
    let booster = document.getElementById("base1")

    booster.addEventListener("click", () => {
        let booster_haut = document.getElementById("base1_haut")
        let booster_bas = document.getElementById("base1_bas")

        booster_haut.classList.add("hidden_haut")
        booster_bas.classList.add("hidden_bas")

        setTimeout(() => {
            booster.remove()
        }, 500)  
    }, { once: true }) // L'événement ne sera exécuté qu'une seule fois

    let cartes = document.querySelectorAll(".carte")

    cartes.forEach(carte => {
        carte.addEventListener("click", () => {
            carte.classList.add("carte_animation")

            setTimeout(() => {
                carte.remove()

                // Comparer le contenu de open_booster après modification
                if (open_booster.innerHTML.trim() == '') {

                    // Mettre le code de ce qui ce passe après l'ouverture du booster
                    /////

                    let btn_open = document.querySelector(".open")
                    btn_open.style.display = "block"

                    /////

                    return 
                }
            }, 500)
        })
    }) 
}