import { base1 } from "../Sets infos/base1/base1.js"

let btn_open = document.querySelector(".open")

btn_open.addEventListener("click", () => {
    btn_open.style.display = "none"
    base1()
})