'use strict';

function bereken(){
    const resultaat = parseInt(document.getElementById('nr1').value) + parseInt(document.getElementById('nr2').value);
    document.getElementById('res').innerText = resultaat;
}