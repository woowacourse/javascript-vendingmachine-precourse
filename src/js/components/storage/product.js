import { STORAGE_NAME } from '../../utils/constants.js';

export const getProductItemStorage = () => {
  if (!localStorage.getItem(STORAGE_NAME)) {
    return [];
  }
  const storedProductItems = localStorage.getItem(STORAGE_NAME);
  return JSON.parse(storedProductItems);
};

export const setProductItemStorage = (item) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(item));
};
