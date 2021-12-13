import {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
} from "./itemFromLocalStorage.js";

// 상품 getter & setter
const getProducts = () => {
  const strOfproducts = getItemFromLocalStorage("products");

  return strOfproducts;
};

const setProducts = strOfproducts => {
  setItemFromLocalStorage("products", strOfproducts);
};

// 자판기 속 동전 getter & setter
const getCoinsInMachine = () => {
  const strOfCoins = getItemFromLocalStorage("coins");

  return strOfCoins;
};

const setCoinsInMachine = strOfCoins => {
  setItemFromLocalStorage("coins", strOfCoins);
};

// 손님이 투입한 금액 getter & setter
const getMoneyCustomer = () => {
  const money = getItemFromLocalStorage("money");

  return money;
};

const setMoneyCustomer = money => {
  setItemFromLocalStorage("money", money);
};

export {
  getProducts,
  setProducts,
  getCoinsInMachine,
  setCoinsInMachine,
  getMoneyCustomer,
  setMoneyCustomer,
};
