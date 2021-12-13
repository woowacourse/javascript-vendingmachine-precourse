export const getFromStorage = function getDataFromLocalStorage(key) {
  return JSON.parse(window.localStorage.getItem(key));
};

export const setInStorage = function setDataInLocalStorage(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
};
