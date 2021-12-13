export const saveToStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const loadFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
