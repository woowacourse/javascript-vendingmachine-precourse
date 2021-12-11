export const store = {
  setData(product) {
    localStorage.setItem('product', JSON.stringify(product));
  },

  getData() {
    return JSON.parse(localStorage.getItem('product'));
  },
};
