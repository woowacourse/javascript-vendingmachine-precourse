import COIN from '../constants/COIN.js';

const getPickList = (amount) =>
    COIN.map((coin, idx) => [coin, idx])
        .filter((coinInfo) => amount >= coinInfo[0])
        .map((coinInfo) => coinInfo[1]);

const distributeCoin = (amount) => {
    let chargeAmount = amount;
    const ret = Array(COIN.length).fill(0);

    while (chargeAmount >= COIN[COIN.length - 1]) {
        const randIdx = MissionUtils.Random.pickNumberInList(getPickList(chargeAmount));
        ret[randIdx] += 1;
        chargeAmount -= COIN[randIdx];
    }

    return ret;
};

export default distributeCoin;
