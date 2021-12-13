<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>

## 🎯 기능 요구 사항
> 반환되는 동전이 최소한이 되는 자판기를 구현한다.

# View

## 1. 공통 View

- [x] 제목
    - tag : h1
    - 내용 : 🍹자판기🍹
- [x] 3가지 탭 메뉴
    
    - 상품 관리
        
        ```
        tag : button
        내용 : 상품 관리
        id : product-add-menu
        ```

    - 잔돈 충전
        
        ```
        tag : button
        내용 : 잔돈 충전
        id : vending-machine-manage-menu
        ```
        
    - 상품 구매;
        
        ```
        tag : button
        내용 : 상품 구매
        id : product-purchase-menu
        ```

## 2. 상품 관리 탭

```
<div id = manage-tab> </div> 의 appendChild로 추가한다.
```

- [x] 탭 제목
    
    ```
    tag : h2
    내용 : 상품 추가하기
    ```
    
- [x] 3가지 input
    - 상품명
        
        ```
        tag : input
        placeholder : 상품명
        id : product-name-input
        ```
        
    - 가격
        
        ```
        tag : input
        placeholder : 가격
        id : product-price-input
        ```
        
    - 수량
        
        ```
        tag : input
        placeholder : 수량
        id : product-quantity-input
        ```
        
- [x] 상품 추가하기 버튼
    
    ```
    tag : button
    내용 : 추가하기
    id : product-add-button
    ```
    
- [x] 상품 현황 소제목
    
    ```
    tag : h2
    내용 : 상품 현황
    ```
    
- [x] 상품 현황 테이블
    
    ```
    tag : table
    내용 : 추가하기
    
    <tr className = "product-manage-item">
        <td id = product-manage-name> ... </td>
        ...
    </tr>
    
    각 요소 class : product-manage-item
    각 요소 이름, 가격, 수량 : product-manage-name(price, quantity)
    ```
        

## 3. 잔돈 충전 탭

```
<div id = charge-tab> </div> 의 appendChild로 추가한다.
```

- [x] 탭 제목
    
    ```
    tag : h2
    내용 : 자판기 동전 충전하기
    ```
    
- [x] input
    
    ```
    tag : input
    placeholder : 자판기가 보유할 금액
    id : vending-machine-charge-input
    ```
- [x] button
  
  ```
  tag: button
  내용 : 충전하기
  id : vending-machine-charge-button
  ```

- [x] 텍스트 - 보유 금액
    
    ```
    tag : text
    내용 : 보유 금액: 
    
    ```
    
- [x] 자판기 보유 금액
    
    ```
    tag : text
    id : vending-machine-charge-amount
    ```
    
- [x] 텍스트 - 자판기가 보유한 동전
    
    ```
    tag : h2
    내용 : 자판기가 보유한 동전
    ```
    
- [x] 자판기가 보유한 동전 테이블
    
    ```
    tag : table
    th : 동전 , 개수
    id : vending-machine-coin-500(100,50,10)-quantity
    ```
    

## 4. 상품 구매 탭

```
<div id = purchase-tab> </div> 의 appendChild로 추가한다.
```

- [x] 탭 제목
    
    ```
    tag : h2
    내용 : 금액 투입
    ```
    
- [x] input - 투입할 금액
    
    ```
    tag : input
    placeholder : 투입할 금액
    id : charge-input
    ```
    
- [x] 투입하기 버튼
    
    ```
    tag : button
    내용 : 투입하기
    id : charge-button
    ```
    
- [x] 텍스트 - 투입한 금액
    
    ```
    tag : text
    내용 : 투입한 금액: 
    ```
    
- [x] 텍스트 - 충전한 금액
    
    ```
    tag : text
    id : charge-amount
    ```
    
- [x] 텍스트 - 구매할 수 있는 상품 현황
    
    ```
    tag : h2
    내용 : 구매할 수 있는 상품 현황
    ```
    
- [x] 상품 테이블
    
    ```
    tag : table
    th : 상품명, 가격, 수량, 구매
    
    <tr className = "product-purchase-item">
    	<td data-product-name="..." className="product-purchase-name">...</td>
    	...
    </tr>
    
    각 요소 : td className = product-purchase-item
    	- product-purchase-name(price,quantity)
    	- data-set : data-product-name(price,quantity)
    	- purcahse-button
    	
    ```
    
- [x] 텍스트 - 잔돈
    
    ```
    tag : h2
    내용 : 잔돈
    ```
    
- [x] 반환하기 버튼
    
    ```
    tag : button
    내용 : 반환하기
    id : coin-return-button
    ```
    
- [x] 반환 받을 동전 테이블
    
    ```
    tag : table
    th : 동전, 개수
    
    <tr> <td>500원</td> <td id = coin-500-quantity> </td> </tr> ...
    ```
    

---

# Model

## 1. vendingMachine

### 내부 변수

- 상품 리스트
    
    ```
    name
    price
    quantity
    - 객체 배열 
    
    ```
    
- 보유 동전
    
    ```
    500, 100, 50, 10 단위로 존재
    - 배열 [0,0,0,0] 으로 init
    ```
    
- 사용자가 투입한 돈
- 사용자에게 반환할 동전

### 내부 함수

1. 상품리스트 추가 함수
    
    ```
    - 객체(이름, 가격, 수량) 생성 후 배열 끝에 추가
    - 같은 이름이 이미 배열 안에 있다면 가격은 갱신, 수량은 누적
    ```
    
2. 자판기 보유 금액 충전 함수
    
    ```
    보유 금액 누적
    랜덤 함수 호출 - 동전 랜덤하게 생성
    ```
    
3. 금액 투입 함수
    
    ```
    사용자 투입 금액 증가
    ```
    
4. 잔돈 반환 함수
    
    ```
    최소한으로 동전을 받을 수 있도록 동전의 값어치가 큰 것부터 최대 반환
    동전이 부족해서 주지 못하면 자판기의 모든 동전을 전부 줘야함
    보유 동전 개수 감소
    투입한 금액 감소
    ```
    
5. 상품 구매하기 함수
    
    ```
    수량 감소
    투입한 금액 감소
    상품을 샀는지 안 샀는지 boolean 반환
    ```

---

# Controlloer
- Model과 View를 작성하며 필요한 순간마다 eventHandler를 작성한다.

--- 
# LocalStorage
- 기본적으로 Model 안에서 모델 내부 변수들의 값이 변할 때마다 localStorage값을 갱신한다.

## Model 내부 변수

- [x] productList
  ``` 
  상품 추가 시 갱신
  상품 구매 시 갱신
  ```

- [x] ownChange
  ```
  잔돈 충전 시 갱신
  잔돈 반환 시 갱신
  ```

- [x] userMoney
  ```
  금액 투입 시 갱신
  상품 구매 시 갱신
  잔돈 반환 시 갱신
  ```

- [x] returnMoney
  ```
  변경 사항 없음
  ```
