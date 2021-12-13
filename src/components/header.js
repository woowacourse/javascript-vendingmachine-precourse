import { ID } from '../constants/selector.js';
import { Nav, ButtonWithId } from './elements.js';

export const createTabNav = (event) => {
  const tabNav = Nav('menu-tabs');
  const productAddMenuTab = ButtonWithId(
    '상품 관리',
    ID.PRODUCT_ADD_MENU,
    event
  );
  const vendingMachineManageMenuTab = ButtonWithId(
    '잔돈 충전',
    ID.VENDING_MACHINE_MANAGE_MENU,
    event
  );
  const productPurchaseMenuTab = ButtonWithId(
    '상품 구매',
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
