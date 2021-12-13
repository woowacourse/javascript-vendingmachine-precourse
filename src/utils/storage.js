export const setDataOnStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromStorage = (key) => {
  const loadedData = JSON.parse(localStorage.getItem(key));

  return loadedData;
};
