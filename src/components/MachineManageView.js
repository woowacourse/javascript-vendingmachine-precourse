import { HTML_OF_MACHINE_MANAGE_PART } from '../utils/html.js';

export default class MachineManageView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_MACHINE_MANAGE_PART;
  }

  static addEvent() {
    document.getElementById('vending-machine-charge-button').addEventListener('click', (e) => {
        e.preventDefault();

        const charge = document.getElementById('vending-machine-charge-input').value;

        // 따로 함수로 분리
        document.getElementById('vending-machine-charge-amount').innerHTML = charge;
        console.log(charge);
        
    });
  }
}
