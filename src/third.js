const body = document.getElementById('app');
const title = document.createElement('h2');
title.id = 'title'
title.textContent = '상품 구매 및 잔돈 반환';
body.appendChild(title);

const menu = document.createElement('span');
menu.id= 'menu'
body.appendChild(menu);
const menuProductPurchase = document.createElement('input');
const menuVedingMachine = document.createElement('input');
const menuProductAdd = document.createElement('input');
menuProductAdd.type ='button';
menuProductAdd.id = 'product-add-menu';
menuProductAdd.value = '상품 관리';
menuVedingMachine.type ='button';
menuVedingMachine.id = 'vending-machine-manage-menu';
menuVedingMachine.value = '잔돈 충전'
menuProductPurchase.type = 'button';
menuProductPurchase.id = 'product-purchase-menu';
menuProductPurchase.value = '상품 구매'
menu.appendChild(menuProductAdd);
menu.appendChild(menuVedingMachine);
menu.appendChild(menuProductPurchase);

function movePage1(){
    window.location.href='index.html'
}

function movePage2(){
    window.location.href ="index2.html"
}

function movePage3(){
    window.location.href='index3.html'
}

menuProductAdd.addEventListener('click',movePage1);
menuVedingMachine.addEventListener('click',movePage2);
menuProductPurchase.addEventListener('click',movePage3);

const insertMoney = document.createElement('h3');
insertMoney.textContent = '금액 투입';
body.appendChild(insertMoney);
const insertedMoneyInput = document.createElement('input');
insertedMoneyInput.type = 'number';
const insertButton = document.createElement('input');
insertButton.type = 'button';
insertButton.value = '투입하기'
body.appendChild(insertedMoneyInput);
body.appendChild(insertButton);
const inserted = document.createElement('span');
const insertedMoney = document.createElement('h5');
insertedMoney.innerHTML = "투입한 금액: "
const insertedMoney2 = document.createElement('text');
inserted.appendChild(insertedMoney);
inserted.appendChild(insertedMoney2);
body.appendChild(inserted);

const product = document.createElement('h3');
product.innerHTML = '구매할 수 있는 상품 현황';
const productList = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
productList.id = 'product-list';
body.appendChild(product);
body.appendChild(productList);
productList.appendChild(thead);
productList.appendChild(tbody);
const  row1 = document.createElement('tr');
const heading1 = document.createElement('th');
heading1.innerHTML = '상품명'
const heading2 = document.createElement('th');
heading2.innerHTML = '가격'
const heading3 = document.createElement('th');
heading3.innerHTML = '수량'
const heading4 = document.createElement('th');
heading4.innerHTML = '구매하기';
row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
row1.appendChild(heading4);
thead.appendChild(row1);

const change = document.createElement('h3');
change.textContent = '잔돈';
body.appendChild(change);
const changeBtn = document.createElement('input');
changeBtn.type = 'button';
changeBtn.value = '반환하기';
body.appendChild(changeBtn);
const coinList = document.createElement('table');
const thead2 = document.createElement('thead');
const tbody2 = document.createElement('tbody');
coinList.style.border = '1px solid black';
thead2.style.border = '1px solid black';
tbody2.style.border = '1px solid black';
coinList.id = 'coin-list';
body.appendChild(coinList);
coinList.appendChild(thead2);
coinList.appendChild(tbody2);
const  row_1 = document.createElement('tr');
const heading_1 = document.createElement('th');
heading_1.innerHTML = '동전'
const heading_2 = document.createElement('th');
heading_2.innerHTML = '개수'
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead2.appendChild(row_1);
const row_2 = document.createElement('tr');
const _500won = document.createElement('th');
_500won.innerHTML = "500원";
const _500wonNumber = document.createElement('th');
row_2.appendChild(_500won);
row_2.appendChild(_500wonNumber);
thead2.appendChild(row_2);
const row_3 = document.createElement('tr');
const _100won = document.createElement('th');
_100won.innerHTML = "100원";
const _100wonNumber = document.createElement('th');
row_3.appendChild(_100won);
row_3.appendChild(_100wonNumber);
thead2.appendChild(row_3);
const row_4 = document.createElement('tr');
const _50won = document.createElement('th');
_50won.innerHTML = "50원";
const _50wonNumber = document.createElement('th');
row_4.appendChild(_50won);
row_4.appendChild(_50wonNumber);
thead2.appendChild(row_4);
const row_5 = document.createElement('tr');
const _10won = document.createElement('th');
_10won.innerHTML = "10원";
const _10wonNumber = document.createElement('th');
row_5.appendChild(_10won);
row_5.appendChild(_10wonNumber);
thead2.appendChild(row_5);


