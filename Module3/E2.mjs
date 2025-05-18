const divBestelling = document.getElementById('bestelling');

const maakBestelling = (drank = 'cola', snack = 'chips') => {
    return{
        drank: drank,
        snack: snack,
        tijd: new Date().toLocaleTimeString()
    };
};

const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling('fanta');
const bestelling3 = maakBestelling('sprite', 'nootjes');

divBestelling.innerHTML += `
<div>Bestelling 1: ${bestelling1.drank} en ${bestelling1.snack} op ${bestelling1.tijd}</div> 
<div>Bestelling 2: ${bestelling2.drank} en ${bestelling2.snack} op ${bestelling2.tijd}</div> 
<div>Bestelling 3: ${bestelling3.drank} en ${bestelling3.snack} op ${bestelling3.tijd}</div> 
`;