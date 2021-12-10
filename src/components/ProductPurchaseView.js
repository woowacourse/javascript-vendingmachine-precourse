import { ERROR_MESSAGE, USER_CHARGE, VALUES, PRODUCT, CHANGE, COINS, USER_COINS } from '../utils/constants.js';
import { HTML_OF_PRODUCT_PURCHASE_PART, HTML_OF_PRODUCT_PURCHASE_PART_MID, HTML_OF_PRODUCT_PURCHASE_TABLE, HTML_OF_USER_CHANGE_TABLE } from '../utils/html.js';
import ProductPurchaseCheck from './ProductPurchaseCheck.js';

export default class ProductPurchaseView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_PURCHASE_PART + HTML_OF_PRODUCT_PURCHASE_TABLE + HTML_OF_PRODUCT_PURCHASE_PART_MID + HTML_OF_USER_CHANGE_TABLE;
  }

  static addEvent() {
    document.getElementById('charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      const userCharge = document.getElementById('charge-input').value;
      const productPurchaseCheck = new ProductPurchaseCheck(userCharge);

      if(productPurchaseCheck.checkAll()){
        this.addUserCharge(userCharge);
        this.addReturnEvent();
      } else {
        alert(ERROR_MESSAGE);
      }

    })
  }

  static addUserCharge(userCharge) {
    const userInput = JSON.parse(localStorage.getItem(USER_CHARGE));

    if(localStorage.getItem(USER_CHARGE) === null) {
      localStorage.setItem(USER_CHARGE, JSON.stringify({values: userCharge}));
      this.showFirstUserCharge(userCharge);
    } else {
      userInput[VALUES] = parseInt(userInput[VALUES]) + parseInt(userCharge);
      localStorage.setItem(USER_CHARGE, JSON.stringify(userInput));
      this.showUserCharge(userInput);
    }
  }

  static showFirstUserCharge(userCharge) {
    document.getElementById('charge-amount').innerHTML = `${userCharge}원`;
  }

  static showUserCharge(userInput) {
    document.getElementById('charge-amount').innerHTML = `${userInput[VALUES]}원`;
  }

  //상품 표 보여주는거
  static showProductTable() {
    const product = JSON.parse(localStorage.getItem(PRODUCT));

    document.getElementById('product-purchase-table').innerHTML = HTML_OF_PRODUCT_PURCHASE_TABLE + `
    ${Object.keys(product).map((name) => `
    <tr class="product-purchase-item">
      <td class="product-purchase-name" data-product-name=${name}>${name}</td>
      <td class="product-purchase-price" data-product-price=${product[name][VALUES][0]}>${product[name][VALUES][0]}</td>
      <td class="product-purchase-quantity" data-product-quantity=${product[name][VALUES][1]}>${product[name][VALUES][1]}</td>
      <td><button class="purchase-button">구매하기</button></td>
    </tr>`).join('')}`
  }

  static addReturnEvent() {
    const coins = JSON.parse(localStorage.getItem(COINS));
    const userCoins = JSON.parse(localStorage.getItem(USER_COINS));
    const change = JSON.parse(localStorage.getItem(CHANGE));
    const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));
    
    console.log(userMoney[VALUES]);
    console.log(coins[500]);
    console.log(change[VALUES]);

    //만약에 거스름돈이 남은 돈보다 적다면 모두 반환
    if(change[VALUES] <= userMoney[VALUES]) {
      //foreach문으로
      userCoins[500] = coins[500];
      coins[500] = 0;
      userCoins[100] = coins[100];
      coins[100] = 0;
      userCoins[50] = coins[50];
      coins[50] = 0;
      userCoins[10] = coins[10];
      coins[10] = 0;

      userMoney[VALUES] -= change[VALUES];
      change[VALUES] = 0;

      localStorage.setItem(COINS, JSON.stringify(coins));
      localStorage.setItem(USER_COINS, JSON.stringify(userCoins));
      localStorage.setItem(CHANGE, JSON.stringify(change));
      localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));
    } else {
      let temp = userMoney[VALUES];
      while(userMoney[VALUES] >= 0) {
        if(temp >= 500 && coins[500] >= 1) {
          userCoins[500] += 1;
          coins[500] -= 1;
          temp -= 500;
        } else if(temp >= 100 && coins[100] >= 1) {
          userCoins[100] += 1;
          coins[100] -= 1;
          temp -= 100;
        } else if(temp >= 50 && coins[50] >= 1) {
          userCoins[50] += 1;
          coins[50] -= 1;
          temp -= 50;
        } else if(temp >= 10 && coins[10] >= 1) {
          userCoins[10] += 1;
          coins[10] -= 1;
          temp -= 10;
        } else {
          change[VALUES] = change[VALUES] - userMoney[VALUES] + temp;
          break;
        }
      }

      localStorage.setItem(COINS, JSON.stringify(coins));
      localStorage.setItem(USER_COINS, JSON.stringify(userCoins));
      localStorage.setItem(CHANGE, JSON.stringify(change));
      localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));
    }
  }

}
