export const getLocalStorage = (key) => {
  const stringifiedJson = localStorage.getItem(key);
  return stringifiedJson ? JSON.parse(stringifiedJson) : [];
};

export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};
