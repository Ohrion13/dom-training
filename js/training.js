/* ------------------------------------ */
/* --- Exercice 1 --- */

function displayOrNotTextWhenClick(event) {
    document.querySelector(".text").classList.toggle("js-display__txt");
}

document.querySelector(".button").addEventListener('click', displayOrNotTextWhenClick);


/* ------------------------------------ */
/* --- Exercice 2 --- */


function updateScrollValue(event) {

    let scrollValue = 0;

    scrollValue = window.scrollY;

    document.querySelector("#ex2-scroll-value").innerText = scrollValue;

}

window.addEventListener("scroll", updateScrollValue);


/* ------------------------------------ */
/* --- Exercice 3 --- */

function reverseIcons(event) {
    document.querySelector("#ex3-animals").classList.toggle("js-reverseIcons");
}

document.querySelector(".button").addEventListener('click', reverseIcons);


/* ------------------------------------ */
/* --- Exercice 4 --- */

let nombreClics = 0;

function changeBackgroundColor(event) {

    nombreClics++

    let button = document.querySelector(".js-button-ex4");

    if (nombreClics === 1) {
        this.classList.toggle("js-backgroundColor-blue");
    }

    else if (nombreClics === 2) {
        this.classList.toggle("js-backgroundColor-red");
    }

    else if (nombreClics === 3) {
        this.classList.toggle("js-backgroundColor-green");
    }

    else {
        nombreClics = 1;
        button.classList.remove("js-backgroundColor-green");
        button.classList.add("js-backgroundColor-blue");
    }

}

document.querySelector(".js-button-ex4").addEventListener('click', changeBackgroundColor);


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
