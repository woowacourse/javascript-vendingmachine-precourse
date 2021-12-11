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
} from '../dom/control/updateProductTable.js';
import Charge from './charge.js';
import { saveCharges } from '../storage/vendingMachineCharge.js';
import { updateVendingMachineCharge } from '../dom/control/updateVendingMachineChargeTable.js';
import { saveUserCharge } from '../storage/userCharge.js';
import { updateUserChargeAmount } from '../dom/control/updateUserChargeAmount.js';
import {
  createPurchaseTableRow,
  updatePurchasableProductTableAfterPurchase,
  deletePurchaseProduct,
} from '../dom/control/updatePurchasableProductTable.js';
import { lackOfUserChangeException } from '../exceptions.js';
import ReturnCoin from './returnCoin.js';

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

    this.updateProductsModel('추가', newProduct);
    this.updateProductsModel('저장', newProduct);
    this.updateProductsView('추가', newProduct);
  }

  updateProductsModel(action, product) {
    switch (action) {
      case '추가':
        this.products.push(product);
        break;
      case '삭제':
        this.products = this.products.filter(
          (_product) => _product.name !== product.name
        );
        break;
      case '저장':
        saveProductList(this.products);
        break;
    }
  }

  updateProductsView(action, product) {
    switch (action) {
      case '추가':
        createProductTableRow([product]);
        createPurchaseTableRow(product.name, product.price, product.quantity);
        break;
      case '판매':
        updateProductItemAfterPurchase(product.name);
        updatePurchasableProductTableAfterPurchase(product.name);
        break;
      case '삭제':
        deleteProductItem(product.name);
        deletePurchaseProduct(product.name);
        break;
    }
  }

  // 자판기 잔돈을 충전

  addVendingMachineCharge() {
    const vendingMachineChargeInput = getVendingMachineChargeInput();

    if (!vendingMachineChargeInput) {
      return;
    }

    this.updateVendingMachineChargeModel('충전', vendingMachineChargeInput);
    this.updateVendingMachineChargeModel('저장', vendingMachineChargeInput);
    this.updateVendingMachineChargeView();
  }

  updateVendingMachineChargeModel(action, charge) {
    switch (action) {
      case '충전':
        Charge.chargeVendingMachine(charge);
        break;
      case '출금':
        this.amount -= charge;
        this.coins[charge] -= 1;
        break;
      case '저장':
        saveCharges();
        break;
    }
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

    this.updateUserAmountModel('충전', userChargeInput);
    this.updateUserAmountModel('저장', userChargeInput);
    this.updateUserAmountView();
  }

  updateUserAmountModel(action, charge) {
    switch (action) {
      case '충전':
        this.userAmount += charge;
        break;
      case '출금':
        this.userAmount -= charge;
        break;
      case '저장':
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
    this.updateUserAmountModel('출금', product.price);
    this.updateUserAmountModel('저장', product.price);
    this.updateUserAmountView();
  }

  provide(product) {
    Product.sellProduct(product);
    this.updateProductsModel('저장', product);
    this.updateProductsView('판매', product);
    Product.deleteProduct(product);
  }

  // 남은 잔액을 반환

  returnCoin() {
    ReturnCoin.returnCoin();
  }
}
