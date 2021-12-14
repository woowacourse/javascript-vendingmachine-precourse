import { $ } from './utils/querySelector.js';
import { initScreenTemplate } from './utils/initScreenTemplate.js';
import { vendingMachineMenuEvent } from './components/menu.js';

const initScreen = () => {
  document.head.innerHTML += `<link rel="stylesheet" href="src/css/index.css">`;
  $('#app').innerHTML = initScreenTemplate;
};

export default function vendingMachineApp() {
  initScreen();
  vendingMachineMenuEvent();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
