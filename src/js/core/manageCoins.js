import { $ } from '../util/dom.js';
import { COINS, COINS_PRICE, DECIMAL } from '../constant/constant.js';
import { coinItemsConstants } from '../constant/string.js';
import { store } from '../store/store.js';
import { renderCoinsItems } from '../render/common.js';
import { localStorageConstants } from '../constant/localstorage.js';
import { calculateChanges } from './manageChanges.js';

export const getRandomCoinsList = () => {
  let inputtedChanges = parseInt(
    $('#vending-machine-charge-input').value,
    DECIMAL,
  );
  let coinsList = [];
  while (inputtedChanges >= COINS_PRICE[COINS.length - 1]) {
    const coin = MissionUtils.Random.pickNumberInList(COINS_PRICE);
    if (coin <= inputtedChanges) {
      coinsList.push(coin);
      inputtedChanges -= coin;
    }
  }
  addCoinsToExistingCoins(coinsList);
  renderCoinsItems(coinItemsConstants);
};

const addCoinsToExistingCoins = coinsArray => {
  for (let i = 0; i < coinsArray.length; i++) {
    const numberOfCoinsToAdd = 1;
    let totalCoins = 0;
    let existingCoins = store.getItem(`coin${coinsArray[i]}`);

    if (existingCoins === null) {
      existingCoins = 0;
      totalCoins += numberOfCoinsToAdd;
    } else {
      totalCoins = existingCoins + numberOfCoinsToAdd;
    }
    store.setItem(`coin${coinsArray[i]}`, totalCoins);
  }
};

export const reflectCoinsToLocalStorage = coinsArray => {
  for (let i = 0; i < COINS.length; i++) {
    store.setItem(COINS[i], coinsArray[i]);
  }
};

export const getnumberOfCoinsList = () => {
  let numberOfCoinsList = [0, 0, 0, 0];
  let inputAmount = store.getItem(localStorageConstants.INPUT_AMOUNT);
  for (let i = 0; i < COINS.length; i++) {
    const localStorageNumberOfCoins = store.getItem(COINS[i]);
    if (localStorageNumberOfCoins !== null) {
      numberOfCoinsList[i] += localStorageNumberOfCoins;
    }
  }
  calculateChanges(numberOfCoinsList, inputAmount);
};
