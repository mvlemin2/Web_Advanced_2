'use strict';
const counter = document.querySelector('.counter');
const clickButton = document.getElementById('clickButton');
const message = document.querySelector('.message');

let counterClick = 0;

clickButton.addEventListener('click', () => {
    counterClick++;
    counter.textContent = counterClick;
}
)

// function felicitatie(){
//     return new Promise(resolve => {
//         const handleClick
//     })
// }