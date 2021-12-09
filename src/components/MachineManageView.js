import { CHANGE, ERROR_MESSAGE, VALUES } from '../utils/constants.js';
import { HTML_OF_MACHINE_MANAGE_PART } from '../utils/html.js';
import MachineManageCheck from './MachineManageCheck.js';

export default class MachineManageView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_MACHINE_MANAGE_PART;
  }

  static addEvent() {
    document.getElementById('vending-machine-charge-button').addEventListener('click', (e) => {
        e.preventDefault();

        const charge = document.getElementById('vending-machine-charge-input').value;


        const machineManageCheck = new MachineManageCheck(charge);
        if(machineManageCheck.checkAll()) {
            this.addChange(charge);
        } else {
            alert(ERROR_MESSAGE);
        }
        
    });
  }

  static addChange(charge) {
      const change = JSON.parse(localStorage.getItem(CHANGE));

      if(localStorage.getItem(CHANGE) === null) {
          localStorage.setItem(CHANGE, JSON.stringify({values: charge}));
          this.showFirstChange(charge);
      } else {
          change[VALUES] = parseInt(change[VALUES]) + parseInt(charge);
          localStorage.setItem(CHANGE, JSON.stringify(change));
          this.showChange(change);
      }
  }

  static showFirstChange(charge) {
    document.getElementById('vending-machine-charge-amount').innerHTML = charge;
  }

  static showChange(change) {
    document.getElementById('vending-machine-charge-amount').innerHTML = change[VALUES];
  }
}
