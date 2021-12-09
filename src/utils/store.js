const store = {
  setLocalStorage(key, menu) {
    localStorage.setItem(key, JSON.stringify(menu));
  },
  getLocalStorage(menu) {
    return JSON.parse(localStorage.getItem(menu));
  },
};

export default store;
