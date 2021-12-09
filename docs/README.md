## 공통 요구사항

[x] 문자열과 숫자 값 등은 상수로 만들어 constants.js에서 관리한다

[x] 처음 브라우저를 시작할 때에 제목과 tab만 브라우저에 표기한다

[ ] 유저가 탭을 누르면 해당 내용들이 렌더링이 된다

[ ] 다른 탭으로 이동했다가 돌아와도 기존의 탭 상태가 유지되어 있어야 한다

[ ] localStorage를 이용하여 새로고침하더라도 가장 최근에 작업한 정보를 불러올 수 있도록 한다

<hr>

## 상품관리 탭

[x] 상품관리 탭으로 이동하는 버튼은 product-add-menu id를 가진다

[x] product-purchase-menu 버튼을 클릭하면 상품관리 탭이 tab-content-container div 내에 랜더링 된다

[x] 상품 추가 입력 폼의 상품명 입력 요소는 product-name-input id를 가진다

[x] 상품명 입력 요소의 placeholder은 "상품명"으로 한다

[x] 상품 추가 입력 폼의 가격 입력 요소는 product-price-input id를 가진다

[x] 가격 입력 요소의 placeholder은 "가격"으로 한다

[x] 상품명 추가 입력 폼의 수량 입력 요소는 product-quantity-input id를 가진다

[x] 수량 입력 요소의 placeholder는 "수량"으로 한다

[x] 상품 추가하기 버튼 요소는 product-add-button id를 가진다

[x] product-add-button 을 누르면 상품명, 가격, 수량 입력값에 대한 유효성 평가를 한다

> ### 상품명, 가격, 수량 입력값 평가

    [x] 빈값을 입력하였을 경우 alert로 처리한다

    [x] 상품 가격의 경우 100이상이여야 한다

    [x] 상품 가격의 경우 10으로 나누어 떨어져야 한다

    [x] 상품 가격과 수량의 경우 0 미만의 값을 입력할 경우 alert로 처리한다

    [x] 상품 가격과 수량의 경우 소수 값을 입력할 경우 alert로 처리한다

    [x] 상품 가격과 수량의 경우 숫자값이 아닌 문자열을 입력할 경우 alert로 처리한다

    [x] 상품명의 경우 localStorage와 비교해 중복될 경우 alert로 처리한다

[ ] 유저의 입력값이 유효한 경우 drink localStorage에 객체 형태로 값을 저장한다

[ ] localStorage 값을 토대로 상품 현황에 유저가 입력한 값을 보여준다

[ ] 추가하기 버튼을 클릭할 때마다 상품현황이 update 되어 render가 된다

<hr>

## 잔돈 충전 탭

[x] 잔돈 충전 탭으로 이동하는 메뉴버튼은 vending-machine-manage-menu id를 가진다

[ ] veding-machine-manage-menu 버튼을 클릭하면 잔돈충전 탭이 tab-content-container div 내에 랜더링 된다

[ ] 자판기가 보유할 금액을 충천할 금액을 입력하는 요소는 veding-machine-charge-input id를 가진다

[ ] 자판기가 보유할 금액을 충전할 금액을 입력하는 요소의 placeholder는 "자판기가 보유한 금액"이다

[ ] 보유한 금액의 경우 vendingCoin localStorage에서 총액을 구해서 표기한다

[ ] 충전하기 버튼은 vending-machine-charge-button id를 가진다

[ ] 충전하기 버튼을 누르면 유저가 입력한 금액 값의 유효성을 평가한다

> ### 자판기 동전 충전하기 값 평가

    [ ] 빈값을 입력하였을 경우 alert로 처리한다

    [ ] 음의 수를 입력하였을 경우 alert로 처리한다

    [ ] 10으로 나누어 떨어지는 값이 아닌 경우 alert로 처리한다

[ ] 유저의 입력값이 유효한 경우 충전된 금액을 확인하는 요소에 {금액}원 형식으로 표기한다

[ ] 충전된 금액을 확인하는 요소는 vending-machine-charge-amount id를 가진다

[ ] 충전된 금액은 vendingCoin localStorage 에 저장한다

[ ] vedingCoin localStorage에 저장된 값을 토대로 유저에게 화면에 보여준다

[ ] 자판기 보유 금액 만큼의 동전이 Random.pickNumberInList를 활용하여 무작위로 생성된다

[ ] 동전의 개수의 경우 {개수}개 형식으로 표기된다

> ### 보유한 각 동전의 개수를 표기하는 요소들의 id

    [ ] 500원 동전의 개수 요소의 id는 veding-machine-coin-500-quantity이다

    [ ] 100원 동전의 개수 요소의 id는 vending-machine-coin-100-quantity이다

    [ ] 50원 동전의 개수 요소의 id는 veding-machine-coin-50-quantity이다

