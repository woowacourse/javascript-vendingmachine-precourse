import { CUSTOMER_CHARGE } from './product.js'


const customerCharge = new CUSTOMER_CHARGE()


export function purchaseProduct(PRODUCTS, vendingMachineCharge){
    //TO DO : 입력금액 예외처리(살수있는거 없으면 입력못하게 하기)

    //CUSTOMER_CHARGE 객체에 넣기
    const $chargeInput = document.querySelector('#charge-input')
    customerCharge.setCustomerChargeTotal($chargeInput.value)
    console.log(customerCharge.customerChargeTotal)

    //투입한 금액에 출력
    const $chargeAmount = document.querySelector('#charge-amount')
    $chargeAmount.innerHTML = `투입한 금액: ${customerCharge.customerChargeTotal}`

    //입력창 비우기
    $chargeInput.value = '' 

    //TO DO : 구매버튼 클릭시
    const $productPurchaseTable = document.querySelector('#product-purchase-table')
    $productPurchaseTable.addEventListener('click',function(e){
        console.log(PRODUCTS)
        if(e.target.tagName === 'BUTTON'){
            //PRODUCT 클래스에서 수량 빼기
            const productName = e.target.dataset.productName
            let selectedProduct = ''
            for(let product of PRODUCTS){
                if(product.name === productName){
                    selectedProduct =  product
                }
            }
            console.log(selectedProduct.name)
            console.log(selectedProduct.quantity)
            selectedProduct.purchase()
            const $productPurchaseQuantity = document.querySelector(`td[data-product-quantity="${selectedProduct.name}"]`)
            $productPurchaseQuantity.innerHTML = selectedProduct.quantity

            //TO DO : 수량 0되면 클래스 삭제

            //TO DO : CUSTOMER_CHARGE 클래스에서 금액빼기
            customerCharge.purchase(selectedProduct.price)
            console.log(customerCharge.customerChargeTotal)
                //투입한 금액에 출력
                const $chargeAmount = document.querySelector('#charge-amount')
                $chargeAmount.innerHTML = `투입한 금액: ${customerCharge.customerChargeTotal}`

        }
    })



    //TO DO : 반환하기 클릭시
    const $coninReturnButton = document.querySelector('#coin-return-button')
    $coninReturnButton.addEventListener('click',()=>{
        console.log('소비자돈 '+ customerCharge.customerChargeTotal)
        console.log(vendingMachineCharge.chargeArray)
            //TO DO : 큰 동전부터 계산하여 CUSTOMER_CHARGE 클래스에 넣기
            let coin = [500,100,50,10]
            let coinAmount = 0
            for(let i in vendingMachineCharge.chargeArray){
                // if(i===3){
                //     coinAmount = customerCharge.customerChargeTotal/coin[i]
                //     customerCharge.setCustomerChargeArray(i, coinAmount)
                //     customerCharge.purchase(Number(coin[i]) * coinAmount)
                //     vendingMachineCharge.useChargeArray(i, coinAmount)


                //      //customerCharge.customerChargeTotal/coin[i]
                // }
                if(coin[i] * Number(vendingMachineCharge.chargeArray[i]) <= Number(customerCharge.customerChargeTotal)){
                    console.log('if')
                    coinAmount = Number(vendingMachineCharge.chargeArray[i])
                    customerCharge.setCustomerChargeArray(i, coinAmount)
                    customerCharge.purchase(Number(coin[i]) * coinAmount)
                    vendingMachineCharge.useChargeArray(i, coinAmount)
                                //투입한 금액에 출력
                                const $chargeAmount = document.querySelector('#charge-amount')
                                $chargeAmount.innerHTML = `투입한 금액: ${customerCharge.customerChargeTotal}`
                }
                //else{
                else if(coin[i] * vendingMachineCharge.chargeArray[i] > customerCharge.customerChargeTotal){
                    console.log('else')
                    coinAmount = parseInt(customerCharge.customerChargeTotal/Number(coin[i]))              
                    customerCharge.setCustomerChargeArray(i, coinAmount)
                    //console.log(customerCharge.customerChargeArray)
                    //console.log(Number(customerCharge.customerChargeTotal))
                    //console.log(coin[i])
                    //console.log(Number(coin[i]))
                    //console.log('자판기에 소요된 돈 :'+coin[i]+'를 '+customerCharge.customerChargeTotal/Number(coin[i]))
                    console.log('자판기에 소요된 돈 :'+coin[i]+'를 '+coinAmount)
                    //console.log(Number(customerCharge.customerChargeTotal)%Number(coin[i]))
                    customerCharge.purchase(coin[i] * parseInt(customerCharge.customerChargeTotal/coin[i]))
                    //console.log(customerCharge.customerChargeTotal)
                    //console.log(coin[i])
                    //console.log(parseInt(customerCharge.customerChargeTotal/coin[i]))

                    vendingMachineCharge.useChargeArray(i, coinAmount)
                                //투입한 금액에 출력
                                const $chargeAmount = document.querySelector('#charge-amount')
                                $chargeAmount.innerHTML = `투입한 금액: ${customerCharge.customerChargeTotal}`
                }
                console.log(customerCharge.customerChargeArray)
                console.log(vendingMachineCharge.chargeArray)  
                console.log(customerCharge.customerChargeTotal)
         
            }

            //반환된 동전 갯수 출력  
            const $coin500Quantity = document.querySelector('.coin-500-quantity')
            const $coin100Quantity = document.querySelector('.coin-100-quantity')
            const $coin50Quantity = document.querySelector('.coin-50-quantity')
            const $coin10Quantity = document.querySelector('.coin-10-quantity')

            $coin500Quantity.innerHTML = customerCharge.customerChargeArray[0]
            $coin100Quantity.innerHTML = customerCharge.customerChargeArray[1]
            $coin50Quantity.innerHTML = customerCharge.customerChargeArray[2]
            $coin10Quantity.innerHTML = customerCharge.customerChargeArray[3]
                //customerCharge.CustomerChargeArray()  
           
       
            //TO DO : 잔돈 충전탭 reset
    })


       
}