import { PRODUCT, NUMBER, NOTHING, COIN_TYPE } from "../utils/constants.js";
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

  getLocalRandonCoin() {
    const randomCoinLocal = JSON.parse(localStorage.getItem("RANDOM_COIN"));

    return randomCoinLocal;
  }

  getLocalReturnCharge() {
    const localRetrunCharge = JSON.parse(localStorage.getItem("CHARGE_RESULT"));

    return localRetrunCharge;
  }

  getPurchaseResult() {
    const localProductList = JSON.parse(localStorage.getItem("PRODUCT_LIST"));

    return localProductList;
  }

  getPuchaseMoneyResult() {
    const localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));

    return localTotalInsertMoney;
  }

  getMinCharge() {
    const randomCoinLocal = JSON.parse(localStorage.getItem("RANDOM_COIN"));
    let localCharge = JSON.parse(localStorage.getItem("CHARGE"));
    let localTotalInsertMoney = JSON.parse(localStorage.getItem("INSERT_MONEY"));  
    randomCoinLocal.find(coin => coin !== NUMBER.ZERO) 
    ? this.calculateMinCharge(randomCoinLocal, localCharge, localTotalInsertMoney) 
    : NOTHING;
    
    return JSON.parse(localStorage.getItem("CHARGE_RESULT"));
  }

  calculateMinCharge(randomCoinLocal, localCharge, localTotalInsertMoney) {
    const chargeCount = Object.values(randomCoinLocal);
    const maxChargeCount = Object.values(randomCoinLocal).reduce((a, b) => a + b);
    const result = Array.from({ length: chargeCount.length }, () => NUMBER.ZERO)
    let outCharge = NUMBER.ZERO;
    for (let i = NUMBER.ZERO; i < maxChargeCount; i++) {
      let coin;
      if (chargeCount[COIN_TYPE.FIVEHUN] > NUMBER.ZERO && localTotalInsertMoney >= NUMBER.FIVEHUN) {
        coin = NUMBER.FIVEHUN;
        result[NUMBER.ZERO]++;
        chargeCount[NUMBER.ZERO]--;
        outCharge += coin;
      } else if (chargeCount[COIN_TYPE.ONEHUN] > NUMBER.ZERO && localTotalInsertMoney >= NUMBER.ONEHUN) {
        coin = NUMBER.ONEHUN;
        result[NUMBER.ONE]++;
        chargeCount[NUMBER.ONE]--;
        outCharge += coin;
      } else if (chargeCount[COIN_TYPE.FIFTY] > NUMBER.ZERO && localTotalInsertMoney >= NUMBER.FIFTY) {
        coin = NUMBER.FIFTY;
        result[NUMBER.TWO]++;
        chargeCount[NUMBER.TWO]--;
        outCharge += coin;
      } else if (chargeCount[COIN_TYPE.TEN] > NUMBER.ZERO && localTotalInsertMoney >= NUMBER.TEN) {
        coin = NUMBER.TEN;
        result[NUMBER.THREE]++;
        chargeCount[NUMBER.THREE]--;
        outCharge += coin;
      }
      if (localTotalInsertMoney === NUMBER.ZERO) break;
      coin ? localTotalInsertMoney -= coin : NOTHING;
    }
    let returnCharge = localCharge - outCharge;
    this.setMinCharge(returnCharge, localTotalInsertMoney, chargeCount, result)
  }

  setMinCharge(returnCharge, localTotalInsertMoney, chargeCount, result) {
    localStorage.setItem("CHARGE", JSON.stringify(returnCharge));
    localStorage.setItem("INSERT_MONEY", JSON.stringify(localTotalInsertMoney));
    localStorage.setItem("RANDOM_COIN", JSON.stringify(chargeCount));
    localStorage.setItem("CHARGE_RESULT", JSON.stringify(result));
  }
}