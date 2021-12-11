import {
  getProductInput,
  getVendingMachineChargeInput,
  getChargeInput,
} from '../user.js';
import Product from './product.js';
import { saveProductList } from '../localStorage/products.js';
import {
  updateProductItemAfterPurchase,
  updateProductTable,
  deleteProductItem,
} from '../dom/control/updateProductTable.js';
import Charge from './charge.js';
import { saveCharges } from '../localStorage/vendingMachineCharge.js';
import { updateVendingMachineCharge } from '../dom/control/updateVendingMachineChargeTable.js';
import { saveUserCharge } from '../localStorage/userCharge.js';
import { updateUserChargeAmount } from '../dom/control/updateUserChargeAmount.js';
import {
  addNewPurchaseProductTableRow,
  updatePurchasableProductTableAfterPurchase,
  deletePurchaseProduct,
} from '../dom/control/updatePurchasableProductTable.js';
import { lackOfUserChangeException } from '../exceptions.js';
import ReturnCoin from './returnCoin.js';

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
    addNewPurchaseProductTableRow(
      newProduct.name,
      newProduct.price,
      newProduct.quantity
    );
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
    this.updateUserCharge();
  }

  purchase(name) {
    const product = this.searchProduct(name);

    if (lackOfUserChangeException(product.price)) {
      return;
    }

    this.userAmount -= product.price;
    this.updateUserCharge();

    product.quantity -= 1;
    saveProductList(this.products);
    updatePurchasableProductTableAfterPurchase(name);
    updateProductItemAfterPurchase(name);

    this.isDeleteProduct(product.quantity, name);
  }

  updateUserCharge() {
    saveUserCharge();
    updateUserChargeAmount();
  }

  searchProduct(name) {
    return this.products.find((product) => product.name === name);
  }

  isDeleteProduct(quantity, name) {
    if (quantity === 0) {
      this.products = this.products.filter((product) => product.name !== name);
      saveProductList(this.products);
      deletePurchaseProduct(name);
      deleteProductItem(name);
    }
  }

  returnCoin() {
    ReturnCoin.returnCoin();
  }
}
