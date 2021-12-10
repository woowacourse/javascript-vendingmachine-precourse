import {
  $productAdd, $vendingMachine, $purchaseMenue, $productPurchaseMenu, $vendingMachineManageMenu, $productAddMenu,
} from './htmlConst.js';

export default function VendingMachine() {
  $productAddMenu.addEventListener('click', (e) => {
    e.preventDefault();
    $productAdd.style.display = '';
    $vendingMachine.style.display = 'none';
    $purchaseMenue.style.display = 'none';
  });
  $vendingMachineManageMenu.addEventListener('click', (e) => {
    e.preventDefault();
    $productAdd.style.display = 'none';
    $vendingMachine.style.display = '';
    $purchaseMenue.style.display = 'none';
  });
  $productPurchaseMenu.addEventListener('click', (e) => {
    e.preventDefault();
    $productAdd.style.display = 'none';
    $vendingMachine.style.display = 'none';
    $purchaseMenue.style.display = '';
  });
}
VendingMachine();
