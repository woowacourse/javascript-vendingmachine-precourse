import { STORAGE_NAME } from './constants.js';

export const getLocalStorage = (name) => {
  const storedContent = localStorage.getItem(name);
  if (!storedContent && name === STORAGE_NAME.PRODUCT) {
    return [];
  }
  return JSON.parse(storedContent);
};

export const setLocalStorage = (storageName, storageValue) => {
  localStorage.setItem(storageName, JSON.stringify(storageValue));
};
