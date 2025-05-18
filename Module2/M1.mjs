let cartItems = [];
const nameInput = document.getElementById('productName');
const priceInput = document.getElementById('productPrice');
const addButton = document.getElementById('addToCart');
const sortButton = document.getElementById('sortByPrice');
const totalSpan = document.getElementById('total');
const cartList = document.getElementById('cartItems');

addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const price = Number(priceInput.value);

    if(!name || !price){
        alert('Vul alle velden in!');
        return
    }

    const product = {
        name: name,
        price: price
    };

    cartItems.push(product);

    updateCart();

    nameInput.value = '';
    priceInput.value = '';
});

function updateCart(){
    cartList.innerHTML = '';
    for(let item of cartItems){
        const li = document.createElement('li');
        li.innerHTML = `
        ${item.name} - €${item.price.toFixed(2)}
        <button id="tst" onclick = "removeItem(${item.name})">X</button>`;
        cartList.appendChild(li);
    }
    let total = 0;
for(let item of cartItems){
    total += item.price;
}
totalSpan.textContent = total.toFixed(2);
}

sortButton.addEventListener('click', () => {
    cartItems.sort((a,b) => a.price - b.price);
    updateCart();
});



