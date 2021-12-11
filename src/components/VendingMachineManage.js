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
import { INPUT_NAME } from '../constants/resources.js';
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
        <h3>자판기 동전 충전하기</h3>
        <form id="${$chargeMachineFormID}">
            <input id="${$vendingMachineChargeInputID}" type="text" name="${INPUT_NAME['CHARGE-MONEY']}" placeholder="자판기가 보유할 금액" />
            <input id="${$vendingMachineChargeButtonID}" type="submit" value="충전하기" />
        </form>
        <p>보유 금액 : <span id="${$vendingMachineChargeAmountID}">${this.machineStatus.totalAmount}</span></p>
        <h3>자판기가 보유한 동전</h3>
        <table>
            <thead><tr><th>동전</th><th>개수</th></tr></thead>
            <tbody>
            <tr>
                <td>500원</td>
                <td id="${$vendingMachineCoin500ID}">${this.machineStatus[500]}개</td>
            </tr>
            <tr>
                <td>100원</td>
                <td id="${$vendingMachineCoin100ID}">${this.machineStatus[100]}개</td>
            </tr>
            <tr>
                <td>50원</td>
                <td id="${$vendingMachineCoin50ID}">${this.machineStatus[50]}개</td>
            </tr>
            <tr>
                <td>10원</td>
                <td id="${$vendingMachineCoin10ID}">${this.machineStatus[10]}개</td>
            </tr>
            </tbody>
        </table>
        `;
    }
}
