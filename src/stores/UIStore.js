import Store from '../core/Store.js';
import { MENU } from '../utils/constants.js';
import { ACTIONS } from '../actions/UI.js';

const initialState = {
  VISITING_MENU: MENU.PRODUCT_PURCHASE,
};

class UIStore extends Store {
  setUpReducer() {
    this.reducer = {
      [ACTIONS.SWITCH_MENU]: ({ data }) => {
        this.setState({ VISITING_MENU: data });
      },
    };
  }
}

export default new UIStore(initialState);
