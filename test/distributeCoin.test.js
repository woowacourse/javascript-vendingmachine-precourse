import { getDistributedCoinRandomly } from '../src/app/asset/util/index.js';
import { COIN } from '../src/app/asset/constants/index.js';

test('getDistributedCoinRandomly()', () => {
    expect(getDistributedCoinRandomly(10)).toEqual([0, 0, 0, 1]);
    expect(getDistributedCoinRandomly(100).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(100);
    expect(getDistributedCoinRandomly(120).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(120);
    expect(getDistributedCoinRandomly(150).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(150);
    expect(getDistributedCoinRandomly(700).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(700);
    expect(getDistributedCoinRandomly(734).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(730);
    expect(getDistributedCoinRandomly(1002).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(1000);
});
