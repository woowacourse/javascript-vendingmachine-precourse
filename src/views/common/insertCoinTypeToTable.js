const insertCoinTypeToTable = ($table, coinType, elementId) => {
  $table.innerHTML += `
    <tr>
      <td>${coinType}원</td>
      <td id=${elementId}></td>
    </tr>
  `;
};

export { insertCoinTypeToTable };
