import Store from '../core/Store.js';
import { USER_ACTION_TYPE } from '../actions/user.js';
import { convertArrayToObjectKeys } from '../utils/general.js';
import { COIN_UNITS } from '../utils/constants.js';

const initialState = {
  chargedMoney: 0,
  coins: convertArrayToObjectKeys(COIN_UNITS),
};

class UserStore extends Store {
  setUpReducer() {
    this.reducer = {
      [USER_ACTION_TYPE.CHARGE_MONEY]: money => {
        this.setState({ chargedMoney: this.state.chargedMoney + money });
      },
      [USER_ACTION_TYPE.SPEND_MONEY]: money => {
        this.setState({ chargedMoney: this.state.chargedMoney - money });
      },
      [USER_ACTION_TYPE.RETURN_CHANGES]: ({ change, coins }) => {
        this.setState({
          coins,
          chargedMoney: change,
        });
      },
    };
  }
}

export default new UserStore(initialState);
