'use strict';
const outputDiv = document.getElementById('output');

class Voertuig{
    constructor(merk, model, jaar, verhuurprijs){
    this.merk = merk;
    this.model = model;
    this.jaar = jaar;
    this.verhuurprijs = verhuurprijs;
    this.beschikbaar = true;
    }

    verhuur(){
        if(!this.beschikbaar){
            return `Deze ${this.merk} ${this.model} is al verhuurd.`;
        }
        this.beschikbaar = false;
        return `${this.merk} ${this.model} (${this.jaar}) wordt verhuurd voor €${this.verhuurPrijs} per dag.`;
    }

    retourneer(){
        if(this.beschikbaar){
            return `Deze ${this.merk} ${this.model} was niet verhuurd.`;
        }
        this.beschikbaar = true;
        return `${this.merk} ${this.model} is geretourneerd en weer beschikbaar voor verhuur.`;
    }
}

class Auto extends Voertuig{
    constructor(merk, model, jaar, verhuurprijs, aantalDeuren, brandstofType){
        super(merk, model, jaar, verhuurprijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }

    verhuur(){
        if(!this.beschikbaar){
            return `Deze ${this.merk} ${this.model} is al verhuurd.`;
        }
        this.beschikbaar = false;
        return `Auto ${this.merk} ${this.model} (${this.jaar}) met ${this.aantalDeuren} deuren en ${this.brandstofType} motor wordt verhuurd voor €${this.verhuurPrijs} per dag.`;
    }
}

class Motor extends Voertuig{
    constructor(merk, model, jaar, verhuurprijs, cilinderinhoud, type){
        super(merk, model, jaar, verhuurprijs);
        this.cilinderinhoud = cilinderinhoud;
        this.type = type;
    }

    verhuur(){
        if(!this.beschikbaar){
            return `Deze ${this.merk} ${this.model} is al verhuurd.`;
        }
        this.beschikbaar = false;
        return `Motor ${this.merk} ${this.model} (${this.jaar}), ${this.motorType} type met ${this.cilinderinhoud}cc wordt verhuurd voor €${this.verhuurPrijs} per dag.`;
    }
    
}

const vloot = [
    new Auto("Volkswagen", "Golf", 2020, 65, 5, "benzine"),
    new Auto("Toyota", "Corolla", 2021, 70, 5, "hybride"),
    new Auto("Audi", "A4", 2019, 90, 5, "diesel"),
    new Auto("BMW", "X5", 2022, 120, 5, "benzine"),
    new Motor("Honda", "CBR650R", 2021, 80, 650, "sport"),
    new Motor("Harley Davidson", "Street Glide", 2020, 110, 1750, "touring"),
    new Motor("Kawasaki", "Ninja", 2022, 95, 1000, "sport")
];

function renderVloot() {
    let html = '<h2>Beschikbare Voertuigen</h2>';
    html += '<table>';
    html += '<tr><th>Type</th><th>Merk</th><th>Model</th><th>Jaar</th><th>Prijs/dag</th><th>Eigenschappen</th><th>Status</th><th>Acties</th></tr>';
    
    vloot.forEach(voertuig => {
        html += `<tr>
            <td>${voertuig.type}</td>
            <td>${voertuig.merk}</td>
            <td>${voertuig.model}</td>
            <td>${voertuig.jaar}</td>
            <td>€${voertuig.verhuurPrijs}</td>
            <td>`;
        
        // if (voertuig.type === "Auto") {
        //     html += `${voertuig.aantalDeuren} deuren, ${voertuig.brandstofType}`;
        // } else {
        //     html += `${voertuig.cilinderinhoud}cc, ${voertuig.motorType}`;
        // }
        
        html += `</td>
            <td class="${voertuig.beschikbaar ? 'available' : 'unavailable'}">${voertuig.beschikbaar ? 'Beschikbaar' : 'Verhuurd'}</td>
            <td>
                <button onclick="huurVoertuig(${voertuig.id})" ${!voertuig.beschikbaar ? 'disabled' : ''}>Huur</button>
                <button onclick="retourneerVoertuig(${voertuig.id})" ${voertuig.beschikbaar ? 'disabled' : ''}>Retourneer</button>
            </td>
        </tr>`;
    });
    
    html += '</table>';
    
    html += '<div id="messages"></div>';
    
    outputDiv.innerHTML = html;
}

// Functie om een voertuig te huren
function huurVoertuig(id) {
    const voertuig = vloot.find(v => v.id === id);
    if (voertuig) {
        const bericht = voertuig.verhuur();
        console.log(bericht);
        renderVloot();
    }
}

// Functie om een voertuig te retourneren
function retourneerVoertuig(id) {
    const voertuig = vloot.find(v => v.id === id);
    if (voertuig) {
        const bericht = voertuig.retourneer();
        console.log(bericht);
        renderVloot();
    }
}

// Globale functie beschikbaar maken voor buttons
window.huurVoertuig = huurVoertuig;
window.retourneerVoertuig = retourneerVoertuig;

// Toon alle voertuigen
renderVloot();