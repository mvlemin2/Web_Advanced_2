let numbers = [1, 2, 3, 4, 5];

// Een deel kopiëren
let subset = numbers.slice(1, 3); // [2, 3]
console.log(subset);

// Elementen verwijderen/toevoegen op specifieke positie
numbers.splice(2, 2); // Verwijdert 1 element vanaf index 2
console.log(numbers);
numbers.splice(2, 1, "nieuw"); // Voegt "nieuw" toe op index 2
console.log(numbers);

// Sorteren
let fruits = ["banana", "apple", "cherry"];
fruits.sort(); // ["apple", "banana", "cherry"]
console.log(fruits);