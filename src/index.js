import { fetchHtmlView } from './fetch.js';

function onAddProduct() {
    const name = document.querySelector("#product-name-input");
    const price = document.querySelector("#product-price-input");
    const quantity = document.querySelector("#product-quantity-input");
    console.log(name, price, quantity);
}

function onTabClick(fileName) {
    fetchHtmlView(fileName)
        .then(view => document.querySelector("#tab-content").innerHTML = view)
        .catch(err => alert(err));
}

// DOM
const app = document.querySelector("#app");
// init
fetchHtmlView('tab.html').then(view => app.innerHTML = view);
onTabClick('product_manage.html'); 

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