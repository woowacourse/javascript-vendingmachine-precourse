import $ from '../utils/dom.js';
import store from '../utils/store.js';

const renderHoldAmount = () => {
  $('#charge-amount').innerHTML = store.getLocalStorage('holdAmount');
};

export default renderHoldAmount;
