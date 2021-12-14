import { fetchHtmlView } from './fetch.js';
import { moneyList } from './constants.js';

import VendingMachine from './model/vending-machine.js';
import AddProductController from './controller/add-product-controller.js';
import AddProductView from './view/add-product-view.js';
import ChargeMachineView from './view/charge-machine-view.js';
import ChargeMachineController from './controller/charge-marchine-controller.js';

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

function onTabClick(fileName, tabId) {
    fetchHtmlView(fileName)
        .then(view => renderView(view, tabId))
        .catch(err => alert(err));
}

function renderView(view, tabId) {
    document.querySelector("#tab-content").innerHTML = view;
    switch(tabId) {
        case 1: 
            addProuctView.renderAddedProductList(vendingMachine.productList);
            break;
        case 2: 
            chargeMachineView.renderChargedMoney(vendingMachine.chargedMoney);
            chargeMachineView.renderTotalChanges(vendingMachine.totalChanges);
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
// let productList = JSON.parse(getDataInLocalStorage('productList')) || [];
// let chargedMoney = parseInt(getDataInLocalStorage('chargedMoney'), 10) || 0;
// const totalChanges = JSON.parse(getDataInLocalStorage('totalChanges')) || generateChangeObject();
// const inputChanges = JSON.parse(getDataInLocalStorage('inputChanges')) || generateChangeObject();
// let totalInputMoney = parseInt(getDataInLocalStorage('totalInputMoney'), 10) || 0;

const vendingMachine = new VendingMachine();

const addProuctView = new AddProductView();
const addProductController = new AddProductController(vendingMachine, addProuctView);

const chargeMachineView = new ChargeMachineView();
const chargeMachineController = new ChargeMachineController(vendingMachine, chargeMachineView);

app.addEventListener('click', function(e) {
    e.preventDefault();

    const idHandlers = {
        "product-add-menu"() { onTabClick('product_manage.html', 1); },
        "vending-machine-manage-menu"() { onTabClick('machine_charge.html', 2); },
        "product-purchase-menu"() { onTabClick('product_purchase.html', 3); },
        "product-add-button"() { addProductController.addProduct(); },
        "vending-machine-charge-button"() { chargeMachineController.chargeMoney(); },
        "charge-button"() { putMoney(); },
        "coin-return-button"() { returnMoney(); },
    };
    const classHandlers = {
        "purchase-button"() { purchaseProduct(e.target); },
    };

    if(Object.keys(idHandlers).includes(e.target.id)) idHandlers[e.target.id]();
    else if(Object.keys(classHandlers).includes(e.target.className)) classHandlers[e.target.className]();
});