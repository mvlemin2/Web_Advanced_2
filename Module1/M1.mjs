let specials = document.querySelectorAll('.special');
specials.forEach(element => {
    element.style.color = 'red';
});

let tweedeparagraaf = document.querySelector('p:nth-child(2)');
tweedeparagraaf.style.textDecoration = 'underline';

let output = document.getElementById('output');
output.textContent = `Specials: ${specials.length}`;

let specials2 = document.getElementsByClassName('special');
let output2 = document.getElementById('output2');
output2.textContent = `Specials: ${specials2.length}`;