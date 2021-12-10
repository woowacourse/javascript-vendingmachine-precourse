import { getProductInput, getVendingMachineChargeInput } from '../user.js';
import Product from './product.js';
import { saveProductList } from '../localStorage/products.js';
import { updateProductTable } from '../dom/control/updateProductTable.js';
import Charge from './charge.js';
import { saveCharges } from '../localStorage/charge.js';
import { updateVendingMachineCharge } from '../dom/control/updateVendingMachineChargeTable.js';

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

  addCharge() {
    const ChargeInput = getVendingMachineChargeInput();

    if (!ChargeInput) {
      return;
    }

    Charge.moneyToCoin(ChargeInput);
    saveCharges();
    updateVendingMachineCharge();
  }
}
