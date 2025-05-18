'use strict';
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startKleur);

function startKleur(){
    document.body.style.backgroundColor = "red";
}