import { ID } from '../constants/selector.js';
import { Container, Title, Nav, Button } from './elements.js';

const createTabNav = () => {
  const tabNav = Nav('menu-tabs');
  const productAddMenuTab = Button('상품 관리', ID.PRODUCT_ADD_MENU);
  const vendingMachineManageMenuTab = Button(
    '잔돈 충전',
    ID.VENDING_MACHINE_MANAGE_MENU
  );
  const productPurchaseMenuTab = Button('상품 구매', ID.PRODUCT_PURCHASE_MENU);

  tabNav.append(
    productAddMenuTab,
    vendingMachineManageMenuTab,
    productPurchaseMenuTab
  );

  return tabNav;
};

const Header = () => {
  const header = Container('header');
  const title = Title('🥤 자판기 🥤');
  const tabNav = createTabNav();

  header.append(title, tabNav);

  return header;
};

export default Header;
