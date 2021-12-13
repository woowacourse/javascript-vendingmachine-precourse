import { VENDING_MACHINE_CHARGE, ERROR_MESSAGE } from './product.js'
import { printVendingMachineChargeAmount, printVendingMachineChargeTable } from './printVendingMachineCharge.js'

let vendingMachineCharge = new VENDING_MACHINE_CHARGE()

function addVENDING_MACHINE_CHARGE(vendingMachineCharge, vendingMachineChargeTotal, chargeArray, randomNumber, i){
    vendingMachineChargeTotal += chargeArray[i]*randomNumber
    vendingMachineCharge.setChargeArray(i, randomNumber)
    
    console.log(chargeArray[i] + ' ' + randomNumber) 
    return vendingMachineChargeTotal      
}



//랜덤잔돈 만들기
function makeRandomCharge($vendingMachineChargeInput, vendingMachineChargeTotal, chargeArray, vendingMachineCharge){
    let i=0        
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
            break;
        }
    }         
}


function makeRandomChargeArray(){
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input')  
    let vendingMachineChargeTotal = 0
    const chargeArray = [500, 100, 50, 10]

    //자판기 보유금액 출력
    printVendingMachineChargeAmount(vendingMachineCharge)

    //랜덤잔돈 만들기
    makeRandomCharge($vendingMachineChargeInput, vendingMachineChargeTotal, chargeArray, vendingMachineCharge)    
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
    return true
}



//입력창 비우기
function emptyVendingMachineChargeInput(){
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input') 
    $vendingMachineChargeInput.value = ''        
}

export function addVendingMachineCharge(){
    //유효성 검사
    if(checkVendingMachineChargeInputValid()){
        const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input') 
        vendingMachineCharge.setChargeTotal($vendingMachineChargeInput.value)
        makeRandomChargeArray()

        //자판기 잔돈 테이블에 추가       
        printVendingMachineChargeTable(vendingMachineCharge)
    }

    //입력창 비우기
    emptyVendingMachineChargeInput()
    return vendingMachineCharge
}