import { checkProductName } from '../src/app/asset/validation/index.js';

test('checkProductName()', () => {
    expect(checkProductName('')).toBeFalsy();

    expect(checkProductName('abc')).toBeTruthy();
    expect(checkProductName('1')).toBeTruthy();
    expect(checkProductName(123)).toBeTruthy();
});
