export const isObjectEmpty = object => Object.keys(object).length === 0;

export const convertArrayToObjectKeys = (array, value = 0) =>
  array.reduce((obj, item) => {
    return {
      ...obj,
      [item]: value,
    };
  }, {});

export const convertObjectToArray = obj => Object.entries(obj);
