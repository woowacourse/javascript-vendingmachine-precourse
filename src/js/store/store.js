const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  setLocalStorage(money) {
    localStorage.setItem('money', JSON.stringify(money));
  },
  getMenuLocalStorage() {
    return JSON.parse(localStorage.getItem('menu'));
  },
  getMoneyLocalStorage() {
    return localStorage.getItem('money');
  },
};

//export default store;
