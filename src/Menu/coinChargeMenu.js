import { saveCoinsToLocalStorage, getCoinsFromLocalStorage } from '../utilsLocalStorage.js';

export const initCoinMenu = () => {
  const coinAddButton = document.getElementById('vending-machine-charge-button');
  coinAddButton.addEventListener('click', () => addCoins());
  updateCoinTableRow();
};

const updateCoinTableRow = () => {
  const coins = getCoinsFromLocalStorage('coin');
  for (let key in coins) {
    let price = key;
    let quantity = coins[key];
    let coinQunatity = document.getElementById(`vending-machine-coin-${price}-quantity`);
    coinQunatity.innerText = quantity;
    coinQunatity.insertAdjacentHTML('beforeend', `<span>개</span>`);
  }
};

const addCoins = () => {
  let vendingMachineCoins = getCoinsFromLocalStorage('coin');
  let newCoin = getRandomCoins();
  for (let key in newCoin) {
    if (isNaN(vendingMachineCoins[key])) {
      vendingMachineCoins[key] = newCoin[key];
    } else {
      vendingMachineCoins[key] += newCoin[key];
    }
  }
  saveCoinsToLocalStorage('coin', vendingMachineCoins);
  updateCoinTableRow();
};

const getRandomCoins = () => {
  let chargeInput = Number(document.getElementById('vending-machine-charge-input').value);

  const COINS = [500, 100, 50, 10];
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
  if (chargeInput < 0) {
    alert('chage more money');
    return false;
  }
  return true;
};

const isCoinInputMulOfTen = (chargeInput) => {
  if (chargeInput % 10 !== 0) {
    alert('chage multiple of 10');
    return false;
  }
  return true;
};
