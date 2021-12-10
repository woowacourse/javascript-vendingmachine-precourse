import { checkProductQuantity } from '../src/app/asset/validation/index.js';

test('checkProductQuantity()', () => {
    expect(checkProductQuantity('')).toBeFalsy();
    expect(checkProductQuantity('abc')).toBeFalsy();
    expect(checkProductQuantity('-1')).toBeFalsy();
    expect(checkProductQuantity(-1)).toBeFalsy();

    expect(checkProductQuantity('1')).toBeTruthy();
    expect(checkProductQuantity(123)).toBeTruthy();
});
