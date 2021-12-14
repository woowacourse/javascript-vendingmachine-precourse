import { PRODUCT, NUMBER, NOTHING } from "../utils/constants.js";
import { checkInsertPrice } from "../utils/validation/moneyAdd.js";

export default class ProductPurchaseModel {
  constructor() {
    this.totalInsertMoney;
  }

  setLocalInsertMoney(money) {
    const localInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));  
    localInsertMoney 
    ? this.totalInsertMoney = Number(localInsertMoney) + Number(money)
    : this.totalInsertMoney = Number(money);
    localStorage.setItem("INSERT_MONEY", JSON.stringify(this.totalInsertMoney));
  }

  getLocalInsertMoney () {
    const localTotalInsertMoney = localStorage.getItem("INSERT_MONEY");
    const parseLocalTotalInsertMoney = JSON.parse(localTotalInsertMoney);
    
    return parseLocalTotalInsertMoney;
  }

  getLocalProductList() {
    const localProductList = localStorage.getItem("PRODUCT_LIST");
    const parseLocalProductList = JSON.parse(localProductList);

    return parseLocalProductList;
  }

  setPurchaseProduct(selectProduct) {
    const localProductList = JSON.parse(localStorage.getItem("PRODUCT_LIST"));
    let localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));
    let checkInsertPriceResult = checkInsertPrice(localTotalInsertMoney, localProductList, selectProduct);
    if (checkInsertPriceResult) {
      localProductList.map(product => product[PRODUCT.NAME] === selectProduct[PRODUCT.NAME] 
        ? (product[PRODUCT.COUNT] = (Number(product[PRODUCT.COUNT]) - NUMBER.ONE), localTotalInsertMoney -= Number(product[PRODUCT.PRICE])) 
        : NOTHING );
      localProductList.forEach((product, i) => product[PRODUCT.COUNT] === NUMBER.ZERO ? localProductList.splice(i, NUMBER.ONE): NOTHING);
      localStorage.setItem("PRODUCT_LIST", JSON.stringify(localProductList));
      localStorage.setItem("INSERT_MONEY", JSON.stringify(localTotalInsertMoney));
    }
  }

  getPurchaseResult() {
    const localProductList = JSON.parse(localStorage.getItem("PRODUCT_LIST"));

    return localProductList;
  }

  getPuchaseMoneyResult() {
    const localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));

    return localTotalInsertMoney;
  }

  setMinCharge() {
    const randomCoinLocal = JSON.parse(localStorage.getItem("RANDOM_COIN"));
    let localCharge = JSON.parse(localStorage.getItem("CHARGE"));
    const chargeCount = Object.values(randomCoinLocal);
    const maxChargeCount = Object.values(randomCoinLocal).reduce((a, b) => a + b);
    let localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));  

    let outCharge = 0;
    const result = Array.from({length: chargeCount.length }, () => 0)
    for (let i = 0; i < maxChargeCount; i++) {
      let coin;
      if (chargeCount[0] > 0 && localTotalInsertMoney >= 500) {
        coin = 500;
        result[0]++;
        chargeCount[0]--;
        outCharge += coin;
      } else if (chargeCount[1] > 0 && localTotalInsertMoney >= 100) {
        coin = 100;
        result[1]++;
        chargeCount[1]--;
        outCharge += coin;
      } else if (chargeCount[2] > 0 && localTotalInsertMoney >= 50) {
        coin = 50;
        result[2]++;
        chargeCount[2]--;
        outCharge += coin;
      } else if (chargeCount[3] > 0 && localTotalInsertMoney >= 10) {
        coin = 10;
        result[3]++;
        chargeCount[3]--;
        outCharge += coin;
      }
      if (localTotalInsertMoney === 0) break;
      localTotalInsertMoney -= coin;
    }
    let returnCharge = localCharge - outCharge;

    localStorage.setItem("CHARGE", JSON.stringify(returnCharge));
    localStorage.setItem("INSERT_MONEY", JSON.stringify(localTotalInsertMoney));
    localStorage.setItem("RANDOM_COIN", JSON.stringify(chargeCount));
    localStorage.setItem("CHARGE_RESULT", JSON.stringify(result));

    return result;
  }

  getReturnCharge() {
    const localRetrunCharge = JSON.parse(localStorage.getItem("CHARGE_RESULT"));

    return localRetrunCharge;
  }

}