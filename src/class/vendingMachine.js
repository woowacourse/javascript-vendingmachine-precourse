import {
  getProductInput,
  getVendingMachineChargeInput,
  getChargeInput,
} from '../user.js';
import Product from './product.js';
import { saveProductList } from '../localStorage/products.js';
import { updateProductTable } from '../dom/control/updateProductTable.js';
import Charge from './charge.js';
import { saveCharges } from '../localStorage/vendingMachineCharge.js';
import { updateVendingMachineCharge } from '../dom/control/updateVendingMachineChargeTable.js';
import { saveUserCharge } from '../localStorage/userCharge.js';
import { updateUserChargeAmount } from '../dom/control/updateUserChargeAmount.js';

export default class VendingMachine {
  constructor() {
    this.products = [];
    this.amount = 0;
    this.coins = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
    this.userAmount = 0;
  }

  addProduct() {
    const productInput = getProductInput();

    if (!productInput) {
      return;
    }

    const newProduct = Product.createProduct(productInput);

    this.products.push(newProduct);
    saveProductList(this.products);
    updateProductTable([newProduct]);
  }

  addVendingMachineCharge() {
    const vendingMachineChargeInput = getVendingMachineChargeInput();

    if (!vendingMachineChargeInput) {
      return;
    }

    Charge.moneyToCoin(vendingMachineChargeInput);
    saveCharges();
    updateVendingMachineCharge();
  }

  addUserCharge() {
    const userChargeInput = getChargeInput();

    if (!userChargeInput) {
      return;
    }

    this.userAmount += userChargeInput;
    saveUserCharge();
    updateUserChargeAmount();
  }
}
