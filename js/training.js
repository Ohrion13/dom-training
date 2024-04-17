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

let numberClicks = 0;

function changeBackgroundColor(event) {

    numberClicks++

    let button = document.querySelector(".js-button-ex4");

    if (numberClicks === 1) {
        this.classList.toggle("backgroundColor-blue");
    }

    else if (numberClicks === 2) {
        button.classList.remove("backgroundColor-blue")
        this.classList.toggle("backgroundColor-red");
    }

    else if (numberClicks === 3) {
        button.classList.remove("backgroundColor-red")
        this.classList.toggle("backgroundColor-green");
    }

    else {
        numberClicks = 1;
        button.classList.remove("backgroundColor-green");
        button.classList.add("backgroundColor-blue");
    }

}

document.querySelector(".js-button-ex4").addEventListener('click', changeBackgroundColor);


/* ------------------------------------ */
/* --- Exercice 5 --- */

let mouseOver = document.querySelectorAll(".js-button-exo5");

const colors = ['orange', 'red', 'blue', 'green', 'purple'];


for (let index = 0; index < mouseOver.length; index++) {

    changeColorMouseOver = mouseOver[index];

    changeColorMouseOver.addEventListener("mouseover", function (event) {

        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        event.target.style.backgroundColor = randomColor;
    }
    );
}


/* ------------------------------------ */
/* --- Exercice 6 --- */


// function animateText() {

//     const txt = document.getElementById("ex6-paragraph");

//     const textContent = txt.textContent.split('');

//     let index = 0;
//     const interval = setInterval(() => {
//         if (index < textContent.length) {
//             txt.textContent += textContent[index];
//             index++;
//         }

//     }, 50);
// }


// document.getElementById("ex6-paragraph").addEventListener('mouseover', animationText);


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


const addTask = document.getElementById("ex7-button");

function addTaskToList() {

    let taskListElement = document.getElementById("ex7-list");

    if (taskList.length > 0) {

        const task = taskList.shift();

        const taskElement = document.createElement("li");
        taskElement.textContent = task;
        taskElement.classList.add("task-list-task");

        taskListElement.appendChild(taskElement);
    }
}

addTask.addEventListener('click', addTaskToList);


/* ------------------------------------ */
/* --- Exercice 8 --- */

let numberClicksLevel = 0;
let numberClicksStrength = 0;
let numberClicksShield = 0;

function clickingBtnIncreasesCounterPoints(event) {

    const buttonClicked = event.target.id;

    switch (buttonClicked) {
        case "ex8-button-level":
            if (numberClicksLevel < 100) {
                numberClicksLevel += 5;
                document.getElementById("ex8-level").style.width = numberClicksLevel + "%";
            }
            break;

        case "ex8-button-strength":
            if (numberClicksStrength < 100) {
                numberClicksStrength += 5;
                document.getElementById("ex8-strength").style.width = numberClicksStrength + "%";
            }
            break;

        case "ex8-button-shield":
            if (numberClicksShield < 100) {
                numberClicksShield += 5;
                document.getElementById("ex8-shield").style.width = numberClicksShield + "%";
            }
            break;

        default:
            break;
    }
}

document.getElementById("ex8-button-level").addEventListener('click', clickingBtnIncreasesCounterPoints);
document.getElementById("ex8-button-strength").addEventListener('click', clickingBtnIncreasesCounterPoints);
document.getElementById("ex8-button-shield").addEventListener('click', clickingBtnIncreasesCounterPoints);
