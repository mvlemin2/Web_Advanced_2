'use strict';

class Product{
    constructor(naam, prijs, voorraad){
        this.naam = naam;
        this._prijs = 0;
        this.prijs = prijs;
        this._voorraad = 0;
        this.voorraad = voorraad;
    }

    set prijs(prijs){
        if(prijs >= 0){
            this._prijs = prijs;
        }else{
            console.warn(`Negatieve prijs niet toegestaan voor ${this.naam}. Prijs op 0 gezet.`);
            this._prijs = 0;
        }
    }

    set voorraad(voorraad){
        if(voorraad >= 0){
            this._voorraad = voorraad;
        }else{
            console.warn(`Negatieve voorraad niet toegestaan voor ${this.naam}. Voorraad op 0 gezet.`);
            this._voorraad = 0;
        }
    }

    get prijs () {
        return this._prijs;
    }

    get voorraad(){
        return this._voorraad;
    }

    get verkoopprijs(){
        return this.prijs * 1.21;
    }

    get beschibaar(){
        return this.voorraad > 0;
    }
}

const product1 = new Product("Product 1", 55, 5);
const product2 = new Product("Product 2", 3, 10);
const product3 = new Product("Product 3", 22, 26);

const output = document.getElementById('output');
output.innerHTML = `<h2>${product1.naam}</h2><p>prijs = €${product1.verkoopprijs} en €${product1._prijs} zonder BTW en Beschikbaarheid = ${product1.beschibaar}<p>`;