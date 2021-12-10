const insertCoinTypeToTable = ($table, coinType, elementId) => {
  $table.innerHTML += `
    <tr>
      <td>${coinType}</td>
      <td id=${elementId}></td>
    </tr>
  `;
};

export { insertCoinTypeToTable };
