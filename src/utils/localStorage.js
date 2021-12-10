const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getData = (key) => JSON.parse(localStorage.getItem(key));

const initialProducts = [];
export const setProducts = (data) => setData('products', data);
export const getProducts = () => {
  const products = getData('products');
  return products || initialProducts;
};

const initialVendingMachineCharge = {
  amount: 0,
  coinQuantity: [0, 0, 0, 0],
};
export const setVendingMachineCharge = (data) => setData('vending-machine-charge', data);
export const getVendingMachineCharge = () => {
  const vendingMachineCharge = getData('vending-machine-charge');
  return vendingMachineCharge || initialVendingMachineCharge;
};
