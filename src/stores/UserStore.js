import Store from '../core/Store.js';
import { USER_ACTION_TYPE } from '../actions/user.js';
import { userStoreInitialState } from '../utils/initialStates.js';
import { UserStorage } from '../storages/index.js';
import { REDUCER_RESULT } from '../utils/constants.js';

class UserStore extends Store {
  setUpReducer() {
    this.reducer = {
      [USER_ACTION_TYPE.CHARGE_MONEY]: money => this.chargeMoney(money),
      [USER_ACTION_TYPE.SPEND_MONEY]: money => this.spendMoney(money),
      [USER_ACTION_TYPE.RETURN_CHANGES]: data => this.returnChanges(data),
    };
  }

  chargeMoney(money) {
    this.setState({ chargedMoney: this.state.chargedMoney + money });
    return REDUCER_RESULT.SUCCESS();
  }

  spendMoney(money) {
    this.setState({ chargedMoney: this.state.chargedMoney - money });
    return REDUCER_RESULT.SUCCESS();
  }

  returnChanges({ changes, changeCoins }) {
    this.setState({
      coins: changeCoins,
      chargedMoney: this.state.chargedMoney - changes,
    });
    return REDUCER_RESULT.SUCCESS();
  }
}

export default new UserStore(userStoreInitialState, UserStorage);