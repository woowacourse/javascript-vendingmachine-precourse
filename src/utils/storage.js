function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function initStorageIfNull(key, value) {
  if (loadFromStorage(key) === null) {
    saveToStorage(key, value);
  }
}

export { saveToStorage, loadFromStorage, initStorageIfNull };
