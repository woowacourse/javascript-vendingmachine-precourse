import { VENDING_MACHINE_CHARGE, ERROR_MESSAGE } from './product.js'

let vendingMachineCharge = new VENDING_MACHINE_CHARGE()

function addVENDING_MACHINE_CHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, randomNumber, i){
    vendingMachineChargeTotal += chargeArray[i]*randomNumber
    vendingMachineCharge.setChargeArray(i, randomNumber)
    console.log(chargeArray[i] + ' ' + randomNumber) 
    return vendingMachineChargeTotal      
}

function makeRandomCharge(){
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input')  
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, Number($vendingMachineChargeInput.value));

    let vendingMachineChargeTotal = 0
    const chargeArray = [500, 100, 50, 10]
    let i=0
    
    //보유금액 출력
    vendingMachineCharge.setChargeTotal($vendingMachineChargeInput.value)
    const $vendingMachineChargeAmount = document.querySelector('#vending-machine-charge-amount')
    $vendingMachineChargeAmount.innerHTML = `보유금액: ${vendingMachineCharge.chargeTotal}`

    //랜덤잔돈 만들기
    while(true){
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, Number($vendingMachineChargeInput.value));
        if(vendingMachineChargeTotal+(chargeArray[i]*randomNumber) < $vendingMachineChargeInput.value){
            vendingMachineChargeTotal = addVENDING_MACHINE_CHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, randomNumber, i)
            i++
        }
        if(i===3){
            vendingMachineChargeTotal = addVENDING_MACHINE_CHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, ($vendingMachineChargeInput.value-vendingMachineChargeTotal)/10, i)
            i++
        }
        if(i>3){
            console.log(vendingMachineChargeTotal) 
            break;
        }

    }        
}

//잔돈 입력값 유효성 검사
function checkVendingMachineChargeInputValid(){
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input')  
    if($vendingMachineChargeInput.value === ''){
        alert(ERROR_MESSAGE.BLANK_ERROR)
        return false
    }        
    else if($vendingMachineChargeInput.value<=0 || $vendingMachineChargeInput.value%10!==0){
        alert(ERROR_MESSAGE.VENDING_MACHINE_CHARGE_INPUT_NUMBER_ERROR)
        return false
    }
    console.log($vendingMachineChargeInput.value)
    return true
}

export function addVendingMachineCharge(){


    
    if(checkVendingMachineChargeInputValid()){
        makeRandomCharge()

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
    
    }

    //입력창 비우기
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input') 
    $vendingMachineChargeInput.value = ''




}