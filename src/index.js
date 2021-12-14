import { fetchHtmlView } from './fetch.js';
import { moneyList } from './constants.js';

//
let productList = [];
function addProduct() {
    const name = document.querySelector("#product-name-input").value;
    const price = document.querySelector("#product-price-input").value;
    const quantity = document.querySelector("#product-quantity-input").value;
    
    if(isCorrectProductInputs(name, price, quantity)) {
        productList.push({ name, price, quantity });
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
const totalChanges = generateChangeObject();
function chargeMoney() {
    const chargeAmount = document.querySelector("#vending-machine-charge-input").value;
    if(isCorrectChargeMoney(chargeAmount)) {
        getTotalChanges(chargeAmount);
        getTotalChargedMoney(chargeAmount);
        renderTotalChanges(totalChanges);
        renderChargedMoney(chargedMoney);
    }
    else { 
        alert("옳바른 형식이 아닙니다. 10의 배수로 입력해주세요.");
    }
}

function getTotalChargedMoney(chargeAmount) {
    chargedMoney += parseInt(chargeAmount, 10);
}

function getTotalChanges(chargeAmount) {
    const newChanges = getNewChanges(chargeAmount);
    for(let key in totalChanges) {
        totalChanges[key] += newChanges[key];
    }
}

function generateChangeObject() {
    const result = {};
    moneyList.forEach(coin => result[coin] = 0);
    return result;
}

function getNewChanges(newChargeAmount) {
    const result = generateChangeObject();
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
    return MissionUtils.Random.pickNumberInList(moneyList);
}

function renderTotalChanges(changes) {
    moneyList
        .forEach(coin => 
            document.querySelector(`#vending-machine-coin-${coin}-quantity`).textContent = changes[coin]);
}

function renderChargedMoney(money) {
    const moneyResult = document.querySelector("#vending-machine-charge-amount");
    moneyResult.textContent = `보유 금액: ${money}원`;
}

function isCorrectChargeMoney(money) {
    return Number(money) > 0 && Number(money) % 10 === 0;
}

//
let totalInputMoney = 0;
function putMoney() {
    const inputAmount = document.querySelector("#charge-input").value;
    if(isCorrectChargeMoney(inputAmount)) {
        getTotalInputMoney(inputAmount);
        renderInputMoney(totalInputMoney);
    }
    else {
        alert("옳바른 형식이 아닙니다. 10의 배수로 입력해주세요.");
    }
}

function getTotalInputMoney(money) {
    totalInputMoney += parseInt(money, 10);
}

function renderInputMoney(money) {
    document.querySelector("#charge-amount").textContent = `투입한 금액: ${money}`;
}

function renderProductList(products) {
    const productTable = document.querySelector("table");
    products.forEach(product => {
        const {name, price, quantity} = product;
        const newProductRow = document.createElement("tr");
        newProductRow.className = "product-purchase-item";
        newProductRow.innerHTML = `<td class="product-purchase-name" data-product-name="${name}">${name}</td>
                                    <td class="product-purchase-price" data-prouct-price="${price}">${price}</td>
                                    <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
                                    <td><button class="purchase-button">구매하기</button></td>`;
        productTable.appendChild(newProductRow);
    });
}


//

function onTabClick(fileName, tabId) {
    fetchHtmlView(fileName)
        .then(view => renderView(view, tabId))
        .catch(err => alert(err));
}

function renderView(view, tabId) {
    document.querySelector("#tab-content").innerHTML = view;
    switch(tabId) {
        case 1: 
            break;
        case 2: break;
        case 3:
            renderProductList(productList);
            break;
        default: break;
    }
}

// DOM
const app = document.querySelector("#app");
// init
fetchHtmlView('tab.html').then(view => app.innerHTML = view);

app.addEventListener('click', function(e) {
    e.preventDefault();

    const handlers = {
        "product-add-menu"() { onTabClick('product_manage.html', 1); },
        "vending-machine-manage-menu"() { onTabClick('machine_charge.html', 2); },
        "product-purchase-menu"() { 
            onTabClick('product_purchase.html', 3);
        },
        "product-add-button"() { addProduct(); },
        "vending-machine-charge-button"() { chargeMoney(); },
        "charge-button"() { putMoney(); },
    };
    if(Object.keys(handlers).includes(e.target.id)) handlers[e.target.id]();
});