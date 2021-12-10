import { checkInputAmount } from '../src/app/asset/validation/index.js';

test('checkInputAmount()', () => {
    expect(checkInputAmount('')).toBeFalsy();
    expect(checkInputAmount('abcd')).toBeFalsy();
    expect(checkInputAmount(123)).toBeFalsy();
    expect(checkInputAmount(-10)).toBeFalsy();

    expect(checkInputAmount(10)).toBeTruthy();
    expect(checkInputAmount(100)).toBeTruthy();
    expect(checkInputAmount('110')).toBeTruthy();
});
