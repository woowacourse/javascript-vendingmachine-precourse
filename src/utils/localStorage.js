export const setStateToLocalStorage = (state) => {
  setLocalStorage('products', state.products);
  setLocalStorage('coins', state.coins);
};

export const getStateFromLocalStorage = () => {
  const products = getLocalStorage('products') || [];
  const coins = getLocalStorage('coins') || { 500: 0, 100: 0, 50: 0, 10: 0 };
  console.log(products, coins);
  return { products, coins };
};

const setLocalStorage = (key, item) => {
  return localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
