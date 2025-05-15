'use strict';

const nameInput = document.getElementById('recipeName');
const timeInput = document.getElementById('prepTime');
const ingredientsInput = document.getElementById('ingredients');
const generateButton = document.getElementById('generateCard');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', () =>{
    const name = nameInput.value;
    const time = timeInput.value;
    const ingredients = ingredientsInput.value.split('\n').filter(ingredient => ingredient.trim() !== '');

    if(!name || !time || ingredients.length === 0){
        alert('velden invullen');
        return;
    }

    const recipeCard = `
    <div class = "recipe">
        <h2>${name}</h2>
        <p>Bereidingstijd: ${time} minuten</p>

        <h3>Ingrediënten:</h3>
        <ul>
            ${createIngredientsList(ingredients)}
        </ul>
    </div>
    `;

    function createIngredientsList(ingredients){
        let listItems = '';
        for(let ingredient of ingredients){
            listItems += `<li> ${ingredient}</li>`;
        }
        return listItems;
    }

    resultDiv.innerHTML = recipeCard;
})