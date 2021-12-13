import { fetchHtmlView } from './fetch.js';

function onAddProduct() {
    const name = document.querySelector("#product-name-input").value;
    const price = document.querySelector("#product-price-input").value;
    const quantity = document.querySelector("#product-quantity-input").value;
    
    if(isCorrectProductInputs(name, price, quantity)) console.log('yeas');
    else {
        console.log('nono');
    }
}

function isCorrectProductInputs(name, price, quantity) {
    return isCorrectName(name) && isCorrectPrice(price) && isCorrectQuantity(quantity);
}

function isCorrectName(name) {
    return !!name.trim();
}

function isCorrectPrice(price) {
    return Number(price) >= 100 && Number(price) % 10 === 0;
}

function isCorrectQuantity(quantity) {
    return Number(quantity) >= 1;
}



//

function onTabClick(fileName) {
    fetchHtmlView(fileName)
        .then(view => document.querySelector("#tab-content").innerHTML = view)
        .catch(err => alert(err));
}

// DOM
const app = document.querySelector("#app");
// init
fetchHtmlView('tab.html').then(view => app.innerHTML = view);

app.addEventListener('click', function(e) {
    e.preventDefault();

    const handlers = {
        "product-add-menu"() { onTabClick('product_manage.html'); },
        "vending-machine-manage-menu"() { onTabClick('machine_charge.html'); },
        "product-purchase-menu"() { onTabClick('product_purchase.html'); },
        "product-add-button"() { onAddProduct() },
    };
    if(Object.keys(handlers).includes(e.target.id)) handlers[e.target.id]();
});