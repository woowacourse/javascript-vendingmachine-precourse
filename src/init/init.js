import productAddInit from './productAddInit.js';
import productPurchaseInit from './productPurchaseInit.js';
import tapBtnInit from './tapBtnInit.js';
import vendingMachineInit from './vendingMachineInit.js';

export default function init() {
  tapBtnInit();
  productAddInit();
  vendingMachineInit();
  productPurchaseInit();
}
