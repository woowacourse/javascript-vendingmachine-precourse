import { INITIAL_DATA, KEY } from '../constants/storage.js';

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

export {
  setData, getProducts, getVendingMachineCharge, getCharge,
};