function checkValidity(money){
    if(money%10 !== 0){
        alert("10원 단위로 입력해야 합니다.")
        return false;
    }
    else{
        return true;
    }
}

let savedInsertedMoney = localStorage.getItem('insertedMoney');

function getSavedInsertedMoney(){
    if(savedInsertedMoney != null){
    insertedMoney2.textContent = `${savedInsertedMoney}원`;
    }
    return +savedInsertedMoney;
}

const MoneyInserted = getSavedInsertedMoney();
console.log(MoneyInserted);

function showOnScreen(){
    const moneyValue = +insertedMoneyInput.value;
    const money = checkValidity(moneyValue);
    if(money === true){
        const sumOfMoney = moneyValue + MoneyInserted;
        insertedMoney2.textContent = `${sumOfMoney}원`;
        localStorage.setItem('insertedMoney',sumOfMoney);
    }   
}

insertButton.addEventListener('click',showOnScreen);

class Product{
    constructor(name,price,quantity){
        this.name = name
        this.price = +price
        this.quantity = +quantity
    }

 /*   purchased(){
       localStorage.setItem(`${this.name}`,[`${this.price}`,`${this.quantity-1}`]);
       insertedMoney2.textContent= savedInsertedMoney - this.price;
    }*/
}

let products = [];
function getSavedProductData(){
    for(let i =0 ; i<localStorage.length; i++){
       let key = localStorage.key(i);
       let value = localStorage.getItem(key);
       let newValue = value.split(',');
       let product = new Product(key, +newValue[0], +newValue[1]);
        if(localStorage.key(i) !== 'vendingMoney' && localStorage.key(i)!='insertedMoney'){
        products.push(product);
        makeOneRowonTable(product);
        }
    }
}

getSavedProductData();



function purchase(product){
    console.log(MoneyInserted);
    localStorage.setItem(product.name, [product.price, product.quantity-1]);
    console.log(product.price);
    localStorage.setItem('insertedMoney', (MoneyInserted - product.price));
    window.location.reload();
}

function makeOneRowonTable(product){
    let newRow = document.createElement('tr');
    let productName = document.createElement('td');
    productName.innerHTML = product.name;
    let productPrice = document.createElement('td');
    productPrice.innerHTML = product.price;
    let productQuantity = document.createElement('td');
    productQuantity.innerHTML = product.quantity;
    let purchaseBtn = document.createElement('input');
    purchaseBtn.type = 'button';
    purchaseBtn.value = '구매하기';
    purchaseBtn.addEventListener('click',function(){purchase(product)});
    newRow.appendChild(productName);
    newRow.appendChild(productPrice);
    newRow.appendChild(productQuantity);
    newRow.appendChild(purchaseBtn);
    tbody.appendChild(newRow);
}

function changeMoney(money){
    const coinNumber =[] ;
    coinNumber.push(Math.floor(money/500));
    coinNumber.push(Math.floor(money%500/100));
    coinNumber.push((Math.floor(money%500%100/50)));
    coinNumber.push(money%500%100%50/10);
    console.log(coinNumber);
    return coinNumber;
}

function putMoneyinTable(coinNumber){
    _500wonNumber.innerHTML = `${coinNumber[0]}개`;
    _100wonNumber.innerHTML = `${coinNumber[1]}개`;
    _50wonNumber.innerHTML = `${coinNumber[2]}개`;
    _10wonNumber.innerHTML = `${coinNumber[3]}개`;
     }

function giveChange(){
    const vendingMoney = +localStorage.getItem('vendingMoney');
    console.log(vendingMoney);
    console.log(MoneyInserted);
    if(MoneyInserted <= vendingMoney){
        const changedMoney = changeMoney(MoneyInserted);
        putMoneyinTable(changedMoney);
    }
    else{
        const changedMoney = changeMoney(vendingMoney);
        putMoneyinTable(changedMoney);
    }
}

changeBtn.addEventListener('click',giveChange);

//products[0].purchased();