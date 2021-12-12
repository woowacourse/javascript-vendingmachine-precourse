import { ERROR_MESSAGE } from './product.js'

//공백 예외처리
    function checkProducBlanktValid($productNameInput, $productPriceInput, $productQuantityInput){
        if($productNameInput.value === ''){
            return false
        }
        if($productNameInput.value.trim() === ''){
            return false
        }
        if($productPriceInput.value === ''){
            return false
        }
        if($productQuantityInput.value === ''){
            return false
        }
        return true
    }

    //가격 예외처리
    function checkProductPriceValid($productPriceInput){
        if($productPriceInput.value>100 && $productPriceInput.value%10 === 0){
            return true
        }
        return false
    }

    //수량 예외처리
    function checkProductQuantityValid($productQuantityInput){
        if($productQuantityInput.value>0 && $productQuantityInput.value%1===0){
            return true
        }
        return false
    }

    //상품명 중복이 있는지
    function checkProductNameValid($productNameInput){
        console.log(document.querySelectorAll('.product-manage-name'))
        const $productManageName = document.querySelectorAll('.product-manage-name')
        if($productManageName.length !== 0){    
            for (let productName of $productManageName){
                if(productName.dataset.productName === $productNameInput.value){
                    return false
                }
                return true
            }        
         }
         return true
    }


    
export function checkProductValid($productNameInput, $productPriceInput, $productQuantityInput){
    //TO DO : 스페이스바 없애기 처리
    //공백 예외처리
    if(!checkProducBlanktValid($productNameInput, $productPriceInput, $productQuantityInput)){
        alert(ERROR_MESSAGE.BLANK_ERROR)
        return false
    }
    //수량 예외처리
    else if(!checkProductQuantityValid($productQuantityInput)){
        alert(ERROR_MESSAGE.PRODUCT_QUANTITY_INPUT_ERROR)
        return false
    }
    //가격 예외처리
    else if(!checkProductPriceValid($productPriceInput)){
        alert(ERROR_MESSAGE.PRODUCT_PRICE_INPUT_ERROR)
        return false
    }
    //상품명 중복 확인
    else if(!checkProductNameValid($productNameInput)){
        alert(ERROR_MESSAGE.PRODUCT_NAME_DUPLICATE)
        return false
    }
    return true
}