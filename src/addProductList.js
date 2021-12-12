import { PRODUCT } from './product.js'
import { checkProductValid } from './checkProductValid.js'
import { makeProduct } from './makeProduct.js'

//상품관리 테이블에 추가
function addProductAddTable(PRODUCTS){
    const $productAddTable = document.querySelector('#product-add-table')
    $productAddTable.innerHTML = ''    
    for(let product of PRODUCTS){
        $productAddTable.innerHTML += `<tr>
                                            <td class="product-manage-name" data-product-name=${product.name}>${product.name}</td>
                                            <td>${product.price}</td>
                                            <td>${product.quantity}</td>                                
                                        </tr>`          
    }
      
}

//상품구매 테이블에 추가
function addProductPurchaseTable(PRODUCTS){
    const $productPurchaseTable = document.querySelector('#product-purchase-table')
    $productPurchaseTable.innerHTML = ''    
    for(let product of PRODUCTS){
        $productPurchaseTable.innerHTML += `<tr>
                                                <td class="product-purchase-name" data-product-name=${product.name}>${product.name}</td>
                                                <td class="product-purchase-price"data-product-price=${product.name}>${product.price}</td>
                                                <td class="product-purchase-quantity" data-product-quantity=${product.name}>${product.quantity}</td>
                                                <td><button class="purchase-button" data-product-name=${product.name}>구매하기</button></td>                               
                                            </tr>`          
    }
      
}

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
    let PRODUCTS = document.querySelector('#product-name-input').value


    if(checkProductValid($productNameInput, $productPriceInput, $productQuantityInput)){
        //객체 생성

        PRODUCTS = makeProduct($productNameInput.value, $productPriceInput.value, $productQuantityInput.value)
        //$productName = new PRODUCT($productNameInput.value, $productPriceInput.value, $productQuantityInput.value)

        addProductAddTable(PRODUCTS)
        addProductPurchaseTable(PRODUCTS)

    }
        resetProductAddInputs($productNameInput, $productPriceInput, $productQuantityInput)
        return PRODUCTS



}
