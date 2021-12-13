import { VENDING_MACHINE_CHARGE, ERROR_MESSAGE, GAME } from './product.js'
import { printVendingMachineChargeAmount, printVendingMachineChargeTable } from './printVendingMachineCharge.js'


function addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, coinAmount, i){
    vendingMachineChargeSum += GAME.COIN_ARRAY[i] * coinAmount
    GAME.VENDING_MACHINE_CHARGE_ARRAY[i] = coinAmount

    return vendingMachineChargeSum
}



//랜덤잔돈 만들기
function makeRandomCharge($vendingMachineChargeInput){
    let i=0
    let vendingMachineChargeSum = 0
    while(true){
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, Number($vendingMachineChargeInput.value));
        if(vendingMachineChargeSum+(GAME.COIN_ARRAY[i]*randomNumber) < $vendingMachineChargeInput.value){
            vendingMachineChargeSum = addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, randomNumber, i)
            i++
            console.log('클릭')
        }
        if(i===3){
            vendingMachineChargeSum = addVENDING_MACHINE_CHARGE(vendingMachineChargeSum, ($vendingMachineChargeInput.value-vendingMachineChargeSum)/10, i)
            i++
            console.log('클릭')
        }
        if(i>3){
            break;
        }
    }         
}


function makeRandomChargeArray(){
    const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input')  
    //자판기 보유금액 출력
    printVendingMachineChargeAmount()
    //랜덤잔돈 만들기
    makeRandomCharge($vendingMachineChargeInput)  
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
    console.log('클릭')
    //유효성 검사
    if(checkVendingMachineChargeInputValid()){
        const $vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input')
        GAME.VENDING_MACHINE_CHARGE_TOTAL += Number($vendingMachineChargeInput.value)
        makeRandomChargeArray()

        //자판기 잔돈 테이블에 추가       
        printVendingMachineChargeTable()
    }

    //입력창 비우기
    emptyVendingMachineChargeInput()
}