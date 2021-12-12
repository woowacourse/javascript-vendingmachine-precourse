import { CUSTOMER_CHARGE } from './product.js'


const customerChargeClass = new CUSTOMER_CHARGE()


export function purchaseProduct(PRODUCTS){
    //TO DO : 입력금액 예외처리(살수있는거 없으면 입력못하게 하기)

    //CUSTOMER_CHARGE 객체에 넣기
    const $chargeInput = document.querySelector('#charge-input')
    customerChargeClass.setCustomerChargeTotal($chargeInput.value)
    console.log(customerChargeClass.customerChargeTotal)

    //투입한 금액에 출력
    const $chargeAmount = document.querySelector('#charge-amount')
    $chargeAmount.innerHTML = `투입한 금액: ${customerChargeClass.customerChargeTotal}`

    //입력창 비우기
    $chargeInput.value = '' 

    //TO DO : 구매버튼 클릭시
    const $productPurchaseTable = document.querySelector('#product-purchase-table')
    $productPurchaseTable.addEventListener('click',function(e){
        console.log(PRODUCTS)
        if(e.target.tagName === 'BUTTON'){
            //TO DO : PRODUCT 클래스에서 수량 빼기
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
            //TO DO : 투입한 금액에 출력
        }
    })

        //TO DO : PRODUCT 클래스에서 수량 빼기
            //TO DO : 수량 0되면 클래스 삭제
        //TO DO : CUSTOMER_CHARGE 클래스에서 금액빼기
        //TO DO : 투입한 금액에 출력



    //TO DO : 반환하기 클릭시
        //TO DO : 큰 동전부터 계산하여 CUSTOMER_CHARGE 클래스에 넣기
        //TO DO : 투입한 금액 출력
        //TO DO : 반환된 동전 갯수 출력

       
}