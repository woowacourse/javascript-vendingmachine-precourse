import Coin from "./Coin.js";

export default class UserCoin extends Coin {
  constructor() {
    super();
    console.log(`userCoin class`);
  }
}
