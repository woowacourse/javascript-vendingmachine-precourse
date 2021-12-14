import {elementCreator} from '../utils/dom.js';
import createAddTab from './add-tab.js';
import createManageTab from './manage-tab.js';
import createPurchaseTab from './purchase-tab.js';

import {TABS} from '../constants.js';

export default () => {
  const app = document.getElementById('app');

  app.append(elementCreator('h1', 'title', '🥤 자판기 🥤'));

  const buttons = elementCreator('span', 'buttons', null);

  const addButton = elementCreator('button', TABS.ADD_BUTTON_ID, '상품 관리');
  const manageButton = elementCreator(
      'button',
      TABS.MANAGE_BUTTON_ID,
      '잔돈 충전',
  );
  const purchaseButton = elementCreator(
      'button',
      TABS.PURCHASE_BUTTON_ID,
      '상품 구매',
  );

  buttons.append(addButton, manageButton, purchaseButton);
  app.append(buttons);

  // 탭 구현
  const addTab = createAddTab();
  const manageTab = createManageTab();
  const purchaseTab = createPurchaseTab();

  // 처음화면, addTab
  manageTab.hidden = true;
  purchaseTab.hidden = true;

  app.append(addTab, manageTab, purchaseTab);

  // 탭 버튼 이벤트 리스너
  const tabs = {};
  tabs[TABS.ADD_BUTTON_ID] = addTab;
  tabs[TABS.MANAGE_BUTTON_ID] = manageTab;
  tabs[TABS.PURCHASE_BUTTON_ID] = purchaseTab;

  buttons.addEventListener('click', (e) => {
    e.preventDefault();
    const targetButton = e.target;
    for (const buttonId in tabs) {
      if (buttonId === targetButton.id) {
        tabs[buttonId].hidden = false;
      } else {
        tabs[buttonId].hidden = true;
      }
    }
  });
};
