import ReturnCoin from '../../class/returnCoin.js';
import { getReturnCoinTableData } from '../domElement.js';
import { COINS } from '../../constants/data.js';

export const updateReturnCoinTable = () => {
  const returnCoinTableData = getReturnCoinTableData();

  COINS.forEach((coin) => {
    returnCoinTableData[coin].innerHTML = `${ReturnCoin.returnedCoins[coin]}개`;
  });
};
