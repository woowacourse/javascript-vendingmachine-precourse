import { ERROR_MESSAGE, USER_CHARGE, VALUES, PRODUCT, CHANGE, COINS, USER_COINS, FIVE_HUNDRED, ONE_HUNDRED, FIFTY, TEN} from '../utils/constants.js';
import { HTML_OF_PRODUCT_PURCHASE_PART, HTML_OF_PRODUCT_PURCHASE_PART_MID, HTML_OF_PRODUCT_PURCHASE_TABLE, HTML_OF_USER_CHANGE_TABLE } from '../utils/html.js';
import ProductPurchaseCheck from './ProductPurchaseCheck.js';

export default class ProductPurchaseView {
  static render() {
    this.showPage();

    if(localStorage.getItem(USER_CHARGE) !== null) {
      this.showUserCharge();
    }

    if(localStorage.getItem(PRODUCT) !== null) {
      this.showProductTable();
    }

    if(localStorage.getItem(USER_COINS) !== null) {
      this.showTable();
    }
  }

  static showPage() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_PURCHASE_PART + HTML_OF_PRODUCT_PURCHASE_TABLE + HTML_OF_PRODUCT_PURCHASE_PART_MID + HTML_OF_USER_CHANGE_TABLE;
  }

  static showUserCharge() {
    const userInput = JSON.parse(localStorage.getItem(USER_CHARGE));

    document.getElementById('charge-amount').innerHTML = `${userInput[VALUES]}`;
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

  static addUserChargeEvent() {
    document.getElementById('charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      const userCharge = document.getElementById('charge-input').value;
      const productPurchaseCheck = new ProductPurchaseCheck(userCharge);

      if(productPurchaseCheck.checkAll()){
        this.addUserCharge(userCharge);
        this.showUserCharge();
      } else {
        alert(ERROR_MESSAGE);
      }

    })
  }

  static addUserCharge(userCharge) {
    const userInput = JSON.parse(localStorage.getItem(USER_CHARGE));

    if(localStorage.getItem(USER_CHARGE) === null) {
      localStorage.setItem(USER_CHARGE, JSON.stringify({values: userCharge}));
    } else {
      userInput[VALUES] = parseInt(userInput[VALUES]) + parseInt(userCharge);
      localStorage.setItem(USER_CHARGE, JSON.stringify(userInput));
    }
  }

  static addReturnEvent() {
    document.getElementById('coin-return-button').addEventListener('click', (e) => {
      e.preventDefault();

      localStorage.setItem(USER_COINS, JSON.stringify({ [FIVE_HUNDRED]: 0, [ONE_HUNDRED]: 0, [FIFTY]: 0, [TEN]: 0}));

      const coins = JSON.parse(localStorage.getItem(COINS));
    const userCoins = JSON.parse(localStorage.getItem(USER_COINS));
    const change = JSON.parse(localStorage.getItem(CHANGE));
    const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));

    //거스름돈 없거나 생성 안되었을때
    if(coins === null || parseInt(change[VALUES]) === 0) {
      this.showTable();
      return alert("거스름돈이 없습니다!");
    }

    //만약에 거스름돈이 남은 돈보다 적다면 모두 반환
    if(parseInt(change[VALUES]) <= parseInt(userMoney[VALUES]) && parseInt(change[VALUES]) !== 0) {
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

      console.log("현재 금액",userMoney[VALUES]);
      console.log("거스름돈", change[VALUES]);

      // this.showUserCharge(userMoney);
    } else {
      
      let temp = userMoney[VALUES];
      //실제 거슬러준거
      let real = 0;
      while(temp >= 0) {
        console.log(temp);
        if(temp >= 500 && coins[500] >= 1) {
          userCoins[500] += 1;
          coins[500] -= 1;
          temp -= 500;
          real += 500;
        } else if(temp >= 100 && coins[100] >= 1) {
          userCoins[100] += 1;
          coins[100] -= 1;
          temp -= 100;
          real += 100;
        } else if(temp >= 50 && coins[50] >= 1) {
          userCoins[50] += 1;
          coins[50] -= 1;
          temp -= 50;
          real += 50;
        } else if(temp >= 10 && coins[10] >= 1) {
          userCoins[10] += 1;
          coins[10] -= 1;
          temp -= 10;
          real += 10;
        } else {
          change[VALUES] = parseInt(change[VALUES]) - real;
          userMoney[VALUES] -= real;
          break;
        }
      }

      localStorage.setItem(COINS, JSON.stringify(coins));
      localStorage.setItem(USER_COINS, JSON.stringify(userCoins));
      localStorage.setItem(CHANGE, JSON.stringify(change));
      localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));

      console.log("현재 금액",userMoney[VALUES]);
      console.log("거스름돈", change[VALUES]);

      // this.showUserCharge(userMoney);
    }
    this.showUserCharge();
    this.showTable();
    }) 
    
  }

  static showTable() {
    const userCoins = JSON.parse(localStorage.getItem(USER_COINS));

    document.getElementById('coin-500-quantity').innerHTML = `${userCoins[500]}개`;
    document.getElementById('coin-100-quantity').innerHTML = `${userCoins[100]}개`;
    document.getElementById('coin-50-quantity').innerHTML = `${userCoins[50]}개`;
    document.getElementById('coin-10-quantity').innerHTML = `${userCoins[10]}개`;
  }

  static addPurchaseEvent() {
    document.addEventListener('click', (e) => {
      const className = e.target.className;
      const target = e.target.parentElement.parentElement;

      this.checkClassName(className, target);      
    })
  }

  static checkClassName(className, target) {
    if(className === 'purchase-button'){
      const name = target.childNodes[1].dataset.productName;
      const price = target.childNodes[3].dataset.productPrice;
      const quantity = target.childNodes[5].dataset.productQuantity;

      this.purchase(name, price, quantity);
    }
  }

  static purchase(name, price, quantity) {
    const product = JSON.parse(localStorage.getItem(PRODUCT));
    const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));

    if(parseInt(quantity) <= 0) {
      return alert('재고가 부족합니다!');
    }

    //살 수 있으면 사고 금액 저장, 없으면 alert
    if(parseInt(userMoney[VALUES]) - parseInt(price) >= 0){
      userMoney[VALUES] = parseInt(userMoney[VALUES]) - parseInt(price);
      product[name][VALUES][1] -= 1;

      localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));
      localStorage.setItem(PRODUCT, JSON.stringify(product));

      this.showProductTable();
      this.showUserCharge(userMoney);


    } else {
      alert('구매할 수 없습니다!');
    }
    
  }
}
