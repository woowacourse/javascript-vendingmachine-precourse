import { getLocalStorage, setLocalStorage } from "../util/localStorage.js";
import { checkValidBuyProduct, checkValidChargeMoney } from "../util/validator.js";

export default class PurchaseModel {
  constructor() {
    this.chargedMoney = getLocalStorage("charge-money") ?? 0;
  }

  getChargedMoney = () => {
    return this.chargedMoney;
  };

  chargeMoney = (money) => {
    checkValidChargeMoney(money);

    this.chargedMoney += money;
    setLocalStorage("charge-money", this.chargedMoney);
  };

  spendMoney = (price, quantity) => {
    checkValidBuyProduct({ price, quantity }, this.chargedMoney);

    this.chargedMoney -= price;
    setLocalStorage("charge-money", this.chargedMoney);
  };

  reset = () => {
    this.chargedMoney = 0;
  };
}
