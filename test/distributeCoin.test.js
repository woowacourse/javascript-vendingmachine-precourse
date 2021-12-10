import distributeCoin from '../src/app/asset/util/distributeCoin.js';
import { COIN } from '../src/app/asset/constants/index.js';

test('distributeCoin()', () => {
    expect(distributeCoin(10)).toEqual([0, 0, 0, 1]);
    expect(distributeCoin(100).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(100);
    expect(distributeCoin(120).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(120);
    expect(distributeCoin(150).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(150);
    expect(distributeCoin(700).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(700);
    expect(distributeCoin(734).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(730);
    expect(distributeCoin(1002).reduce((m, v, i) => m + v * COIN[i], 0)).toEqual(1000);
});
