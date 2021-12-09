import checkProductName from '../src/app/asset/validation/checkProductName.js';

test('checkProductName()', () => {
    expect(checkProductName('')).toBeFalsy();

    expect(checkProductName('abc')).toBeTruthy();
    expect(checkProductName('1')).toBeTruthy();
    expect(checkProductName(123)).toBeTruthy();
});
