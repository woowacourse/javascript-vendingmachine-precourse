import { COIN_ARR, ZERO } from '../../constants.js';

export default function returnCoin(originCoin, coin) {
  let returnCoinArr = [0, 0, 0, 0];
  if (coin == null) {
    return;
  }

  originCoin.forEach((count, idx) => {
    while (count != ZERO && coin - COIN_ARR[idx] >= ZERO) {
      coin -= COIN_ARR[idx];
      count -= 1;
      returnCoinArr[idx] += 1;
    }
  });

  return {
    arr: returnCoinArr,
    coin: coin,
  };
}
