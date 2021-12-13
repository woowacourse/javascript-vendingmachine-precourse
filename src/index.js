import { fetchHtmlView } from './fetch.js';

function onProductManageTabClick() {
    document.querySelector("#tab-content").innerHTML = 'hihi';
}
function onMachineChargeTabClick() {
    document.querySelector("#tab-content").innerHTML = 'hihaai';
}
function onProductPurchaseTabClick() {
    document.querySelector("#tab-content").innerHTML = 'hisshi';
}

// DOM
const app = document.querySelector("#app");
// init
fetchHtmlView('tab.html').then(view => app.innerHTML = view);

app.addEventListener('click', function(e) {
    e.preventDefault();

    const handlers = {
        "product-add-menu"() { onProductManageTabClick(); },
        "vending-machine-manage-menu"() { onMachineChargeTabClick(); },
        "product-purchase-menu"() { onProductPurchaseTabClick(); },
    };
    if(Object.keys(handlers).includes(e.target.id)) handlers[e.target.id]();
});