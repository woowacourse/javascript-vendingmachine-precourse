import { productAddEvent } from './productAddEvent.mjs';
import { vendingMachineManageEvent } from './vendingMachineManageEvent.mjs';
import { productPurchaseEvent } from './productPurchaseEvent.mjs';

export function controller() {
  productAddEvent();
  vendingMachineManageEvent();
  productPurchaseEvent();
}
