import { getDistributedCoinGreedily } from '../src/app/asset/util/index.js';

test('getDistributedCoinGreedily()', () => {
    expect(getDistributedCoinGreedily(1000, [2, 0, 0, 0])).toEqual([2, 0, 0, 0]);
    expect(getDistributedCoinGreedily(1280, [2, 0, 0, 0])).toEqual([2, 0, 0, 0]);
    expect(getDistributedCoinGreedily(1600, [5, 4, 0, 0])).toEqual([3, 1, 0, 0]);
    expect(getDistributedCoinGreedily(1000, [1, 5, 4, 0])).toEqual([1, 5, 0, 0]);
    expect(getDistributedCoinGreedily(1000, [1, 3, 1, 0])).toEqual([1, 3, 1, 0]);
    expect(getDistributedCoinGreedily(1000, [0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    expect(getDistributedCoinGreedily(1000, [0, 0, 10, 50])).toEqual([0, 0, 10, 50]);
    expect(getDistributedCoinGreedily(500, [0, 5, 5, 0])).toEqual([0, 5, 0, 0]);
    expect(getDistributedCoinGreedily(7770, [10, 27, 1, 2])).toEqual([10, 27, 1, 2]);
    expect(getDistributedCoinGreedily(7770, [10, 17, 1, 2])).toEqual([10, 17, 1, 2]);
});