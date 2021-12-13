import { COIN_TYPES } from "../../utils/constants.js";
import { insertCoinTypeToTable } from "../common/insertCoinTypeToTable.js";

// 각 동전 개수 데이터 삽입
const insertQuantityOfCoins = coins => {
  for (let i = 0; i < COIN_TYPES.length; i++) {
    const $element = document.getElementById(`coin-${COIN_TYPES[i]}-quantity`);
    $element.innerHTML = `${coins[i]}개`;
  }
};

// 각 동전 타입을 테이블에 삽입
const insertCoinTypesToTable = $table => {
  COIN_TYPES.forEach(coinType => {
    insertCoinTypeToTable($table, coinType, `coin-${coinType}-quantity`);
  });
};

// 빈 테이블 생성
const makeEmptyTable = () => {
  const $returnCoinTable = document.getElementById("return-coin-table");

  $returnCoinTable.innerHTML = `
    <th>동전</th>
    <th>개수</th>
  `;

  insertCoinTypesToTable($returnCoinTable);
};

// 잔돈 반환 테이블 보여주기
const showReturnCoinTable = () => {
  makeEmptyTable();
};

export { showReturnCoinTable, insertQuantityOfCoins };
