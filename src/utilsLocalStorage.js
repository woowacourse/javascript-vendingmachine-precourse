export const saveProductToLocalStorage = (key, target) => {
  let targets = getProductsFromLocalStorage(key);

  targets.push(target);
  localStorage.setItem(key, JSON.stringify(targets));
};

export const getProductsFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};
