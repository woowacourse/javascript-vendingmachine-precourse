export const USER_ACTION_TYPE = {
  CHARGE_MONEY: 'CHARGE_MONEY',
  SPEND_MONEY: 'SPEND_MONEY',
};

export const chargeMoney = data => {
  return { type: USER_ACTION_TYPE.CHARGE_MONEY, data };
};

export const spendMoney = data => {
  return { type: USER_ACTION_TYPE.SPEND_MONEY, data };
};
