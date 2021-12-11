export const CHANGES_ACTION_TYPE = {
  CHARGE_CHANGES: 'CHARGE_CHANGES',
};

export const chargeChanges = data => {
  return { type: CHANGES_ACTION_TYPE.CHARGE_CHANGES, data };
};
