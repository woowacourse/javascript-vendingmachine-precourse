export const store = {
  setStore(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getStore(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

export const items = store.getStore("items") ?? [];
