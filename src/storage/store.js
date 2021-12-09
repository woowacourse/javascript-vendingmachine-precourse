const store = {
  setLocalStoreage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  },
  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  },
};

export default store;
