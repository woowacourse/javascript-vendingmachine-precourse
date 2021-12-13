import { initHTML } from './view/show.js';
import {
  bindDisplayEvent,
  moneyChargeButtonEvent,
  productAddButtonEvent,
  VendingMachineChargeButtonEvent,
} from './controller/handlers.js';

const init = () => {
  initHTML();
  bindDisplayEvent();
  productAddButtonEvent();
  VendingMachineChargeButtonEvent();
  moneyChargeButtonEvent();
};
init();
