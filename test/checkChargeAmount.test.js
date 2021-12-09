import checkChargeAmount from '../src/app/asset/validation/checkChargeAmount.js';

test('checkChargeAmount()', () => {
    expect(checkChargeAmount('')).toBeFalsy();
    expect(checkChargeAmount('abc')).toBeFalsy();
    expect(checkChargeAmount('-1')).toBeFalsy();
    expect(checkChargeAmount(-1)).toBeFalsy();

    expect(checkChargeAmount('1')).toBeTruthy();
    expect(checkChargeAmount(123)).toBeTruthy();
});
