import ReturnCoin from '../../class/returnCoin.js';
import { getReturnCoinTableData } from '../domElement.js';

export const updateReturnCoinTable = () => {
  const coins = [500, 100, 50, 10];
  const returnCoinTableData = getReturnCoinTableData();

  coins.forEach((coin) => {
    returnCoinTableData[coin].innerHTML = `${ReturnCoin.returnedCoins[coin]}개`;
  });
};
