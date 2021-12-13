import { COIN_ARR } from '../../constants.js';

export default function returnCoin(originCoin, coin) {
  let returnCoinArr = [0, 0, 0, 0];

  originCoin.forEach((count, idx) => {
    while (count != 0 && coin - COIN_ARR[idx] >= 0) {
      coin -= COIN_ARR[idx];
      count -= 1;
      returnCoinArr[idx] += 1;
    }
  });
  console.log(returnCoinArr);
  console.log(coin);
  return {
    arr: returnCoinArr,
    coin: coin,
  };
}
