import { getProductInput, getVendingMachineChargeInput } from '../user.js';
import Product from './product.js';
import { saveProductList } from '../localStorage/products.js';
import { updateProductTable } from '../dom/control/updateProductTable.js';
import Charge from './charge.js';

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
    this.amount += Charge.amount;
    this.coins[500] += Charge.coins[500];
    this.coins[100] += Charge.coins[100];
    this.coins[50] += Charge.coins[50];
    this.coins[10] += Charge.coins[10];

    console.log(this.amount, this.coins);
    Charge.initCharge();
  }
}
