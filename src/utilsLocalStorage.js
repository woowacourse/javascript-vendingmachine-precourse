export const saveProductToLocalStorage = (target) => {
  let targets = getProductsFromLocalStorage('product');

  targets.push(target);
  localStorage.setItem('product', JSON.stringify(targets));
};

export const getProductsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('product')) || [];
};

export const saveCoinsToLocalStorage = (target) => {
  localStorage.setItem('coin', JSON.stringify(target));
};

export const getCoinsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('coin')) || {};
};

export const saveMoneyToLocalStorage = (target) => {
  localStorage.setItem('money', JSON.stringify(target));
};

export const getMoneyFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('money')) || '0';
};

export const saveProductsToLocalStorage = (targets) => {
  localStorage.setItem('product', JSON.stringify(targets));
};
