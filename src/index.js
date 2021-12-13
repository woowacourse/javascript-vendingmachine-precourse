import manageTabButtons from './manageTabButtons.js';

import tabButtons from './tabButtons.js';
export default function vendingMachine() {
  const appBox = document.querySelector('#app');
  const tabItems = document.createElement('div');
  tabItems.setAttribute('id', 'tabItems');
  appBox.innerHTML = tabButtons();
  appBox.appendChild(tabItems);
  manageTabButtons();
}
new vendingMachine();
