export class PRODUCT {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getName(){
        console.log(this.name)
        console.log(this.price)
        console.log(this.quantity)
    }
}

export const ERROR_MESSAGE = {
    BLANK_ERROR : '공백을 입력할 수 없습니다.',
    PRODUCT_PRICE_INPUT_ERROR : '상품가격은 100보다 크고 10으로 나누어 떨어져야합니다',
    PRODUCT_QUANTITY_INPUT_ERROR : '상품수량은 0보다 크고 정수이어야합니다',
    PRODUCT_NAME_DUPLICATE : '이미 등록된 상품입니다'

}