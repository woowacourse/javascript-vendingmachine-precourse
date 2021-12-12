import Store from '../core/Store.js';
import { CHANGES_ACTION_TYPE } from '../actions/changes.js';
import {
  generateRandomChanges,
  mergeCoins,
  getChangesCoin,
} from '../utils/helpers.js';
import { MESSAGE } from '../utils/constants.js';
import { changeStoreInitialState } from '../utils/initialStates.js';
import { ChangesStorage } from '../storages/index.js';

const initialState = ChangesStorage.get() ?? changeStoreInitialState;

class ChangesStore extends Store {
  setUpReducer() {
    this.reducer = {
      [CHANGES_ACTION_TYPE.CHARGE_CHANGES]: money => {
        const { changes, coins } = this.state;
        this.setState({
          changes: changes + money,
          coins: mergeCoins(coins, generateRandomChanges(money)),
        });
      },
      [CHANGES_ACTION_TYPE.SPEND_CHANGES]: money => {
        const { changes, coins } = this.state;
        if (changes === 0)
          return { SUCCESS: false, error: MESSAGE.NOT_ENOUGH_CHANGES };
        const userChangeMoney = money > changes ? changes : money;
        const { changeCoins, machineCoins } = getChangesCoin(
          userChangeMoney,
          coins
        );
        this.setState({
          changes: changes - userChangeMoney,
          coins: machineCoins,
        });
        return { SUCCESS: true, changeCoins, userChangeMoney };
      },
    };
  }
}

export default new ChangesStore(initialState, ChangesStorage);
