export function getDOMObj(query) {
  return document.querySelector(query);
}

export function getAllProducts() {
  return JSON.parse(window.localStorage.getItem('products'));
}

export function getAllCoins() {
  return JSON.parse(window.localStorage.getItem('coins'));
}
