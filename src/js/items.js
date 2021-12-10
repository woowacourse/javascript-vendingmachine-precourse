import { renderProductPurchaseMenu } from './render.js';

export const purchaseItems = target => {
  const menuToChange = target.closest('tr').firstChild.nextSibling.innerText;
  const menus = JSON.parse(localStorage.getItem('menu'));
  let money = parseInt(localStorage.getItem('money'));
  for (let menu in menus) {
    if (
      menus[menu].name === menuToChange &&
      menus[menu].quantity >= 1 &&
      money >= menus[menu].price
    ) {
      menus[menu].quantity -= 1;
      money -= menus[menu].price;
    }
  }
  localStorage.setItem('money', money);
  localStorage.setItem('menu', JSON.stringify(menus));
  renderProductPurchaseMenu();
};
