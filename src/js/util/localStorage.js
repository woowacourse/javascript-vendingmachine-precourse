export const getLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    return null;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return null;
  }
};
