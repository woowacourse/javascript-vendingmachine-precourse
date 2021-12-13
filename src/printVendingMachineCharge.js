//자판기 보유금액 출력
export function printVendingMachineChargeAmount(vendingMachineCharge){
    const $vendingMachineChargeAmount = document.querySelector('#vending-machine-charge-amount')
    $vendingMachineChargeAmount.innerHTML = `보유금액: ${vendingMachineCharge.chargeTotal}`
}

//자판기 잔돈 테이블에 출력
export function printVendingMachineChargeTable(vendingMachineCharge){
    const $vendingMachineCoin500Quantity = document.querySelector('#vending-machine-coin-500-quantity')
    const $vendingMachineCoin100Quantity = document.querySelector('#vending-machine-coin-100-quantity')
    const $vendingMachineCoin50Quantity = document.querySelector('#vending-machine-coin-50-quantity')
    const $vendingMachineCoin10Quantity = document.querySelector('#vending-machine-coin-10-quantity')

    $vendingMachineCoin500Quantity.innerHTML = vendingMachineCharge.chargeArray[0]
    $vendingMachineCoin100Quantity.innerHTML = vendingMachineCharge.chargeArray[1]
    $vendingMachineCoin50Quantity.innerHTML = vendingMachineCharge.chargeArray[2]
    $vendingMachineCoin10Quantity.innerHTML = vendingMachineCharge.chargeArray[3]
}