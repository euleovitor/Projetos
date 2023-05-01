let div_filho_1 = document.getElementById("div-filho-1")
let div_filho_2 = document.getElementById("div-filho-2")
let div_filho_3 = document.getElementById("div-filho-3")

div_filho_1.addEventListener("mouseover", () => {
    if (div_filho_1.classList.contains("diminuir")) {
        div_filho_1.classList.add("aumentar")
        div_filho_1.classList.remove("diminuir")
    } else {
        div_filho_1.classList.add("aumentar")
    }
})

div_filho_1.addEventListener("mouseout", () => {
    if (div_filho_1.classList.contains("aumentar")) {
        div_filho_1.classList.remove("aumentar")
        div_filho_1.classList.add("diminuir")
    }
})


div_filho_2.addEventListener("mouseover", () => {
    if (div_filho_2.classList.contains("diminuir")) {
        div_filho_2.classList.add("aumentar")
        div_filho_2.classList.remove("diminuir")
    } else {
        div_filho_2.classList.add("aumentar")
    }
})

div_filho_2.addEventListener("mouseout", () => {
    if (div_filho_2.classList.contains("aumentar")) {
        div_filho_2.classList.remove("aumentar")
        div_filho_2.classList.add("diminuir")
    }
})


div_filho_3.addEventListener("mouseover", () => {
    if (div_filho_3.classList.contains("diminuir")) {
        div_filho_3.classList.add("aumentar")
        div_filho_3.classList.remove("diminuir")
    } else {
        div_filho_3.classList.add("aumentar")
    }
})

div_filho_3.addEventListener("mouseout", () => {
    if (div_filho_3.classList.contains("aumentar")) {

        div_filho_3.classList.remove("aumentar")
        div_filho_3.classList.add("diminuir")
    }
})