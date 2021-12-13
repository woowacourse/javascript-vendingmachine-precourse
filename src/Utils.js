export function getDOMObj(query) {
  return document.querySelector(query);
}

export function getAllProducts() {
  return JSON.parse(window.localStorage.getItem('products'));
}

export function getAllCoins() {
  const coins = window.localStorage.getItem('coins');
  return coins ? JSON.parse(coins) : {};
}

export function getCoins(amount, currentCoins) {
  const newCoins = { ...currentCoins };
  let left = amount;
  const returnCoins = Object.fromEntries(
    Object.keys(newCoins)
      .sort((a, b) => b - a)
      .map((coin) => {
        const toReturn = Math.min(Math.floor(left / coin), newCoins[coin]);
        left -= coin * toReturn;
        newCoins[coin] -= toReturn;
        return [coin, toReturn];
      }),
  );

  return { returnCoins, left, newCoins };
}
