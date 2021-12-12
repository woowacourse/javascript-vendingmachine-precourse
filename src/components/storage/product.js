import { STORAGE_NAME } from '../../utils/constants.js';

export const getProductItemStorage = () => {
  if (!localStorage.getItem(STORAGE_NAME.PRODUCT)) {
    return [];
  }
  const storedProductItems = localStorage.getItem(STORAGE_NAME.PRODUCT);
  return JSON.parse(storedProductItems);
};

export const setProductItemStorage = (newItem) => {
  const currentStorage = getProductItemStorage();
  currentStorage.push(newItem);
  localStorage.setItem(STORAGE_NAME.PRODUCT, JSON.stringify(currentStorage));
};
