'use strict';

let scores = [];

const scoreInput = document.getElementById('score');
const addButton = document.getElementById('addScore');
const averageSpan = document.getElementById('average');
const highestSpan = document.getElementById('highest');
const scoreList = document.getElementById('scoreList');

addButton.addEventListener('click', () => {
    let score = Number(scoreInput.value);
    if(score<0 || score > 20 || !scoreInput.value){
        alert('Geef geldige score');
        return;
    }

    scores.push(score);

    let sum = 0;
    for(let score of scores){
        sum += score;
    }
    let average = sum / scores.length;
    averageSpan.textContent = average.toFixed(2);

    let highest = 0;
    for(let score of scores){
        if(score > highest){
            highest = score;
        }
    }
    highestSpan.textContent = highest;

    scoreList.innerHTML = '';
    for(let score of scores){
        let li = document.createElement('li');
        li.textContent = score;
        scoreList.appendChild(li);
    }

    scoreInput.value = '';

})