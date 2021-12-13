export const CHARGE_TAP = {
  FORM: {
    TITLE: "자판기 동전 충전하기",
    INPUT: ["자판기가 보유할 금액", "vending-machine-charge-input", "number"],
    BUTTON: ["submit", "충전하기", "vending-machine-charge-button"],
    AMOUNT_HEADER: "보유 금액: ",
    AMOUNT_ID: "vending-machine-charge-amount",
  },

  CHANGE_STATE_TITLE: "자판기가 보유한 동전",
  CHANGE_STATE_TABLE_HEADERS: ["동전", "개수"],
  CHANGE_STATE_TABLE_RAWS: [
    ["500원", "vending-machine-coin-500-quantity"],
    ["100원", "vending-machine-coin-100-quantity"],
    ["50원", "vending-machine-coin-50-quantity"],
    ["10원", "vending-machine-coin-10-quantity"],
  ],
};
