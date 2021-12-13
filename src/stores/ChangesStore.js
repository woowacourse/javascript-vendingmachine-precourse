import Store from '../core/Store.js';
import { CHANGES_ACTION_TYPE } from '../actions/changes.js';
import {
  generateRandomCoins,
  generateChangesCoin,
  mergeCoins,
} from '../utils/helpers/coin.js';
import { MESSAGE, REDUCER_RESULT } from '../utils/constants.js';
import { changeStoreInitialState } from '../utils/initialStates.js';
import { ChangesStorage } from '../storages/index.js';

class ChangesStore extends Store {
  setUpReducer() {
    this.reducer = {
      [CHANGES_ACTION_TYPE.CHARGE_CHANGES]: money => this.chargeChanges(money),
      [CHANGES_ACTION_TYPE.SPEND_CHANGES]: money => this.spendChanges(money),
    };
  }

  chargeChanges(money) {
    const { coins, changes } = this.state;
    this.setState({
      changes: changes + money,
      coins: mergeCoins(coins, generateRandomCoins(money)),
    });
    return REDUCER_RESULT.SUCCESS();
  }

  spendChanges(money) {
    const { changes, coins } = this.state;
    if (money === 0) return REDUCER_RESULT.FAIL(MESSAGE.INVALID_RETURN_REQUEST);
    if (changes === 0) return REDUCER_RESULT.FAIL(MESSAGE.NOT_ENOUGH_CHANGES);

    const userChangeMoney = money > changes ? changes : money;
    const { changeCoins, machineCoins } = generateChangesCoin(
      userChangeMoney,
      coins
    );
    this.setState({
      changes: changes - userChangeMoney,
      coins: machineCoins,
    });
    return REDUCER_RESULT.SUCCESS({ changeCoins, userChangeMoney });
  }
}

export default new ChangesStore(changeStoreInitialState, ChangesStorage);
