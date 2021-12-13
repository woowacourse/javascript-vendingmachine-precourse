export const setDataOnStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromStorage = (key, data) => {
  const loadedData = localStorage.getItem(key, JSON.parse(data));
  // if (key === 'coin') {
  //   return data.map((datum) => ne)
  // }

  return loadedData;
};
