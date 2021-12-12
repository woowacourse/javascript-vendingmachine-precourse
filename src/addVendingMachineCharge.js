import { CHARGE } from './product.js'

let vendingMachineCharge = new CHARGE()

function addCHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, randomNumber, i){
    vendingMachineChargeTotal += chargeArray[i]*randomNumber
    vendingMachineCharge.setChargeArray(i, randomNumber)
    console.log(chargeArray[i] + ' ' + randomNumber) 
    return vendingMachineChargeTotal      
}


export function addVendingMachineCharge(){
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input')
    let vendingMachineChargeTotal = 0
    const chargeArray = [500, 100, 50, 10]
    let i=0

    while(true){
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, Number($vendingMachineChargeInput.value));
        if(vendingMachineChargeTotal+(chargeArray[i]*randomNumber) < $vendingMachineChargeInput.value){
            vendingMachineChargeTotal = addCHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, randomNumber, i)
            i++
        }
        if(i===3){
            vendingMachineChargeTotal = addCHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, ($vendingMachineChargeInput.value-vendingMachineChargeTotal)/10, i)
            i++
        }
        if(i>3){
            console.log(vendingMachineChargeTotal) 
            break;
        }

    }
            vendingMachineCharge.getName()


            //html에 출력
            const $vendingMachineCoin500Quantity = document.querySelector('#vending-machine-coin-500-quantity')
            const $vendingMachineCoin100Quantity = document.querySelector('#vending-machine-coin-100-quantity')
            const $vendingMachineCoin50Quantity = document.querySelector('#vending-machine-coin-50-quantity')
            const $vendingMachineCoin10Quantity = document.querySelector('#vending-machine-coin-10-quantity')

            $vendingMachineCoin500Quantity.innerHTML = vendingMachineCharge.chargeArray[0]
            $vendingMachineCoin100Quantity.innerHTML = vendingMachineCharge.chargeArray[1]
            $vendingMachineCoin50Quantity.innerHTML = vendingMachineCharge.chargeArray[2]
            $vendingMachineCoin10Quantity.innerHTML = vendingMachineCharge.chargeArray[3]

            console.log('끝')

}