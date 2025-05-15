const grid = document.getElementById('grid');
const redCount = document.getElementById('redCount');
const blueCount = document.getElementById('blueCount');
const greenCount = document.getElementById('greenCount');

for(let i = 0; i<25; i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
}

function tellen(){
    const cellen = document.getElementsByClassName('cell');
    let red = 0;
    let blue = 0;
    let green = 0;

    Array.from(cellen).forEach(cell => {
        if(cell.style.backgroundColor === 'red') red++;
        if(cell.style.backgroundColor === 'blue') blue++;
        if(cell.style.backgroundColor === 'green') green++;
    })

    redCount.textContent = red;
    blueCount.textContent = blue;
    greenCount.textContent = green;
}


grid.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = 'red';
        tellen();
    }
})

grid.addEventListener('click', function(e){
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = 'blue';
        tellen();
    }
})

grid.addEventListener('dblclick', function(e){
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = 'green';
        tellen();
    }
})