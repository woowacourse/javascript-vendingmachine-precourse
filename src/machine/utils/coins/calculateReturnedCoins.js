import { COINS } from '../../const.js';
import generateZeroCoins from './generateZeroCoins.js';

function calculateReturnedCoins(machineCoins, consumerCoin) {
  const returnedCoin = generateZeroCoins();
  let currentAmount = 0;
  let currentCoinIndex = 0;
  let currentCoin = COINS[currentCoinIndex];

  while (true) {
    if (
      currentAmount + currentCoin <= consumerCoin &&
      machineCoins[currentCoin] !== 0
    ) {
      currentAmount += currentCoin;
      returnedCoin[currentCoin] += 1;
      machineCoins[currentCoin] -= 1;
      continue;
    }

    currentCoinIndex += 1;
    if (currentCoinIndex === COINS.length) break;
    currentCoin = COINS[currentCoinIndex];
  }

  return returnedCoin;
}

export default calculateReturnedCoins;
