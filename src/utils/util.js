import MenuBtnHandler from '../handler/MenuBtnHandler.js';
import ProductAddUtil from './ProductAddUtil.js';
import VendingMachineUtil from './VendingMachineUtil.js';
import ProductPurchaseUtil from './ProductPurchaseUtil.js';

export default function util() {
  new MenuBtnHandler();
  new ProductAddUtil();
  new VendingMachineUtil();
  new ProductPurchaseUtil();
}
