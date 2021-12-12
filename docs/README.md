# 구현 기능 목록

## 자판기

- [x] 자판기 타이틀 생성
- [x] 상품 관리, 잔동 충전, 상품 구매 탭을 포함한 컨테이너 생성
- [x] 각각의 버튼 클릭 시, 해당 컴포넌트 불러오기

## 상품 관리

- [x] 마운트될 때, localStorage에 저장된 목록 불러오기
- [x] 상품 추가하기 UI template 작성
- [x] input 빈값 검증
- [x] 상품 가격 양수인 정수 검증
- [x] 상품 가격 최소 100원 이상 검증
- [x] 상품 가격 10원으로 나누어 떨어지는지 검증
- [x] 상품 수량 양수인 정수 검증
- [x] 상품 추가 버튼 클릭 시, localStorage에 저장
- [x] 상품 현황 UI template 작성
- [x] 상품 현황 UI에 저장된 상품 정보 띄우기

## 잔돈 충전

- [ ] 마운트될 때, localStorage에 저장된 목록 불러오기
- [ ] 금액 투입 UI template 작성
- [ ] 투입 금액 빈값 검증
- [ ] 투입 금액 양수인 정수 검증
- [ ] 잔돈이 10원으로 나누어 떨어지는지 검증
- [ ] 잔돈 동전 무작위로 생성
- [ ] 투입 금액, 충전 동전 localStorage에 저장
- [ ] 자판기 보유 동전 UI template 작성
- [ ] 충전 동전과 보유 금액 띄우기

### 상품 구매

- [ ] 마운트될 때, localStorage에 저장된 목록 불러오기
- [ ] 금액 투입 UI template 작성
- [ ] 투입 금액 빈값 검증
- [ ] 투입 금액 양수인 정수 검증
- [ ] 투입 금액 localStorage에 저장
- [ ] 구매할 수 있는 상품 현황 UI template 작성
- [ ] localStorage에서 불러온 상품 현황 띄우기
- [ ] 구매 버튼 클릭 시, 투입 금액 처리하기
- [ ] 구매 버튼 클릭 시, 상품 수량 처리하기
- [ ] 투입 금액보다 상품이 비싼지 검증
- [ ] 상품 개수가 0인지 검증
- [ ] 잔돈 반환하기

# 프로그래밍 요구 사항

## 탭 메뉴 버튼

- [ ] 상품 구매 탭으로 이동하는 메뉴 버튼 **id**는 product-purchase-menu이다.
- [ ] 잔돈 충전탭으로 이동하는 메뉴 버튼 **id**는 vending-machine-manage-menu이다.
- [ ] 상품 관리탭으로 이동하는 메뉴 버튼 **id**는 product-add-menu이다.

## 상품 관리(추가) 메뉴

- [ ] 상품 추가 입력 폼의 상품명 입력 요소의 **id**는 product-name-input이다.
- [ ] 상품 추가 입력 폼의 상품 가격 입력 요소의 **id**는 product-price-input이다.
- [ ] 상품 추가 입력 폼의 수량 입력 요소의 **id**는 product-quantity-input이다.
- [ ] 상품 추가하기 버튼 요소의 **id**는 product-add-button이다.

### 추가한 각 상품 요소의 class명은 product-manage-item이며, 하위에 아래 요소들을 갖는다.

- [ ] 상품명에 해당하는 요소의 **class**명은 product-manage-name이다.
- [ ] 가격에 해당하는 요소의 **class**명은 product-manage-price이다.
- [ ] 수량에 해당하는 요소의 **class**명은 product-manage-quantity이다.

## 잔돈 충전 (자판기 보유 동전) 메뉴

- [ ] 자판기가 보유할 금액을 충전할 요소의 **id**는 vending-machine-charge-input이다.
- [ ] 충전하기 버튼에 해당하는 요소의 **id**는 vending-machine-charge-button이다.
- [ ] 충전된 금액을 확인하는 요소의 **id**는 vending-machine-charge-amount 이다.
- [ ] 보유한 각 동전의 개수에 해당하는 요소의 **id**는 다음과 같다.
- [ ] 500원: vending-machine-coin-500-quantity
- [ ] 100원: vending-machine-coin-100-quantity
- [ ] 50원: vending-machine-coin-50-quantity
- [ ] 10원: vending-machine-coin-10-quantity

## 상품 구매 메뉴

- [ ] 투입 금액 입력 요소의 **id**는 charge-input이다.
- [ ] 투입하기 버튼 요소의 **id**는 charge-button이다.
- [ ] 투입한 금액을 확인하는 요소의 **id**는 charge-amount이다.
- [ ] 반환하기 버튼 요소의 **id**는 coin-return-button이다.
- [ ] 반환된 각 동전의 개수에 해당하는 요소의 **id**는 다음과 같다.
- [ ] 500원: coin-500-quantity
- [ ] 100원: coin-100-quantity
- [ ] 50원: coin-50-quantity
- [ ] 10원: coin-10-quantity

### 각 상품 요소의 class명은 product-purchase-item이고, 하위에 아래 요소들을 갖는다.

- [ ] 구매 버튼에 해당하는 요소의 **class**명은 purchase-button이다.
- [ ] 상품명에 해당하는 요소의 **class**명은 product-purchase-name이다.
- [ ] 가격에 해당하는 요소의 **class**명은 product-purchase-price이다.
- [ ] 수량에 해당하는 요소의 **class**명은 product-purchase-quantity이다.

- [ ] 상품명은 **dataset** 속성을 사용하고 data-product-name 형식으로 저장한다.
- [ ] 가격은 **dataset** 속성을 사용하고 data-product-price 형식으로 저장한다.
- [ ] 수량은 **dataset** 속성을 사용하고 data-product-quantity 형식으로 저장한다.
