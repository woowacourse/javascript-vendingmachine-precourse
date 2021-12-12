import { INITIAL_DATA, KEY } from './constants/storage.js';
import { addCoins, subtractCoins } from './utils/index.js';

const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getData = (key) => JSON.parse(localStorage.getItem(key));

const getProducts = () => {
  const products = getData(KEY.PRODUCTS);
  return products || INITIAL_DATA.PRODUCTS;
};

const getVendingMachineCharge = () => {
  const vendingMachineCharge = getData(KEY.VENDING_MACHINE_CHARGE);
  return vendingMachineCharge || INITIAL_DATA.VENDING_MACHINE_CHARGE;
};

const getCharge = () => {
  const charge = getData(KEY.CHARGE);
  return charge || INITIAL_DATA.CHARGE;
};

export default class Storage {
  constructor() {
    this.products = getProducts();
    this.vendingMachineCharge = getVendingMachineCharge();
    this.charge = getCharge();
  }

  setProducts(data) {
    setData(KEY.PRODUCTS, data);
    this.products = data;
  }

  setVendingMachineCharge(data) {
    setData(KEY.VENDING_MACHINE_CHARGE, data);
    this.vendingMachineCharge = data;
  }

  setCharge(data) {
    setData(KEY.CHARGE, data);
    this.charge = data;
  }

  updateProducts(updateProduct) {
    const newProducts = this.products;
    const updateIndex = newProducts.findIndex((product) => product.name === updateProduct.name);
    if (updateIndex === -1) { // 새로운 상품인 경우, 상품 추가
      newProducts.push(updateProduct);
    } else if (updateProduct.quantity === 0) { // 업데이트 상품 정보의 수량이 0인 경우, 상품 제거
      newProducts.splice(updateIndex, 1);
    } else { // 업데이트 상품 정보의 수량이 0이 아닌 경우, 상품 업데이트
      newProducts[updateIndex] = updateProduct;
    }
    this.setProducts(newProducts);
  }

  addVendingMachineCharge({ amount, coinQuantity }) {
    const newAmount = this.vendingMachineCharge.amount + amount;
    const newCoinQuantity = addCoins(this.vendingMachineCharge.coinQuantity, coinQuantity);
    const newVendingMachineCharge = { amount: newAmount, coinQuantity: newCoinQuantity };
    this.setVendingMachineCharge(newVendingMachineCharge);
  }

  subtractVendingMachineCharge({ amount, coinQuantity }) {
    const newAmount = this.vendingMachineCharge.amount - amount;
    const newCoinQuantity = subtractCoins(this.vendingMachineCharge.coinQuantity, coinQuantity);
    const newVendingMachineCharge = { amount: newAmount, coinQuantity: newCoinQuantity };
    this.setVendingMachineCharge(newVendingMachineCharge);
  }

  addCharge(chargeToAdd) {
    this.setCharge(this.charge + chargeToAdd);
  }

  subtractCharge(chargeToSubtract) {
    this.setCharge(this.charge - chargeToSubtract);
  }
}
