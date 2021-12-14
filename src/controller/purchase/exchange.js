import NUMBER from '../../constants/number.js';
import { COIN_UNIT } from '../../constants/constants.js';

const getExchangeResult = (amountForCoinExchange, appModel) => {
  const returnedCoins = COIN_UNIT.map((unit) => {
    let coinUsed = 0;
    const coin = appModel.findCoin(unit);
    while (amountForCoinExchange >= unit && coin.amount) {
      amountForCoinExchange -= unit;
      coin.accumulate(NUMBER.MINUS_ONE);
      coin.addAmount();
      coinUsed += 1;
    }
    return coinUsed;
  });
  return { returnedCoins, remainedInputChargeAmount: amountForCoinExchange };
};

export const exchangeWithCoins = (inputChargeAmount, appModel) => {
  const amountForCoinExchange = inputChargeAmount % NUMBER.THOUSAND;

  const exchangeResult = getExchangeResult(amountForCoinExchange, appModel);

  appModel.setCoins();

  return exchangeResult;
};
