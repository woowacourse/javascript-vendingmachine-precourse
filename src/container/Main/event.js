import { clearInput, getChildInput, isEmpty, isEquals } from '../../common/helper.js';
import { hasChangesCoin, isValidateInput, purchaseValidate } from '../../common/validations.js';
import {
  CHARGE_AMOUNT,
  MACHINE_MANAGE,
  PRODUCT_ADD,
  PURCHASE_MENU,
} from '../../constants/index.js';
import { createMachineManage, getMachineManage } from './machineManage.js';
import { createAddProduct } from './productAdd.js';
import { applyProduct, coinExchange, createPurchaseMenu, getPurchaseMenu } from './purchaseMenu.js';

/**
 * Storage에 수정된 아이템을 반영합니다.
 */
const setStorage = {
  [PRODUCT_ADD]: (storage, elements) => createAddProduct(storage, elements),
  [MACHINE_MANAGE]: (storage, elements, item) => createMachineManage(storage, elements, item),
  [PURCHASE_MENU]: (storage, elements, item) => createPurchaseMenu(storage, elements, item),
};

/**
 * 상품 등록, 잔돈 충전, 금액 투입 이벤트를 설정합니다.
 *
 * @param {MouseEvent: Click} event
 * @returns
 */
export function formButtonEvent(event) {
  event.preventDefault();
  if (!event.target.matches('form button')) return;

  const storageItem = this.$storage.read(this.$props.component);
  const targetInputs = getChildInput('form');
  const checkedInputs = isValidateInput(targetInputs, storageItem);

  if (!isEquals(checkedInputs.length, targetInputs.length)) return clearInput(targetInputs);

  setStorage[this.$props.component](this.$storage, checkedInputs, storageItem);

  clearInput(targetInputs);
}

/**
 * 상품 구매하기 이벤트를 설정합니다.
 *
 * @param {MouseEvent: HTMLButtonElement} event
 * @returns
 */
export function tableButtonEvent({ target }) {
  if (!target.matches('.purchase-button')) return;

  const purchaseMenu = getPurchaseMenu(this.$storage);
  const { name, quantity, product, changes } = applyProduct(target, purchaseMenu);

  if (!purchaseValidate({ quantity, changes }, name)) return;

  this.$storage.produce(
    { [PRODUCT_ADD]: product },
    {
      [PURCHASE_MENU]: {
        ...purchaseMenu,
        [PRODUCT_ADD]: product,
        [CHARGE_AMOUNT]: changes,
      },
    },
  );
}

/**
 * 잔돈 반환하기 이벤트
 *
 * @param {MouseEvent: HTMLButtonElement} event
 * @returns
 */
export function divButtonEvent({ target }) {
  if (!target.matches('#coin-return-button')) return;
  const purchaseMenu = getPurchaseMenu(this.$storage);
  const [machineChanges, changes, leftChanges] = coinExchange(
    purchaseMenu[CHARGE_AMOUNT],
    getMachineManage(this.$storage),
  );

  if (isEmpty(hasChangesCoin(changes))) return;

  this.$storage.produce(
    { [MACHINE_MANAGE]: machineChanges },
    {
      [PURCHASE_MENU]: {
        ...purchaseMenu,
        [MACHINE_MANAGE]: changes,
        [CHARGE_AMOUNT]: leftChanges,
      },
    },
  );
}
