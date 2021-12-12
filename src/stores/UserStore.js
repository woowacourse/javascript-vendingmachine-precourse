import Store from '../core/Store.js';
import { USER_ACTION_TYPE } from '../actions/user.js';
import { mergeCoins } from '../utils/helpers/coin.js';
import { userStoreInitialState } from '../utils/initialStates.js';
import { UserStorage } from '../storages/index.js';
import { REDUCER_RESULT } from '../utils/constants.js';

const initialState = UserStorage.get() ?? userStoreInitialState;

class UserStore extends Store {
  setUpReducer() {
    this.reducer = {
      [USER_ACTION_TYPE.CHARGE_MONEY]: money => {
        this.setState({ chargedMoney: this.state.chargedMoney + money });
        return REDUCER_RESULT.SUCCESS();
      },
      [USER_ACTION_TYPE.SPEND_MONEY]: money => {
        this.setState({ chargedMoney: this.state.chargedMoney - money });
        return REDUCER_RESULT.SUCCESS();
      },
      [USER_ACTION_TYPE.RETURN_CHANGES]: ({ changes, changeCoins }) => {
        const { chargedMoney, coins } = this.state;
        this.setState({
          coins: mergeCoins(coins, changeCoins),
          chargedMoney: chargedMoney - changes,
        });
        return REDUCER_RESULT.SUCCESS();
      },
    };
  }
}

export default new UserStore(initialState, UserStorage);
