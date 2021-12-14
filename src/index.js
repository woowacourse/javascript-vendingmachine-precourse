import { fetchHtmlView } from './fetch.js';
import { moneyList } from './constants.js';

//
function addProduct() {
    const name = document.querySelector("#product-name-input").value;
    const price = document.querySelector("#product-price-input").value;
    const quantity = document.querySelector("#product-quantity-input").value;
    
    if(isCorrectProductInputs(name, price, quantity)) {
        productList.push({ name, price, quantity });
        setDataInLocalStorage('productList', JSON.stringify(productList));
        renderAddedProductList(productList);
    }
    else {
        alert("옳바른 형식이 아닙니다. 상품명: 1자 이상, 가격: 100원 이상 10 배수, 수량: 1 이상");
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
    setDataInLocalStorage('chargedMoney', chargedMoney);
}

function getTotalChanges(chargeAmount) {
    const newChanges = getNewChanges(chargeAmount);
    for(let key in totalChanges) {
        totalChanges[key] += newChanges[key];
    }
    setDataInLocalStorage('totalChanges', JSON.stringify(totalChanges));
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
            document.querySelector(`#vending-machine-coin-${coin}-quantity`).textContent = `${changes[coin]}개`);
}

function renderChargedMoney(money) {
    const moneyResult = document.querySelector("#vending-machine-charge-amount");
    moneyResult.textContent = money;
}

function isCorrectChargeMoney(money) {
    return Number(money) > 0 && Number(money) % 10 === 0;
}

//
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
    setDataInLocalStorage('totalInputMoney', totalInputMoney);
}

function renderInputMoney(money) {
    document.querySelector("#charge-amount").textContent = money;
}

//
function purchaseProduct(target) {
    const currentRow = target.parentElement.parentElement;
    const quantity = parseInt(currentRow.children[2].dataset?.productQuantity, 10);
    const price = parseInt(currentRow.children[1].dataset?.productPrice, 10);
    
    if(canBuyProduct(price, quantity)) {
        decreaseInputMoney(price);
        decreaseQuantity(currentRow.rowIndex - 2);
        renderDecreaseQuantity(currentRow.children[2], quantity - 1);
        renderInputMoney(totalInputMoney);
    }
    else {
        alert("더이상 구매할 수 없습니다.");
    }
}

function decreaseInputMoney(amount) {
    totalInputMoney -= amount;
    setDataInLocalStorage('totalInputMoney', totalInputMoney);
}

function decreaseQuantity(rowIndex) {
    productList[rowIndex].quantity -= 1;
    setDataInLocalStorage('productList', JSON.stringify(productList));
}

function canBuyProduct(price, quantity) {
    return totalInputMoney >= price && quantity > 0;
}

function renderDecreaseQuantity(quantityCell, quantity) {
    quantityCell.dataset.productQuantity = quantity.toString();
    quantityCell.textContent = quantity.toString();
}

function returnMoney() {
    calculateMinimumChanges();
    renderChanges(inputChanges);
    renderInputMoney(totalInputMoney);
}

function calculateMinimumChanges() {
    moneyList.forEach(coin => {
        while(coin <= totalInputMoney) {
            if(totalChanges[coin] < 1) break;
            totalInputMoney -= coin;
            chargedMoney -= coin;
            totalChanges[coin] -= 1;
            inputChanges[coin] += 1;
        }
    })
    setDataInLocalStorage('chargedMoney', chargedMoney);
    setDataInLocalStorage('totalInputMoney', totalInputMoney);
    setDataInLocalStorage('totalChanges', JSON.stringify(totalChanges));
    setDataInLocalStorage('inputChanges', JSON.stringify(inputChanges));
}

function renderChanges(changes) {
    moneyList
        .forEach(coin => 
            document.querySelector(`#coin-${coin}-quantity`).textContent = `${changes[coin]}개`);
}

// 
function setDataInLocalStorage(name, data) {
    window.localStorage.setItem(name, data);
}

function getDataInLocalStorage(name) {
    return window.localStorage.getItem(name);
}

//

function renderProductList(products) {
    const productTable = document.querySelector("table");
    products.forEach(product => {
        const {name, price, quantity} = product;
        const newProductRow = document.createElement("tr");
        newProductRow.className = "product-purchase-item";
        newProductRow.innerHTML = `<td class="product-purchase-name" data-product-name="${name}">${name}</td>
                                    <td class="product-purchase-price" data-product-price="${price}">${price}</td>
                                    <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
                                    <td><button class="purchase-button">구매하기</button></td>`;
        productTable.appendChild(newProductRow);
    });
}

function renderAddedProductList(products) {
    const productTable = document.querySelector("table");
    productTable.innerHTML = '';
    products.forEach(product => {
        const {name, price, quantity} = product;
        const newProductRow = document.createElement("tr");
        newProductRow.className = "product-manage-item";
        newProductRow.innerHTML = `<td class="product-manage-name">${name}</td>
                                    <td class="product-manage-price">${price}</td>
                                    <td class="product-manage-quantity">${quantity}</td>`;
        productTable.appendChild(newProductRow);
    });
}

function onTabClick(fileName, tabId) {
    fetchHtmlView(fileName)
        .then(view => renderView(view, tabId))
        .catch(err => alert(err));
}

function renderView(view, tabId) {
    document.querySelector("#tab-content").innerHTML = view;
    switch(tabId) {
        case 1: 
            renderAddedProductList(productList);
            break;
        case 2: 
            renderChargedMoney(chargedMoney);
            renderTotalChanges(totalChanges);
            break;
        case 3:
            renderInputMoney(totalInputMoney);
            renderProductList(productList);
            renderChanges(inputChanges);
            break;
        default: 
            alert(`일치하는 탭이 없습니다. ${tabId}`);
            break;
    }
}

// DOM
const app = document.querySelector("#app");
// init
fetchHtmlView('tab.html').then(view => app.innerHTML = view);

// variables
let productList = JSON.parse(getDataInLocalStorage('productList')) || [];
let chargedMoney = parseInt(getDataInLocalStorage('chargedMoney'), 10) || 0;
const totalChanges = JSON.parse(getDataInLocalStorage('totalChanges')) || generateChangeObject();
const inputChanges = JSON.parse(getDataInLocalStorage('inputChanges')) || generateChangeObject();
let totalInputMoney = parseInt(getDataInLocalStorage('totalInputMoney'), 10) || 0;

app.addEventListener('click', function(e) {
    e.preventDefault();

    const idHandlers = {
        "product-add-menu"() { onTabClick('product_manage.html', 1); },
        "vending-machine-manage-menu"() { onTabClick('machine_charge.html', 2); },
        "product-purchase-menu"() { onTabClick('product_purchase.html', 3); },
        "product-add-button"() { addProduct(); },
        "vending-machine-charge-button"() { chargeMoney(); },
        "charge-button"() { putMoney(); },
        "coin-return-button"() { returnMoney(); },
    };
    const classHandlers = {
        "purchase-button"() { purchaseProduct(e.target); },
    };

    if(Object.keys(idHandlers).includes(e.target.id)) idHandlers[e.target.id]();
    else if(Object.keys(classHandlers).includes(e.target.className)) classHandlers[e.target.className]();
});