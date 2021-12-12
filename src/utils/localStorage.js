export const setLocalStorage = (key, item) => {
  return localStorage.setItem(key, item);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
