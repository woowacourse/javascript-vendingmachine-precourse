const store = {
  setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorage(data) {
    return JSON.parse(localStorage.getItem(data));
  },
};

export default store;
