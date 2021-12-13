const store = {
  setLocalStorage(tabMenu) {
    localStorage.setItem('tabMenu', JSON.stringify(tabMenu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('tabMenu'));
  },
};

export default store;
