import {
  getProductInput,
  getVendingMachineChargeInput,
  getChargeInput,
} from '../user.js';
import Product from './product.js';
import { saveProductList } from '../storage/products.js';
import {
  updateProductItemAfterPurchase,
  createProductTableRow,
  deleteProductItem,
} from '../dom/update/updateProductTable.js';
import Charge from './charge.js';
import { saveCharges } from '../storage/vendingMachineCharge.js';
import { updateVendingMachineCharge } from '../dom/update/updateVendingMachineCharge.js';
import { saveUserCharge } from '../storage/userCharge.js';
import { updateUserChargeAmount } from '../dom/update/updateUserCharge.js';
import {
  createPurchaseTableRow,
  updatePurchasableProductTableAfterPurchase,
  deletePurchaseProduct,
} from '../dom/update/updatePurchaseTable.js';
import { lackOfUserChangeException } from '../exceptions.js';
import ReturnCoin from './returnCoin.js';
import {
  ACTION_CHARGE,
  ACTION_SAVE,
  ACTION_ADD,
  ACTION_DELETE,
  ACTION_SELL,
  ACTION_WITHDRAW,
} from '../constants/action.js';

export default class VendingMachine {
  constructor() {
    this.products = [];
    this.amount = 0;
    this.userAmount = 0;
    this.coins = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
    };
  }

  // 상품을 자판기에 추가

  addProduct() {
    const productInput = getProductInput();

    if (!productInput) {
      return;
    }

    const newProduct = Product.createProduct(productInput);

    this.updateProductsModel(ACTION_ADD, newProduct);
    this.updateProductsModel(ACTION_SAVE, newProduct);
    this.updateProductsView(ACTION_ADD, newProduct);
  }

  updateProductsModel(action, product) {
    switch (action) {
      case ACTION_ADD:
        this._productModelAddAction(product);
        break;

      case ACTION_DELETE:
        this._productModelDeleteAction(product);
        break;

      case ACTION_SAVE:
        saveProductList(this.products);
        break;
    }
  }

  _productModelAddAction(product) {
    this.products.push(product);
  }

  _productModelDeleteAction(product) {
    this.products = this.products.filter(
      (_product) => _product.name !== product.name
    );
  }

  updateProductsView(action, product) {
    switch (action) {
      case ACTION_ADD:
        this._productViewAddAction(product);
        break;

      case ACTION_SELL:
        this._productViewSellAction(product);
        break;

      case ACTION_DELETE:
        this._productViewDeleteAction(product);
        break;
    }
  }

  _productViewAddAction(product) {
    createProductTableRow([product]);
    createPurchaseTableRow(product.name, product.price, product.quantity);
  }

  _productViewSellAction(product) {
    updateProductItemAfterPurchase(product.name);
    updatePurchasableProductTableAfterPurchase(product.name);
  }

  _productViewDeleteAction(product) {
    deleteProductItem(product.name);
    deletePurchaseProduct(product.name);
  }

  // 자판기 잔돈을 충전

  addVendingMachineCharge() {
    const chargeInput = getVendingMachineChargeInput();

    if (!chargeInput) {
      return;
    }

    this.updateVendingMachineChargeModel(ACTION_CHARGE, chargeInput);
    this.updateVendingMachineChargeModel(ACTION_SAVE, chargeInput);
    this.updateVendingMachineChargeView();
  }

  updateVendingMachineChargeModel(action, charge) {
    switch (action) {
      case ACTION_CHARGE:
        Charge.chargeVendingMachine(charge);
        break;

      case ACTION_WITHDRAW:
        this._vendingMachineChargeModelWithDrawAction(charge);
        break;

      case ACTION_SAVE:
        saveCharges();
        break;
    }
  }

  _vendingMachineChargeModelWithDrawAction(charge) {
    this.amount -= charge;
    this.coins[charge] -= 1;
  }

  updateVendingMachineChargeView() {
    updateVendingMachineCharge();
  }

  // 사용자 보유 금액을 충전

  addUserCharge() {
    const userChargeInput = getChargeInput();

    if (!userChargeInput) {
      return;
    }

    this.updateUserAmountModel(ACTION_CHARGE, userChargeInput);
    this.updateUserAmountModel(ACTION_SAVE, userChargeInput);
    this.updateUserAmountView();
  }

  updateUserAmountModel(action, charge) {
    switch (action) {
      case ACTION_CHARGE:
        this.userAmount += charge;
        break;

      case ACTION_WITHDRAW:
        this.userAmount -= charge;
        break;

      case ACTION_SAVE:
        saveUserCharge();
        break;
    }
  }

  updateUserAmountView() {
    updateUserChargeAmount();
  }

  // 상품을 구매

  purchase(name) {
    const product = Product.searchProduct(name);

    if (lackOfUserChangeException(product.price)) {
      return;
    }

    this.pay(product);
    this.provide(product);
  }

  pay(product) {
    this.updateUserAmountModel(ACTION_WITHDRAW, product.price);
    this.updateUserAmountModel(ACTION_SAVE, product.price);
    this.updateUserAmountView();
  }

  provide(product) {
    Product.sellProduct(product);
    this.updateProductsModel(ACTION_SAVE, product);
    this.updateProductsView(ACTION_SELL, product);
    Product.deleteProduct(product);
  }

  // 남은 잔액을 반환

  returnCoin() {
    ReturnCoin.returnCoin();
  }
}
