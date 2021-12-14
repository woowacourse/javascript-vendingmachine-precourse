import { saveCoinsToLocalStorage, getCoinsFromLocalStorage } from '../utilsLocalStorage.js';
import { COINS, COIN_CHARGE_MIN, COIN_CHARGE_UNIT } from '../Class/consts.js';

export const initCoinMenu = () => {
  const coinAddButton = document.getElementById('vending-machine-charge-button');
  coinAddButton.addEventListener('click', () => addCoins());
  updateCoinTableRow();
};

const updateCoinTableRow = () => {
  const coins = getCoinsFromLocalStorage();
  for (let key in coins) {
    let price = key;
    let quantity = coins[key];
    let coinQunatity = document.getElementById(`vending-machine-coin-${price}-quantity`);
    coinQunatity.innerText = quantity;
    coinQunatity.insertAdjacentHTML('beforeend', `<span>개</span>`);
  }
};

const addCoins = () => {
  let vendingMachineCoins = getCoinsFromLocalStorage();
  let newCoin = getRandomCoins();
  for (let key in newCoin) {
    if (isNaN(vendingMachineCoins[key])) {
      vendingMachineCoins[key] = newCoin[key];
    } else {
      vendingMachineCoins[key] += newCoin[key];
    }
  }
  saveCoinsToLocalStorage(vendingMachineCoins);
  updateCoinTableRow();
};

const getRandomCoins = () => {
  let chargeInput = Number(document.getElementById('vending-machine-charge-input').value);

  let price = 0;
  let coins = { 500: 0, 100: 0, 50: 0, 10: 0 };

  if (isCoinInputValid(chargeInput)) {
    while (chargeInput !== price) {
      const coin = MissionUtils.Random.pickNumberInList(COINS);
      if (price + coin <= chargeInput) {
        price += coin;
        coins[coin] += 1;
      }
    }
  }

  return coins;
};

const isCoinInputValid = (chargeInput) => {
  if (!isCoinInputOverZero(chargeInput)) {
    return false;
  }
  if (!isCoinInputMulOfTen(chargeInput)) {
    return false;
  }
  return true;
};

const isCoinInputOverZero = (chargeInput) => {
  if (chargeInput < COIN_CHARGE_MIN) {
    alert('chage more money');
    return false;
  }
  return true;
};

const isCoinInputMulOfTen = (chargeInput) => {
  if (chargeInput % COIN_CHARGE_UNIT !== 0) {
    alert('chage multiple of 10');
    return false;
  }
  return true;
};
