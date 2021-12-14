export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key, defaultValue) => {
  if (localStorage.getItem(key) === 'undefined') {
    return defaultValue;
  }
  return JSON.parse(localStorage.getItem(key)) || defaultValue;
};
