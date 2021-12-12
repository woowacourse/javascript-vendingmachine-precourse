function addCoins(oldCoins, newCoins) {
  return Object.keys(oldCoins).reduce(
    (acc, coin) => ({ ...acc, [coin]: oldCoins[coin] + newCoins[coin] }),
    {}
  );
}

export default addCoins;
