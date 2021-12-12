import { COINS_KEY, DOM, ERROR_MESSAGE, FIND_FAILURE, PLAIN_TEXT, TAB } from '../lib/constants.js';
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
      [`${COINS_KEY[500]}`]: 0,
      [`${COINS_KEY[100]}`]: 0,
      [`${COINS_KEY[50]}`]: 0,
      [`${COINS_KEY[10]}`]: 0,
    };
  }

  initProductPurchaseModel() {
    this.chargeInputValue = {
      [`${DOM.CHARGE_INPUT}`]: PLAIN_TEXT,
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

  setChargeInputValue(predicate) {
    this.chargeInputValue = predicate(this.chargeInputValue);
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
      this.productAddInputsValue = {
        [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
        [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
        [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
      };
    }
  }

  addCoins() {
    if (VendingMachineUtil.isValidCharge(this.vendingMachineChargeInputsValue)) {
      const newCoins = VendingMachineUtil.getNewCoins(
        Number(this.vendingMachineChargeInputsValue[DOM.VENDING_MACHINE_CHARGE_INPUT])
      );
      this.coins = VendingMachineUtil.combineCurrentCoinsAndNewCoins(this.coins, newCoins);
    }
  }

  purchaseProduct(productId) {
    const targetProduct = this.findProduct(productId);

    if (targetProduct === FIND_FAILURE) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_UNDEFINED);
    }
    if (targetProduct.quantity === 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_ZERO);
    }
    this.sellProduct(targetProduct);
  }

  findProduct(productId) {
    return this.productList.find((product) => product.id === productId);
  }
  sellProduct(targetProduct) {
    targetProduct = { ...targetProduct, quantity: targetProduct.quantity - 1 };
  }
}
export default VendingMachineModel;
