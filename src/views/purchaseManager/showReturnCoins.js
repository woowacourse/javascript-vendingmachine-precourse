import { COIN_TYPES } from "../../utils/constants.js";
import { insertCoinTypeToTable } from "../common/insertCoinTypeToTable.js";

const insertQuantityOfCoins = coins => {
  for (let i = 0; i < COIN_TYPES.length; i++) {
    const $element = document.getElementById(`coin-${COIN_TYPES[i]}-quantity`);
    $element.innerHTML = `${coins[i]}개`;
  }
};

const insertCoinTypesToTable = $table => {
  COIN_TYPES.forEach(coinType => {
    insertCoinTypeToTable($table, coinType, `coin-${coinType}-quantity`);
  });
};

const makeEmptyTable = () => {
  const $returnCoinTable = document.getElementById("return-coin-table");

  $returnCoinTable.innerHTML = `
    <th>동전</th>
    <th>개수</th>
  `;

  insertCoinTypesToTable($returnCoinTable);
};

const showReturnCoinTable = () => {
  makeEmptyTable();
};

export { showReturnCoinTable, insertQuantityOfCoins };
