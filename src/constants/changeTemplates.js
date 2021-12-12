export const changeTemplates = {
  changeInputs(money) {
    return `
      <input id="vending-machine-charge-input" type="number" placeholder="잔돈 충전" />   
      <input type="text" style="display:none;" />
      <button id="vending-machine-charge-button">충전하기</button>
      <h4>보유 금액: ${money}</h4>
    `;
  },
};
