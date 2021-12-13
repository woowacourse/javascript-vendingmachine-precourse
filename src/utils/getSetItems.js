import {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
} from "./itemFromLocalStorage.js";

const getProducts = () => {
  const strOfproducts = getItemFromLocalStorage("products");

  return strOfproducts;
};

const setProducts = strOfproducts => {
  setItemFromLocalStorage("products", strOfproducts);
};

const getCoinsInMachine = () => {
  const strOfCoins = getItemFromLocalStorage("coins");

  return strOfCoins;
};

const setCoinsInMachine = strOfCoins => {
  setItemFromLocalStorage("coins", strOfCoins);
};

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
