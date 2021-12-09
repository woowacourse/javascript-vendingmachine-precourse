import { COIN_TYPES } from "../../utils/constants.js";

const insertCoinTypeToTable = ($table, coinType, elementId) => {
  $table.innerHTML += `
    <tr>
      <td>${coinType}원</td>
      <td id=${elementId}></td>
    </tr>
  `;
};

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

  const coinsInMachine = JSON.parse(localStorage.getItem("coins"));
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
