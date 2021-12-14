import { initScreen } from './view/init/initScreen.js';
import { vendingMachineMenuEvent } from './components/menu.js';

export default function vendingMachineApp() {
  initScreen();
  vendingMachineMenuEvent();
}

window.addEventListener('DOMContentLoaded', () => {
  vendingMachineApp();
});
