export const cloneObject = (target) => JSON.parse(JSON.stringify(target));

export const storageManager = {
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  get(key, defaultValue = null) {
    const getItem = localStorage.getItem(key);
    return getItem ? JSON.parse(getItem) : defaultValue;
  },
};
