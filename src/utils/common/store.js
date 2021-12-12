export const store = {
  setData(state) {
    localStorage.setItem('state', JSON.stringify(state));
  },

  getData() {
    return JSON.parse(localStorage.getItem('state'));
  },
};
