// 테이블에 동전 종류와 id에 맞춰 데이터 삽입
const insertCoinTypeToTable = ($table, coinType, elementId) => {
  $table.innerHTML += `
    <tr>
      <td>${coinType}원</td>
      <td id=${elementId}></td>
    </tr>
  `;
};

export { insertCoinTypeToTable };
