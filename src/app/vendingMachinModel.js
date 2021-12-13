import {
  COIN_KEYS,
  DOM,
  ERROR_MESSAGE,
  FIFTY,
  FIVE_HUNDRED,
  ONE_HUNDRED,
  PLAIN_TEXT,
  TAB,
  TEN,
} from '../lib/constants.js';
import Coin from '../modules/coin.js';
import VendingMachineUtil from './vendingMachineUtil.js';

/** Model */
class VendingMachineModel {
  constructor() {
    this.tab = TAB.PRODUCT_ADD_MENU;

    this.initProductAddModel();
    this.initVendingMachineChargeModel();
    this.initProductPurchaseModel();
  }

  initProductAddModel() {
    this.productAddInputsValue = {
      [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
      [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
    };
    this.productList = [];
  }

  initVendingMachineChargeModel() {
    this.vendingMachineChargeInputsValue = {
      [`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]: PLAIN_TEXT,
    };
    this.vendingMachineCharge = 0;
    this.coins = {
      [`${FIVE_HUNDRED}`]: 0,
      [`${ONE_HUNDRED}`]: 0,
      [`${FIFTY}`]: 0,
      [`${TEN}`]: 0,
    };
  }

  initProductPurchaseModel() {
    this.chargeInputsValue = {
      [`${DOM.CHARGE_INPUT}`]: PLAIN_TEXT,
    };

    this.chargeAmount = 0;

    this.returnCoin = {
      [`${FIVE_HUNDRED}`]: 0,
      [`${ONE_HUNDRED}`]: 0,
      [`${FIFTY}`]: 0,
      [`${TEN}`]: 0,
    };
  }

  setTab(newTab) {
    this.tab = newTab;
  }

  setProductAddInputsValue(predicate) {
    this.productAddInputsValue = predicate(this.productAddInputsValue);
  }

  setVendingMachineChargeInputsValue(predicate) {
    this.vendingMachineChargeInputsValue = predicate(this.vendingMachineChargeInputsValue);
  }

  setChargeInputsValue(predicate) {
    this.chargeInputsValue = predicate(this.chargeInputsValue);
  }

  setCoins(newCoins) {
    this.coins = newCoins;
  }

  setChargeAmount(newChargeAmount) {
    this.chargeAmount = newChargeAmount;
  }

  /** 세개의 인풋 중 하나라도 입력이 안되어 있다면  */
  addProduct() {
    if (VendingMachineUtil.isValidProduct(this.productAddInputsValue)) {
      const newProduct = {
        id: VendingMachineUtil.generateProductId(this.productList),
        name: this.productAddInputsValue[DOM.PRODUCT_NAME_INPUT],
        price: Number(this.productAddInputsValue[DOM.PRODUCT_PRICE_INPUT]),
        quantity: Number(this.productAddInputsValue[DOM.PRODUCT_QUANTITY_INPUT]),
      };
      this.productList = [...this.productList, newProduct];
    }
  }

  addCoins() {
    if (
      VendingMachineUtil.isValidCharge(
        this.vendingMachineChargeInputsValue,
        DOM.VENDING_MACHINE_CHARGE_INPUT
      )
    ) {
      const newCoins = VendingMachineUtil.getNewCoins(
        Number(this.vendingMachineChargeInputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT])
      );
      this.coins = VendingMachineUtil.combineCurrentCoinsAndNewCoins(this.coins, newCoins);
    }
  }

  purchaseProduct(productId) {
    const targetProduct = this.findProduct(productId);

    if (targetProduct === undefined) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_UNDEFINED);
    }
    if (targetProduct.quantity === 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_ZERO);
    }
    if (targetProduct.price > this.chargeAmount) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_TOO_EXPENSIVE);
    }
    this.sellProduct(targetProduct);
  }

  findProduct(productId) {
    return this.productList.find((product) => product.id === productId);
  }

  sellProduct(targetProduct) {
    targetProduct.quantity = targetProduct.quantity - 1;
    this.chargeAmount = this.chargeAmount - targetProduct.price;
  }

  addCharge() {
    if (VendingMachineUtil.isValidCharge(this.chargeInputsValue, DOM.CHARGE_INPUT)) {
      this.chargeAmount = this.chargeAmount + Number(this.chargeInputsValue[DOM.CHARGE_INPUT]);
    }
  }
}
export default VendingMachineModel;
