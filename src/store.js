export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = key => JSON.parse(localStorage.getItem(key));
