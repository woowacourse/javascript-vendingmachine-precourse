export const saveLocalStorage = (key, list) => {
  try {
    localStorage.setItem(key, JSON.stringify(list));
  } catch (error) {
    console.error(error);
  }
};

export const getLocalStorage = key => {
  let list;

  try {
    list = JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    list = [];
    console.error(error);
  }

  return list;
};
