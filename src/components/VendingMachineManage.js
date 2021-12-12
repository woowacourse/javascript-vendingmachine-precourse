import { domSelector, getRandomCoint, setErrorStatus } from '../common/index.js';
import { isDivisibleTen, isPositiveNumber } from '../common/validation.js';
import {
    $chargeMachineFormID,
    $vendingMachineChargeAmountID,
    $vendingMachineChargeButtonID,
    $vendingMachineChargeInputID,
    $vendingMachineCoin100ID,
    $vendingMachineCoin10ID,
    $vendingMachineCoin500ID,
    $vendingMachineCoin50ID,
} from '../constants/domSelectors.js';
import { INPUT_NAME, MACHINE_MANAGE } from '../constants/resources.js';
import Component from '../interface/Component.js';

export default class VendingMachineManage extends Component {
    setup() {
        this.machineStatus = this.getState((state) => state.vendingMachineStatus);
    }

    mount() {
        this.setEvent();
    }

    setEvent() {
        domSelector(`#${$chargeMachineFormID}`).addEventListener('submit', this.onButtonClick.bind(this));
    }

    onButtonClick(ev) {
        ev.preventDefault();
        const charge = ev.target[INPUT_NAME['CHARGE-MONEY']].value;
        if (!isPositiveNumber(charge) || !isDivisibleTen(charge)) {
            setErrorStatus('VENDING-MACHINE-CHARGE-INPUT-ERROR');
            return;
        }

        const randomCoinCount = getRandomCoint(charge);
        this.machineStatus.totalAmount += Number(charge);
        Object.keys(randomCoinCount).forEach((coin) => {
            this.machineStatus[coin] += randomCoinCount[coin];
        });
        this.setState('vendingMachineStatus', this.machineStatus);
    }

    template() {
        return `
        <h3>${MACHINE_MANAGE.HEAD}</h3>
        <form id="${$chargeMachineFormID}">
            <input id="${$vendingMachineChargeInputID}" type="text" name="${INPUT_NAME['CHARGE-MONEY']}" placeholder="${
            MACHINE_MANAGE.PLACEHOLDER
        }" />
            <input id="${$vendingMachineChargeButtonID}" type="submit" value="${MACHINE_MANAGE.BUTTON}" />
        </form>
        <p>${MACHINE_MANAGE.STATUS.TOTAL} : <span id="${$vendingMachineChargeAmountID}">${
            this.machineStatus.totalAmount
        }</span></p>
        <h3>${MACHINE_MANAGE.STATUS.COIN}</h3>
        <table>
            <thead><tr>${MACHINE_MANAGE.COLUMNS.map((column) => `<th>${column}</th>`).join('')}</tr></thead>
            <tbody>
            <tr>
                <td>${MACHINE_MANAGE.ROWHEAD[0]}</td>
                <td id="${$vendingMachineCoin500ID}">${this.machineStatus[500]}개</td>
            </tr>
            <tr>
                <td>${MACHINE_MANAGE.ROWHEAD[1]}</td>
                <td id="${$vendingMachineCoin100ID}">${this.machineStatus[100]}개</td>
            </tr>
            <tr>
                <td>${MACHINE_MANAGE.ROWHEAD[2]}</td>
                <td id="${$vendingMachineCoin50ID}">${this.machineStatus[50]}개</td>
            </tr>
            <tr>
                <td>${MACHINE_MANAGE.ROWHEAD[3]}</td>
                <td id="${$vendingMachineCoin10ID}">${this.machineStatus[10]}개</td>
            </tr>
            </tbody>
        </table>
        `;
    }
}
