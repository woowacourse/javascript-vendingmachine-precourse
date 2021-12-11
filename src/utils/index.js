import { coinList } from '../constants/index.js';

export const coinIndex = (coinToFind) => coinList.findIndex((coin) => coin === coinToFind);

export function generateCoinsRandomly(amount) {
  let leftMoney = amount;
  const coinQuantity = [0, 0, 0, 0];
  while (leftMoney > 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
    if (randomCoin <= leftMoney) {
      leftMoney -= randomCoin;
      coinQuantity[coinIndex(randomCoin)] += 1;
    }
  }
  return coinQuantity;
}

function getCoinQuantityToBeReturned(vendingMachineCharge, typeOfCoin, leftCharge) {
  const vendingMachineCoinQuantity = vendingMachineCharge.coinQuantity[coinIndex(typeOfCoin)];
  const maxOfCoinQuantityToBeReturned = Math.floor(leftCharge / typeOfCoin);
  if (maxOfCoinQuantityToBeReturned > vendingMachineCoinQuantity) return vendingMachineCoinQuantity;
  return maxOfCoinQuantityToBeReturned;
}

export function getAmountAndCoinQuantityToBeReturned(charge, vendingMachineCharge) {
  if (charge >= vendingMachineCharge.amount) { return vendingMachineCharge; }
  let leftCharge = charge;
  const coinQuantity = [0, 0, 0, 0];
  coinList.forEach((coin) => {
    coinQuantity[coinIndex(coin)] = getCoinQuantityToBeReturned(coin, leftCharge);
    leftCharge -= coin * coinQuantity[coinIndex(coin)];
  });
  return { amount: charge - leftCharge, coinQuantity };
}

export function addCoins(coinQuantity, coinQuantityToAdd) {
  return coinQuantity.map((quantity, idx) => quantity + coinQuantityToAdd[idx]);
}

export function subtractCoins(coinQuantity, coinQuantityToSubtract) {
  return coinQuantity.map((quantity, idx) => quantity - coinQuantityToSubtract[idx]);
}
