import $ from '../utils/dom.js';

const printInputCharge = amount => {
  $('#charge-amount').innerText = amount;
};

export default printInputCharge;
