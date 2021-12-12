export const CHANGES_ACTION_TYPE = {
  CHARGE_CHANGES: 'CHARGE_CHANGES',
  SPEND_CHANGES: 'SPEND_CHANGES',
};

export const chargeChanges = data => {
  return { type: CHANGES_ACTION_TYPE.CHARGE_CHANGES, data };
};

export const spendChanges = data => {
  return { type: CHANGES_ACTION_TYPE.SPEND_CHANGES, data };
};
