import { LIMIT, SELECTOR, COMMENT } from '../../constants/constant.js';
import { $ } from '../../utils/selector.js';

export const setAmountHTML = (amount) => {
  if (amount != 0) {
    $(
      `#${SELECTOR.ID.COIN_CHARGE_AMOUNT_DIV}`
    ).innerHTML = `${COMMENT.COIN_CHARGE_AMOUNT}: <span id="${SELECTOR.ID.COIN_CHARGE_AMOUNT}">${amount}</span>원`;
  }
};

export const addCoinToTable = (coins, amount) => {
  if (amount != 0) {
    $(`#${SELECTOR.ID.COIN_500}`).innerHTML = `${coins[LIMIT.COIN_500]}개`;
    $(`#${SELECTOR.ID.COIN_100}`).innerHTML = `${coins[LIMIT.COIN_100]}개`;
    $(`#${SELECTOR.ID.COIN_50}`).innerHTML = `${coins[LIMIT.COIN_50]}개`;
    $(`#${SELECTOR.ID.COIN_10}`).innerHTML = `${coins[LIMIT.COIN_10]}개`;
  }
};

export const getAmountInput = () => {
  return Number($(`#${SELECTOR.ID.COIN_CHARGE_INPUT}`).value);
};

export const getRandomCoins = (amount, coins) => {
  const coinList = [500, 100, 50, 10];
  let idx = 0;
  let randomCoin;
  while (amount > 0) {
    if (coinList[idx] > amount) {
      idx++;
      continue;
    }
    randomCoin = MissionUtils.Random.pickNumberInList(coinList.slice(idx));
    coins[randomCoin]++;
    amount -= randomCoin;
  }
  return coins;
};

export const clearAmountInput = () => {
  $(`#${SELECTOR.ID.COIN_CHARGE_INPUT}`).value = '';
};
