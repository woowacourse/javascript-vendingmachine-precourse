import { ID } from '../constants/selector.js';
import { Container, Title, Nav, Button } from './elements.js';

const showFirstTab = (tab1, tab2, tab3) => {
  tab1.classList.remove('invisible');
  tab2.classList.add('invisible');
  tab3.classList.add('invisible');
};

const showSecondTab = (tab1, tab2, tab3) => {
  tab1.classList.add('invisible');
  tab2.classList.remove('invisible');
  tab3.classList.add('invisible');
};

const showThirdTab = (tab1, tab2, tab3) => {
  tab1.classList.add('invisible');
  tab2.classList.add('invisible');
  tab3.classList.remove('invisible');
};

const onClickMenuTabButton = (e) => {
  const targetId = e.target.id;
  const productAddMenu = document.querySelector('#product-add-view');
  const vendingMachineManageMenu = document.querySelector(
    '#vending-machine-manage-view'
  );
  const productPurchaseMenu = document.querySelector('#product-purchase-view');

  if (targetId === ID.PRODUCT_ADD_MENU) {
    showFirstTab(productAddMenu, vendingMachineManageMenu, productPurchaseMenu);
  }
  if (targetId === ID.VENDING_MACHINE_MANAGE_MENU) {
    showSecondTab(
      productAddMenu,
      vendingMachineManageMenu,
      productPurchaseMenu
    );
  }
  if (targetId === ID.PRODUCT_PURCHASE_MENU) {
    showThirdTab(productAddMenu, vendingMachineManageMenu, productPurchaseMenu);
  }
};

const createTabNav = () => {
  const tabNav = Nav('menu-tabs');
  const productAddMenuTab = Button(
    '상품 관리',
    ID.PRODUCT_ADD_MENU,
    onClickMenuTabButton
  );
  const vendingMachineManageMenuTab = Button(
    '잔돈 충전',
    ID.VENDING_MACHINE_MANAGE_MENU,
    onClickMenuTabButton
  );
  const productPurchaseMenuTab = Button(
    '상품 구매',
    ID.PRODUCT_PURCHASE_MENU,
    onClickMenuTabButton
  );

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
