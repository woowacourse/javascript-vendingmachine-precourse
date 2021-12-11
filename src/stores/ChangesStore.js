import Store from '../core/Store.js';
import { CHANGES_ACTION_TYPE } from '../actions/changes.js';
import { createRandomChanges, mergeCoins } from '../utils/helpers.js';
import { convertArrayToObjectKeys } from '../utils/general.js';
import { COIN_UNITS } from '../utils/constants.js';

const initialState = {
  changes: 0,
  coins: convertArrayToObjectKeys(COIN_UNITS),
};

class ChangesStore extends Store {
  setUpReducer() {
    this.reducer = {
      [CHANGES_ACTION_TYPE.CHARGE_CHANGES]: money => {
        const { changes, coins } = this.state;
        this.setState({
          changes: changes + money,
          coins: mergeCoins(coins, createRandomChanges(money)),
        });
      },
    };
  }
}

export default new ChangesStore(initialState);
