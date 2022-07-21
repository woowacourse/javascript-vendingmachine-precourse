const body = document.getElementById('app');
const title = document.createElement('h2');
title.id = 'title'
title.textContent = '잔돈 충전';
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

const addProduct = document.createElement('h3');
addProduct.textContent = '자판기 동전 충전하기';
body.appendChild(addProduct);
const vendingMoneyInput = document.createElement('input');
vendingMoneyInput.type = 'number';
const chargeButton = document.createElement('input');
chargeButton.type = 'button';
chargeButton.value = '충전하기'
body.appendChild(vendingMoneyInput);
body.appendChild(chargeButton);
const moneyInVending = document.createElement('h5');
moneyInVending.innerHTML = "보유 금액: "
const moneyInVending2 = document.createElement('text');
body.appendChild(moneyInVending);
body.appendChild(moneyInVending2);

const currentMoneyinVending = document.createElement('h3');
currentMoneyinVending.textContent = "동전 보유 현황";
body.appendChild(currentMoneyinVending);

const coinList = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
coinList.style.border = '1px solid black';
thead.style.border = '1px solid black';
tbody.style.border = '1px solid black';
coinList.id = 'coin-list';
body.appendChild(coinList);
coinList.appendChild(thead);
coinList.appendChild(tbody);
const  row1 = document.createElement('tr');
const heading1 = document.createElement('th');
heading1.innerHTML = '동전'
const heading2 = document.createElement('th');
heading2.innerHTML = '개수'
row1.appendChild(heading1);
row1.appendChild(heading2);
thead.appendChild(row1);
const row2 = document.createElement('tr');
const _500won = document.createElement('th');
_500won.innerHTML = "500원";
const _500wonNumber = document.createElement('th');
row2.appendChild(_500won);
row2.appendChild(_500wonNumber);
thead.appendChild(row2);
const row3 = document.createElement('tr');
const _100won = document.createElement('th');
_100won.innerHTML = "100원";
const _100wonNumber = document.createElement('th');
row3.appendChild(_100won);
row3.appendChild(_100wonNumber);
thead.appendChild(row3);
const row4 = document.createElement('tr');
const _50won = document.createElement('th');
_50won.innerHTML = "50원";
const _50wonNumber = document.createElement('th');
row4.appendChild(_50won);
row4.appendChild(_50wonNumber);
thead.appendChild(row4);
const row5 = document.createElement('tr');
const _10won = document.createElement('th');
_10won.innerHTML = "10원";
const _10wonNumber = document.createElement('th');
row5.appendChild(_10won);
row5.appendChild(_10wonNumber);
thead.appendChild(row5);

function showOnScreen(){
    let money = +vendingMoneyInput.value;
    const validity = checkValidity(money);
    if(validity === true){
        const savedMoney = +localStorage.getItem('vendingMoney');
        const sumOfMoney = savedMoney + money;
        moneyInVending2.innerHTML = `${sumOfMoney}원`;
        const changedMoney = changeMoney(sumOfMoney);
        putMoneyinTable(changedMoney);
        saveVendingMoney(sumOfMoney);
    }
}

function checkValidity(money){
    if(money%10 !== 0){
        alert("10원 단위로 입력해야 합니다.")
        return false;
    }
    else{
        return true;
    }
}

chargeButton.addEventListener('click',showOnScreen);

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

function saveVendingMoney(money){
    localStorage.setItem('vendingMoney',money);
}

function getSavedMoneyData(){
    const savedMoney = localStorage.getItem('vendingMoney');
    if(savedMoney != null){
    const changedMoney = changeMoney(savedMoney);
    putMoneyinTable(changedMoney);
    moneyInVending2.innerHTML = `${savedMoney}원`;
    }
}

getSavedMoneyData();