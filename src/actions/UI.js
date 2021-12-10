export const ACTIONS = {
  SWITCH_MENU: 'SWITCH_MENU',
};

export const SWITCH_MENU = menu => {
  return { type: 'SWITCH_MENU', data: menu };
};
