const getItemFromLocalStorage = name => {
  return JSON.parse(localStorage.getItem(name));
};

const setItemFromLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const removeItemFromLocalStorage = name => {
  localStorage.removeItem(name);
};

export {
  getItemFromLocalStorage,
  setItemFromLocalStorage,
  removeItemFromLocalStorage,
};
