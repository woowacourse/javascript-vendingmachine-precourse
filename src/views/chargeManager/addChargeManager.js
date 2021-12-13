const addVendingMachineCharge = () => {
  return `
    <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
    <button id="vending-machine-charge-button">충전하기</button>
    <br />
    <br />
    <div id="machine-charge-amount-div"></div>
    <br />
  `;
};

const addChargeManager = () => {
  const $app = document.getElementById("app");

  $app.innerHTML += `
    <div id="charge-manager" hidden>
      <h3>자판기 동전 충전하기</h3>
      ${addVendingMachineCharge()}
      <h3>자판기가 보유한 동전</h3>
      <table id="vending-machine-coin-table"></table>
    </div>
  `;
};

export { addChargeManager };
