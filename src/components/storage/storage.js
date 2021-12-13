export const getLocalStorage = (name) => {
  const storedContent = localStorage.getItem(name);
  if (!storedContent) {
    return [];
  }
  return JSON.parse(storedContent);
};

export const setLocalStorage = (storageName, storageValue) => {
  localStorage.setItem(storageName, JSON.stringify(storageValue));
};
