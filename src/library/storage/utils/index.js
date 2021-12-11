export function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setItem(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
