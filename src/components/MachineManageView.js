import { CHANGE, ERROR_MESSAGE } from '../utils/constants.js';
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
            document.getElementById('vending-machine-charge-amount').innerHTML = charge;
        } else {
            alert(ERROR_MESSAGE);
        }
        
    });
  }

  static addChange(charge) {
      const change = JSON.parse(localStorage.getItem(CHANGE));

      if(localStorage.getItem(CHANGE) === null) {
          localStorage.setItem(CHANGE, JSON.stringify({[CHANGE]: charge}));
      } else {
          change[CHANGE] = charge;
          localStorage.setItem(CHANGE, JSON.stringify(change));
      }
  }
}
