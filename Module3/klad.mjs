const getallen = [1, 2, 3, 4, 5, 6];
const som = getallen.reduce((a, b) => a + b, 9);
console.log(som);

const evenGetallen = getallen.filter(n => n % 2 === 0);
console.log(evenGetallen);

const verdubbeld = getallen.map(n => n * 2);
console.log(verdubbeld);

function hello() {
    alert('Hello');
  }