import { GAME } from '../util/constant.js';

//상품관리 테이블에 추가
export function addProductAddTable() {
    const $productAddTable = document.querySelector('#product-add-table');
    $productAddTable.innerHTML = '';
    for (let product of GAME.PRODUCTS) {
        $productAddTable.innerHTML += `<tr class="product-manage-item">
                                            <td class="product-manage-name" data-product-name=${product.name}>${product.name}</td>
                                            <td class="product-manage-price">${product.price}</td>
                                            <td class="product-manage-quantity">${product.quantity}</td>                                
                                        </tr>`;
    }
}
