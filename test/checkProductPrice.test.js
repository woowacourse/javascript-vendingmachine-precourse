import checkProductPrice from '../src/app/asset/validation/checkProductPrice.js';

test('checkProductPrice()', () => {
    expect(checkProductPrice('')).toBeFalsy();
    expect(checkProductPrice('abcd')).toBeFalsy();
    expect(checkProductPrice(123)).toBeFalsy();
    expect(checkProductPrice(-10)).toBeFalsy();
    expect(checkProductPrice(90)).toBeFalsy();

    expect(checkProductPrice(100)).toBeTruthy();
    expect(checkProductPrice('110')).toBeTruthy();
});
