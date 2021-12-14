import { getLocalStorageItem, setLocalStorageItem } from "./localStorageController.js"
import { PRODUCT_KEY, INPUT_MONEY_KEY } from "../constants/constants.js";
import { state, updateState } from "../models/state.js";
import { rendering } from "../views/render.js";

export function clickInputMoneyButton(e) {
  e.preventDefault();
  let inputMoney = getLocalStorageItem(INPUT_MONEY_KEY);
  const $chargeInput = document.getElementById("charge-input");

  if($chargeInput.value % 10 !== 0) alert("10원 단위로만 입력할 수 있습니다.");
  else {
  if(inputMoney === null) setLocalStorageItem(INPUT_MONEY_KEY, parseInt($chargeInput.value));
  else {
    inputMoney += parseInt($chargeInput.value);
    setLocalStorageItem(INPUT_MONEY_KEY, inputMoney);
  }  
  updateState();
  rendering();
 }
}

export function purchase(name) {
    state.productList.map((item) => {
      if(item.name === name) {
        item.quantity -= 1;
        if(item.quantity < 0) {
          alert("더 이상 구매할 수 없습니다.");
          item.quantity = 0;
        } 
        else {
        state.inputMoney -= item.price;
        if(state.inputMoney < 0) {
            alert("더 이상 구매할 수 없습니다.");
            item.quantity += 1;
            state.inputMoney = 0;
          }
        }
        setLocalStorageItem(INPUT_MONEY_KEY, state.inputMoney);
        setLocalStorageItem(PRODUCT_KEY, state.productList);
      }
    })
    updateState();
    rendering();
}

export function clickReturnButton(e) {
    e.preventDefault();

    let money = state.inputMoney;
    let array = [state.changes.fiveHundred, state.changes.hundred, state.changes.fifty, state.changes.ten];
    let returnCoins = [0,0,0,0];
    while(money > 0) {
      if(money >= 500 && array[0] !== 0) {
        money -= 500;
        array[0] -= 1;
        returnCoins[0] += 1;
      }    
      else if(money >= 100 && array[1] !== 0) {
        money -= 100;
        array[1] -= 1;
        returnCoins[1] += 1;
      }
      else if(money >= 50 && array[2] !== 0) {
        money -= 50;
        array[2] -= 1;
        returnCoins[2] += 1;
      }
      else if(money >= 10 && array[3] !== 0) {
        money -= 10;
        array[3] -= 1;
        returnCoins[3] += 1;
      }
    }
    setLocalStorageItem(INPUT_MONEY_KEY, 0);
    updateState();
    
    const $returnCoinTable = document.getElementById("return-coin-table");
    $returnCoinTable.innerHTML = `
    <th>동전</th>
    <th>개수</th>
    <tr>
      <td>500원</td>
      <td class="coin-500-quantity">${returnCoins[0]}</td>
    </tr>
    <tr>
      <td>100원</td>
      <td class="coin-100-quantity">${returnCoins[1]}</td>
    </tr>
    <tr>
      <td>50원</td>
      <td class="coin-50-quantity">${returnCoins[2]}</td>
    </tr>
    <tr>
      <td>10원</td>
      <td class="coin-10-quantity">${returnCoins[3]}</td>
    </tr>
  `;
    rendering();

}