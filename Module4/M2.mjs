class Bankrekening{
    constructor(eigenaar, saldo){
        this._rekeningnummer = Bankrekening.rekeningNrGenerator();
        this._eigenaar = eigenaar;
        this.saldo = saldo;
        this._saldo = 0;
    }

    get rekeningnummer(){
        return this._rekeningnummer;
    }

    get eigenaar(){
        return this._eigenaar;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(saldo){
        if(saldo >= 0){
            this._saldo = saldo;
        }else{
            this._saldo = 0;
        }
    }

    storten(teStortenBedrag){
        if(teStortenBedrag > 0){
            this._saldo += teStortenBedrag;
            return "Storting gelukt";
        }else{
            return "Storting mislukt. Gelieve een geldig bedrag op te geven."
        }
    }

    opnemen(opTeNemenBedrag){
        if(opTeNemenBedrag <= this.saldo){
            this._saldo -= opTeNemenBedrag;
            return "Opneming gelukt";
        }else{
            return "Opneming mislukt. Saldo ontoereikend."
        }
    }

    get overzicht(){
        return `Bankrekening met rekeningnummer ${this.rekeningnummer} van ${this.eigenaar}, met als saldo €${this.saldo}.`;
    }

    static _laatsteRekeningNr = 1000000000;

    static rekeningNrGenerator() {
        this._laatsteRekeningNr++;
        // Format als BE00 0000 0000 0000
        const nr = this._laatsteRekeningNr.toString();
        return `BE00 ${nr.substring(0, 4)} ${nr.substring(4, 8)} ${nr.substring(8)}`;
    }

    static validerenTransactie(from, to, bedrag) {
        // Controleer of rekeningen bestaan
        const fromAccount = bankRekeningen.find(acc => acc.rekeningnummer === from);
        const toAccount = bankRekeningen.find(acc => acc.rekeningnummer === to);

        if (!fromAccount) {
            return {
                success: false,
                message: "Bronrekening niet gevonden"
            };
        }

        if (!toAccount) {
            return {
                success: false,
                message: "Doelrekening niet gevonden"
            };
        }

        // Controleer of bedrag geldig is
        if (bedrag <= 0) {
            return {
                success: false,
                message: "Bedrag moet positief zijn"
            };
        }

        // Controleer of genoeg saldo
        if (fromAccount.saldo < bedrag) {
            return {
                success: false,
                message: "Onvoldoende saldo op bronrekening"
            };
        }

        return {
            success: true,
            message: "Transactie is geldig"
        };
    }
}

class Spaarrekening extends Bankrekening {
    constructor(eigenaar, saldo, rentepercentage){
        super(eigenaar, saldo);
        this._rentepercentage = 0;
        this.rentepercentage = rentepercentage;
    }

    get rentepercentage() {
        return this._rentepercentage;
    }

    set rentepercentage(percentage) {
        if (percentage < 0) {
            console.warn("Rentepercentage kan niet negatief zijn");
        } else {
            this._rentepercentage = percentage;
        }
    }

    get overzicht () {
        return `
            ${super.overzicht}
            Rentepercentage: ${this._rentepercentage}%
        `;
    }

    renteToevoegen(){
        const renteBedrag = this._saldo * (this._rentepercentage / 100);
        const resultaat = this.storten(renteBedrag);

        return resultaat;
    }
}

const rekening1 = new Bankrekening("John Doe", 1250.50);
const rekening2 = new Bankrekening("Marie Kondo", 750.30);
const spaarrekening1 = new Spaarrekening("Jef Klak", 5000, 1.2)

console.log(rekening1.overzicht);
console.log(rekening2.overzicht);
console.log(spaarrekening1.overzicht);

spaarrekening1.renteToevoegen();

console.log(spaarrekening1.overzicht);