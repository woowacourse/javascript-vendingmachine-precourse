import { getLocalStorage, setLocalStorage } from "../util/localStorage.js";
import { checkValidBuyProduct, checkValidChargeMoney } from "../util/validator.js";
import { LOCAL_STORAGE_KEY } from "../util/constant.js";

export default class PurchaseModel {
  constructor() {
    this.chargedMoney = getLocalStorage(LOCAL_STORAGE_KEY.CHARGE_MONEY) ?? 0;
  }

  getChargedMoney = () => {
    return this.chargedMoney;
  };

  chargeMoney = (money) => {
    checkValidChargeMoney(money);

    this.chargedMoney += money;
    setLocalStorage(LOCAL_STORAGE_KEY.CHARGE_MONEY, this.chargedMoney);
  };

  spendMoney = (price, quantity) => {
    checkValidBuyProduct({ price, quantity }, this.chargedMoney);

    this.chargedMoney -= price;
    setLocalStorage(LOCAL_STORAGE_KEY.CHARGE_MONEY, this.chargedMoney);
  };

  reset = () => {
    this.chargedMoney = 0;
    setLocalStorage(LOCAL_STORAGE_KEY.CHARGE_MONEY, this.chargedMoney);
  };
}
