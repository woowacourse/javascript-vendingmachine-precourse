import { COIN_TYPES } from "../../../utils/constants.js";
import { insertCoinTypeToTable } from "../../common/insertCoinTypeToTable.js";
import { getCoinsInMachine } from "../../../models/getSetItems.js";

// 동전 테이블에 동전 종류 삽입
const insertCoinTypesToTable = $table => {
  COIN_TYPES.forEach(coinType => {
    insertCoinTypeToTable(
      $table,
      coinType,
      `vending-machine-coin-${coinType}-quantity`,
    );
  });
};

// 빈 테이블 생성
const makeEmptyTable = () => {
  const $coinTable = document.getElementById("vending-machine-coin-table");

  $coinTable.innerHTML = `
    <th>동전</th>
    <th>개수</th>
  `;

  insertCoinTypesToTable($coinTable);
};

// 자판기 속 동전 보여주기
const showCoinsInMachine = () => {
  makeEmptyTable();

  const coinsInMachine = getCoinsInMachine();

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
