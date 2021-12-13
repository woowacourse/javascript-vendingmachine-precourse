import { PRODUCT } from './product.js'
import { checkProductValid } from './checkProductValid.js'
import { makeProduct } from './makeProduct.js'
import { addProductAddTable, addProductPurchaseTable } from './addProductListTable.js'





//입력창 비우기
function resetProductAddInputs($productNameInput, $productPriceInput, $productQuantityInput){
    $productNameInput.value = ''
    $productPriceInput.value = ''
    $productQuantityInput.value = ''        
}

//상품추가하기 버튼 클릭시 테이블에 추가하기
export function addProductList(){
    const $productNameInput = document.querySelector('#product-name-input')
    const $productPriceInput = document.querySelector('#product-price-input')
    const $productQuantityInput = document.querySelector('#product-quantity-input')


    if(checkProductValid($productNameInput, $productPriceInput, $productQuantityInput)){
        //객체 생성

        makeProduct($productNameInput.value, $productPriceInput.value, $productQuantityInput.value)

        //상품관리와 상품구매에 출력
        addProductAddTable()
        addProductPurchaseTable()
    }
        resetProductAddInputs($productNameInput, $productPriceInput, $productQuantityInput)
}
