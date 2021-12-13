import { GAME } from './product.js'

//상품관리 테이블에 추가
export function addProductAddTable(){
    const $productAddTable = document.querySelector('#product-add-table')
    $productAddTable.innerHTML = ''    
    for(let product of GAME.PRODUCTS){
            $productAddTable.innerHTML += `<tr>
                                                <td class="product-manage-name" data-product-name=${product.name}>${product.name}</td>
                                                <td>${product.price}</td>
                                                <td>${product.quantity}</td>                                
                                            </tr>`              
        
    }
}

//상품구매 테이블에 추가
export function addProductPurchaseTable(){
    const $productPurchaseTable = document.querySelector('#product-purchase-table')
    $productPurchaseTable.innerHTML = ''
    for(let product of GAME.PRODUCTS){
        $productPurchaseTable.innerHTML += `<tr>
                                                <td class="product-purchase-name" data-product-name=${product.name}>${product.name}</td>
                                                <td class="product-purchase-price"data-product-price=${product.name}>${product.price}</td>
                                                <td class="product-purchase-quantity" data-product-quantity=${product.name}>${product.quantity}</td>
                                                <td><button class="purchase-button" data-product-name=${product.name}>구매하기</button></td>                               
                                            </tr>`          
    }  
}
