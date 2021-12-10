import { COIN_TYPES } from "../../utils/constants.js";
import { insertCoinTypeToTable } from "../common/insertCoinTypeToTable.js";
import { getItemFromLocalStorage } from "../../utils/itemFromLocalStorage.js";

const insertCoinTypesToTable = $table => {
  COIN_TYPES.forEach(coinType => {
    insertCoinTypeToTable(
      $table,
      coinType,
      `vending-machine-coin-${coinType}-quantity`,
    );
  });
};

const makeEmptyTable = () => {
  const $coinTable = document.getElementById("vending-machine-coin-table");

  $coinTable.innerHTML = `
    <th>동전</th>
    <th>개수</th>
  `;

  insertCoinTypesToTable($coinTable);
};

const showCoinsInMachine = () => {
  makeEmptyTable();

  const coinsInMachine = getItemFromLocalStorage("coins");

  if (coinsInMachine) {
    const coinsQuantity = coinsInMachine.split(",");

    for (let i = 0; i < COIN_TYPES.length; i++) {
      document.getElementById(
        `vending-machine-coin-${COIN_TYPES[i]}-quantity`,
      ).innerText = `${coinsQuantity[i]}개`;
    }
  }
};

export { showCoinsInMachine, insertCoinTypeToTable };
