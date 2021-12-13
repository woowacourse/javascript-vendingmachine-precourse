export const setStateToLocalStorage = (state) => {
  setLocalStorage('products', state.products);
  setLocalStorage('coins', state.coins);
  setLocalStorage('charge', state.charge);
};

export const getStateFromLocalStorage = () => {
  const products = getLocalStorage('products') || [];
  const coins = getLocalStorage('coins') || { 500: 0, 100: 0, 50: 0, 10: 0 };
  const charge = getNumberLocalStorage('charge') || 0;
  return { products, coins, charge };
};

const setLocalStorage = (key, item) => {
  return localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const getNumberLocalStorage = (key) => {
  return Number(localStorage.getItem(key));
};
