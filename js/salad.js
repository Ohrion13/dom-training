
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];

const ingredientsList = document.getElementById('salad-ingredients');

const salad = document.getElementById('salad-final');
const count = document.getElementById('salad-count');

for (let i = 0; i < ingredients.length; i++) {
    
    const listItm = document.createElement('li');
    ingredientsList.appendChild(listItm);
    
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.textContent = ingredients[i];
    listItm.appendChild(btn);

    btn.addEventListener('click', function () {

        if (count.textContent > 4) return;

        {
            const saladFinal = document.createElement('li');
            saladFinal.textContent = ingredients[i];

            salad.appendChild(saladFinal);

            count.textContent = parseInt(count.textContent) + 1;

        }

    });

}
