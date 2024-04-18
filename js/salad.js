
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];

const ingredientsList = document.getElementById('salad-ingredients');

for (let i = 0; i < ingredients.length; i++) {
    
    const listItm = document.createElement('li');
    
    ingredientsList.appendChild(listItm);
    
    const btn = document.createElement('button');
    
    btn.classList.add('button');
    
    btn.textContent = ingredients[i];
    
    listItm.appendChild(btn);

}
