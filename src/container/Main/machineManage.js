import { isEquals, roundDown } from '../../common/helper.js';
import { CHARGE_UNIT, MACHINE_MANAGE, ZERO } from '../../constants/index.js';

/* eslint-disable no-undef */
const { pickNumberInList } = MissionUtils.Random;

export const getMachineManage = storage => storage.read(MACHINE_MANAGE);

/**
 * 잔돈 충전 시 해당 코인의 개수를 증가시킵니다.
 *
 * @param {number} charge
 * @param {number} unit
 * @param {object[]} item
 * @returns
 */
const getParsedCharges = (charge, unit, item) => [
  charge,
  item.map(({ description, count }) => {
    if (isEquals(description, unit)) return { description, count: count + 1 };
    return { description, count };
  }),
];

/**
 * 잔돈 충전 탭: 자판기에 잔돈을 충전합니다.
 *
 * @param {object} storageItem
 * @param {HTMLInputElement} element
 * @returns
 */
const charging = (storageItem, element) => {
  let items = [...storageItem];
  const [{ value }] = element;
  let parsed = roundDown(value);
  while (parsed > ZERO) {
    const pickUnit = pickNumberInList(CHARGE_UNIT);
    const restCharge = parsed - pickUnit;
    if (restCharge >= ZERO) [parsed, items] = getParsedCharges(restCharge, pickUnit, items);
  }
  return items;
};

export const createMachineManage = (storage, elements, item) =>
  storage.create(MACHINE_MANAGE, charging(item, elements));
