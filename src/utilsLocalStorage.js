export const saveProductToLocalStorage = (key, target) => {
  let targets = getProductsFromLocalStorage(key);

  targets.push(target);
  localStorage.setItem(key, JSON.stringify(targets));
};

export const getProductsFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const saveCoinsToLocalStorage = (key, target) => {
  localStorage.setItem(key, JSON.stringify(target));
};

export const getCoinsFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || {};
};

export const saveMoneyToLocalStorage = (key, target) => {
  localStorage.setItem(key, JSON.stringify(target));
};

export const getMoneyFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || '0';
};

export const saveProductsToLocalStorage = (key, targets) => {
  localStorage.setItem(key, JSON.stringify(targets));
};
