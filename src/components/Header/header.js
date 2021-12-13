import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { Nav, ButtonWithId } from '../elements.js';

export const createTabNav = (event) => {
  const tabNav = Nav(ID.NAV);
  const productAddMenuTab = ButtonWithId(
    MACHINE.MENU.PRODUCT_ADD,
    ID.PRODUCT_ADD_MENU,
    event
  );
  const vendingMachineManageMenuTab = ButtonWithId(
    MACHINE.MENU.MANAGE,
    ID.VENDING_MACHINE_MANAGE_MENU,
    event
  );
  const productPurchaseMenuTab = ButtonWithId(
    MACHINE.MENU.PRODUCT_PURCHASE,
    ID.PRODUCT_PURCHASE_MENU,
    event
  );

  tabNav.append(
    productAddMenuTab,
    vendingMachineManageMenuTab,
    productPurchaseMenuTab
  );

  return tabNav;
};
