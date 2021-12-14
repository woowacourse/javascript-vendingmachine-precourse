export function getLocalStorageItem(key) {
    return JSON.parse(localStorage.getItem(key));
};
  

export function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
  
export function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
};