[ ] 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성 되어 기존 동전에 더해진다

<hr>

## 상품 구매 탭

[x] 상품 구매 탭으로 이동하는 버튼은 product-purchase-menu id를 가진다

[ ] product-add-menu 버튼을 클릭하면 상품 관리 탭이 tab-content-container div 내에 랜더링 된다

[ ] 투입 금액 입력 요소는 charge-input id를 가진다

[ ] 투입 금액 입력 요소의 placeholder는 "투입할 금액" 이다

[ ] 투입하기 버튼 요소는 charge-button id를 가진다

[ ] 투입하기 버튼을 클릭시 유저가 입력한 금액 값의 유효성 검사를 한다

[ ] 금액은 누적으로 투입할 수 있다

> ### 투입할 금액 평가

    [ ] 빈값을 입력할 경우 alert로 처리한다

    [ ] 음의 값을 입력할 경우 alert로 처리한다

    [ ] 10으로 나누어 떨어지는 금액이 아닌 경우 alert로 처리한다

[ ] 투입한 금액을 확인하는 요소는 charge-amout id를 가진다

[ ] 투입한 금액이 유효한 경우 투입한 금액에 {금액}원 형식으로 나타낸다

> ### 구매할 수 있는 상품 현황 관련

    [ ] localStorage에 저장된 값을 화면에 표기한다

    [ ] 각 상품 요소의 class 명은 product-purchase-item이다

    [ ] 구매버튼에 해당하는 요소는 purchase-button class 값을 가진다

    [ ] 상품명에 해당하는 요소는 product-purchase-price class 값을 가진다

    [ ] 가격에 해당하는 요소는 product-purchase-price class 값을 가진다

    [ ] 수량에 해당하는 요소는 product-purchase-quantity class 값을 가진다

    [ ] 상품명은 dataset 속성을 사용하여 data-product-name 형식으로 저장한다

    [ ] 가격은 dataset 속성을 사용하여 data-product-price 형식으로 저장한다

    [ ] 수량은 dataset 속성을 사용하여 data-product-quantity 형식으로 저장한다

> ### 구매하기 로직 관련

    [ ] purchase-button 클릭시 수량을 늘린다

[ ] 반환하기 버튼 요소는 coin-return-button id를 가진다

[ ] 반환하기 버튼을 눌렀을 때 잔돈을 계산한다

> ### 잔돈 계산 관련

    [ ] localStorage에서 현재 보유한 동전 개수 값을 가져온다

    [ ] 잔돈을 돌려줄 때에는 현재 보유한 최소 동전으로 잔돈을 돌려준다

    [ ] 지폐를 잔돈으로 반환하는 경우는 없다

    [ ] 잔돈을 반환할 수 없을 경우 잔돈으로 반환할 수 있는 금액만 반환한다

[ ] localStorage에 동전개수를 업데이트한다

[ ] 동전의 개수를 나타내는 정보는 {개수}개 형식으로 나타낸다

> ### 반환될 각 동전의 개수에 해당하는 요소 id들

    [ ] 500원 동전의 개수에 해당하는 요소의 id는 coin-500-quantity이다

    [ ] 100원 동전의 개수에 해당하는 요소의 id는 coin-100-quantity 이다

    [ ] 50원 동전의 개수에 해당하는 요소의 id는 coin-50-quantity 이다

    [ ] 10원 동전의 개수에 해당하는 요소의 id는 coin-10-quantity 이다

<hr>

## localStorage

- 메뉴명, 가격, 수량의 경우 { 'menu' : '메뉴명' , 'price' : '가격', ;'quantity' : '수량' } 형태로 저장

- 자판기가 보유한 잔돈의 경우 { 'coin500' : 0, 'coin100' : 0, 'coin50' : 0, 'coin10' } 형태로 저장

- 유저가 보유한 금액의 경우 userTotalMoney = 0 형태로 저장

> ### localStorage에 저장되는 값들

    [ ] 메뉴명, 가격 , 수량 정보는 drink localStorage에서 관리한다

    [ ] 자판기가 보유한 동전의 종류별 개수의 경우 vendingCoin localStorage에서 관리한다

    [ ] 유저가 투입한 금액의 경우 userMoney localstorage에서 관리한다

[ ] 변수들의 경우 localStorage에 저장된 값이 없을 경우 초기화를 진행한다

> ### 사용되는 값들 초기화 관련

    [x] 최초 상품목록은 비워진 상태로 초기화 한다

    [ ] 최초 자판기가 보유한 금액은 0으로 초기화 한다

    [x] 최초 자판기가 보유한 각 동전의 개수는 0으로 초기화 한다

    [x] 상품 구매 탭에서 최초 충전 금액은 0원으로 초기화 한다

    [ ] 반환된 각 동전의 개수는 0으로 초기화 한다
