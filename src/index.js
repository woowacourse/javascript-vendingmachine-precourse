import productManage from './productManage.js';
export default function vendingMachine() {
  const appBox = document.querySelector('#app');
  appBox.innerHTML = productManage();
}
new vendingMachine();
