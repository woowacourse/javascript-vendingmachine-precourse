import { fetchHtmlView } from './fetch.js';

function addProduct() {
    const name = document.querySelector("#product-name-input").value;
    const price = document.querySelector("#product-price-input").value;
    const quantity = document.querySelector("#product-quantity-input").value;
    
    if(isCorrectProductInputs(name, price, quantity)) {
        renderNewProduct(name, price, quantity);
    }
    else {
        alert("옳바른 형식이 아닙니다. 상품명: 1자 이상, 가격: 100원 이상 10 배수, 수량: 1 이상");
    }
}

function renderNewProduct(name, price, quantity) {
    const productTable = document.querySelector("table");
    const newProduct = document.createElement("tr");

    newProduct.className = "product-manage-item";
    newProduct.innerHTML = `<td class="product-manage-name">${name}</td>
                            <td class="product-manage-price">${price}</td>
                            <td class="product-manage-quantity">${quantity}</td>`;
    productTable.appendChild(newProduct);
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
let chargedMoney = 0;
const totalChanges = {
    500: 0, 100: 0, 50: 0, 10: 0,
};
function chargeMoney() {
    const chargeAmount = document.querySelector("#vending-machine-charge-input").value;
    if(isCorrectChargeMoney(chargeAmount)) {
        getTotalChanges(chargeAmount);
        chargedMoney += Number(chargeAmount);
        renderChargedMoney(chargedMoney);
    }
    else { 
        alert("옳바른 형식이 아닙니다. 10의 배수로 입력해주세요.");
    }
}

function getTotalChanges(chargeAmount) {
    const newChanges = getNewChanges(chargeAmount);
    for(let key in totalChanges) {
        totalChanges[key] += newChanges[key];
    }
}

function getNewChanges(newChargeAmount) {
    const result = {
        500: 0, 100: 0, 50: 0, 10: 0
    };

    while(newChargeAmount) {
        const coin = generateRandomChanges();
        if(newChargeAmount >= coin) {
            result[coin] += 1;
            newChargeAmount -= coin;
        }
    }
    return result;
}

function generateRandomChanges() {
    return MissionUtils.Random.pickNumberInList([10, 50, 100, 500]);
}

function renderChargedMoney(money) {
    const moneyResult = document.querySelector("#vending-machine-charge-amount");
    moneyResult.textContent = `보유 금액: ${money}원`;
}

function isCorrectChargeMoney(money) {
    return Number(money) > 0 && Number(money) % 10 === 0;
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
        "product-add-button"() { addProduct() },
        "vending-machine-charge-button"() { chargeMoney() },
    };
    if(Object.keys(handlers).includes(e.target.id)) handlers[e.target.id]();
});