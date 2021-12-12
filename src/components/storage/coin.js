export const getChargeStorage = (name) => {
  const chargedCoin = localStorage.getItem(name);
  return JSON.parse(chargedCoin);
};

export const setChargeStorage = (name, convertedCoins) => {
  localStorage.setItem(name, JSON.stringify(convertedCoins));
};
