import generateZeroCoins from './generateZeroCoins.js';
import pickCoin from './pickCoin.js';

function generateRandomCoins(goal) {
  const coins = generateZeroCoins();
  let currentAmount = 0;

  while (currentAmount < goal) {
    const pickedCoin = pickCoin();
    if (currentAmount + pickedCoin <= goal) {
      coins[pickedCoin] += 1;
      currentAmount += pickedCoin;
    }
  }

  return coins;
}

export default generateRandomCoins;
