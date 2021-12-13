import { LIMIT, SELECTOR } from '../../constants/constant.js';
import { $ } from '../../utils/selector.js';

export const addCoinToTable = (coins) => {
  $(`#${SELECTOR.ID.COIN_500}`).innerHTML = `${coins[LIMIT.COIN_500]}개`;
  $(`#${SELECTOR.ID.COIN_100}`).innerHTML = `${coins[LIMIT.COIN_100]}개`;
  $(`#${SELECTOR.ID.COIN_50}`).innerHTML = `${coins[LIMIT.COIN_50]}개`;
  $(`#${SELECTOR.ID.COIN_10}`).innerHTML = `${coins[LIMIT.COIN_10]}개`;
};

export const getAmountInput = () => {
  return Number($(`#${SELECTOR.ID.COIN_CHARGE_INPUT}`).value);
};

export const calculateRandomCoins = (amount, coins) => {
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
