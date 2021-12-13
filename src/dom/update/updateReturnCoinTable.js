import ReturnCoin from '../../class/ReturnCoin.js';
import { getReturnCoinTableData } from '../domElement.js';
import { COINS } from '../../constants/data.js';

const updateReturnCoinTable = () => {
  const returnCoinTableData = getReturnCoinTableData();

  COINS.forEach(coin => {
    returnCoinTableData[coin].innerHTML = `${ReturnCoin.returnedCoins[coin]}개`;
  });
};

export default updateReturnCoinTable;
