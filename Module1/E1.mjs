let naam = prompt("Wat is je naam?");
let score = 0;

let vraag1 = prompt("Hoeveel is 1 + 1?");
if(vraag1 === '2'){
    alert('Goed gedaan!');
    score++;
}else{
    alert('Fout! Het juiste antwoord is 2.');
}

let vraag2 = prompt("Hoeveel is 2 + 2?");
if(vraag2 === '4'){
    alert('Goed gedaan!');
    score++;
}else{
    alert('Fout! Het juiste antwoord is 4.');
}

let vraag3 = prompt("Hoeveel is 3 + 3?");
if(vraag3 === '6'){
    alert('Goed gedaan!');
    score++;
}else{
    alert('Fout! Het juiste antwoord is 6.');
}

alert(`${naam}, je score is ${score}!`);