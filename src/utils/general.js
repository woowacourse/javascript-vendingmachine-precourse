export const isObjectEmpty = object => Object.keys(object).length === 0;

export const convertArrayToObjectKeys = (array, value = 0) =>
  array.reduce((object, item) => {
    return {
      ...object,
      [item]: value,
    };
  }, {});

export const convertObjectToArray = object => Object.entries(object);
