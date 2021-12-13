function calculateSumOfCoins(coins) {
  return Object.keys(coins).reduce((acc, coin) => acc + coin * coins[coin], 0);
}

export default calculateSumOfCoins;
