import { COINS } from '../const.js';

const { MissionUtils } = window;

function pickCoin() {
  return MissionUtils.Random.pickNumberInList(COINS);
}

export default pickCoin;
