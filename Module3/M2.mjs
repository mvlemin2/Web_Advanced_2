const playerNameInput = document.getElementById('playerName').value;
const scoreInput = Number(document.getElementById('score').value);
const scoreBoardDiv = document.getElementById('scoreBoard');

function verwerkScore(playerName = "Onbekend", score = 0){
    if(!playerNameInput || scoreInput === NaN){
        alert("Vul de velden correct in!");
        return;
    };

    return {
        name: playerName,
        score: score,
        datum: new Date().toLocaleString()
    };

}

const voegScoreToe = () => {
    const obj = verwerkScore(playerNameInput, scoreInput);
    scoreBoardDiv.innerHTML += `
    <div>
            <h1>${obj.name}</h1>
            <p>Score: ${obj.score}</p>
            <small>${obj.datum}</small>
    </div>
    `;
}