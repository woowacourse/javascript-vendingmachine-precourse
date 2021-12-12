import { USER_CHARGE, VALUES, PRODUCT, OUT_OF_STOCK, NOT_ENOUGH_MONEY} from '../utils/constants.js';
import ProductPurchaseView from './ProductPurchase/ProductPurchaseView.js';

export default class PurchaseEvent {

    static checkCanBuy(name, price, product, userMoney) {
        if(parseInt(userMoney[VALUES]) - parseInt(price) >= 0){
          userMoney[VALUES] = parseInt(userMoney[VALUES]) - parseInt(price);
          product[name][VALUES][1] -= 1;
    
          localStorage.setItem(USER_CHARGE, JSON.stringify(userMoney));
          localStorage.setItem(PRODUCT, JSON.stringify(product));
    
          ProductPurchaseView.showProductTable();
          ProductPurchaseView.showUserCharge(userMoney);
        } else {
          alert(NOT_ENOUGH_MONEY);
        }  
      }

  static purchase(name, price, quantity) {
    const product = JSON.parse(localStorage.getItem(PRODUCT));
    const userMoney = JSON.parse(localStorage.getItem(USER_CHARGE));

    if(parseInt(quantity) <= 0) {
      return alert(OUT_OF_STOCK);
    }
    this.checkCanBuy(name, price, product, userMoney);
  }

    static checkClassName(className, target) {
        if(className === 'purchase-button'){
          const name = target.childNodes[1].dataset.productName;
          const price = target.childNodes[3].dataset.productPrice;
          const quantity = target.childNodes[5].dataset.productQuantity;
    
          this.purchase(name, price, quantity);
        }
      }

    static addPurchaseEvent() {
        document.addEventListener('click', (e) => {
          const className = e.target.className;
          const target = e.target.parentElement.parentElement;
    
          this.checkClassName(className, target);      
        })
      }
}