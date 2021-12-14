import { COIN_UNITS, INITIAL_COINS } from './constants.js';

export const htmlToElement = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

export const isNaturalNum = (numString) => {
  if (/[^0-9]+/.test(numString)) {
    return false;
  }
  if (parseInt(numString, 10) === 0) {
    return false;
  }
  return true;
};

export const isEmptyString = (str) => {
  return !str.trim();
};

export const wrappedHtml = (html) => {
  return `<div>${html}</div>`;
};

export const coinToMoney = (coins) => {
  let money = 0;
  Object.keys(coins).forEach((unit) => {
    money += parseInt(unit, 10) * coins[unit];
  });
  return money;
};

export const moneyToCoin = (money) => {
  const coins = { ...INITIAL_COINS };
  while (money > 0) {
    // eslint-disable-next-line no-undef
    const unit = MissionUtils.Random.pickNumberInList(COIN_UNITS);
    if (money >= unit) {
      coins[unit] += 1;
      // eslint-disable-next-line no-param-reassign
      money -= unit;
    }
  }
  return coins;
};

export const resetInputs = ($inputs) => {
  $inputs.forEach(($input) => {
    $input.value = '';
  });
};
