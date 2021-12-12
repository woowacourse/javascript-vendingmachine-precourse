export const getLocalStorage = (key, initValue) => {
  const stringifiedJson = localStorage.getItem(key);
  return stringifiedJson ? JSON.parse(stringifiedJson) : initValue;
};

export const setLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};
