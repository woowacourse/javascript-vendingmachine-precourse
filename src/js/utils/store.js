const store = {
  setLocalStorage(data) {
    return localStorage.setItem('product', JSON.stringify(data));
  },
  getLocalStorage(data) {
    return JSON.parse(localStorage.getItem(data));
  },
};

export default store;
