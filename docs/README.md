<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>


## 📝 구현 과정

<br>

- utils 폴더에 각종 상수`(constants.js)`와 HTML`(html.js)` 저장
- 기본 페이지를 화면에 출력`(showMain.js)`
- 각 페이지를 기준으로 폴더로 구분
- 각 폴더는 3가지 기능으로 분리
  - **View** : 해당하는 화면을 출력
  - **Check** : 입력받은 값의 유효성 체크
  - **Event** : 입력받은 값으로 계산을 하는 등의 이벤트 추가
- 상품 관리 탭 `(ProductAdd)`
  -  **ProductAddView** : 입력창, 추가 버튼, 상품 현황표 출력
  -  **ProductAddCheck** : 입력받은 값의 유효성 판단 후 적합한 이벤트 실행
  -  **ProductAddEvent** : 상품을 localStorage에 저장 후 상품 현황표 출력
- 잔돈 충전 탭 `(MachineManage)`
  -  **MachineManageView**: 입력창, 충전 버튼, 보유 금액, 자판기가 보유한 동전표 출력
  -  **MachineManageCheck** : 입력받은 값의 유효성 판단 후 적합한 이벤트 실행
  -  **MachineManageEvent** : 잔돈과 랜덤으로 생성된 동전들을 localStorage에 저장 후 동전표 출력
- 상품 구매 탭 `(ProductPurchase)`
  -  **ProductPurchaseView** : 입력창, 투입 버튼, 투입 금액, 상품 현황표, 반환 버튼, 반환 동전표 출력
  -  **ProductPurchaseCheck** : 입력받은 값의 유효성 판단 후 적합한 이벤트 실행
  -  **ProductPurchaseEvent** : 투입 금액과 잔돈으로 생성된 최소 개수 동전들을 localStorage에 저장 후 반환 동전표 출력
- 상품 구매 이벤트 `(PurchaseEvent.js)`
  - 구매 가능 여부 판단
  - 구매 불가능시 alert
  - 구매 가능시 물건 구매 후 변화된 내용들을 표로 출력

<br>

---
## ✅ 구현할 기능 목록

<br>

- [x] 공통
  - [x] 제목을 화면에 표시한다
  - [x] 3개의 탭을 화면에 표시한다
  - [x] 탭을 누르면 해당하는 내용을 보여준다
  - [x] 기존 탭의 상태가 유지되어야 한다
  - [x] 새로고침해도 가장 최근의 정보들을 불러와야 한다
  - [x] localStorage에 처음 값 들어갔을 때 null로 표시되는 오류 수정

<br>

- [x] 상품 관리 탭
  - [x] 상품을 추가할 수 있어야 한다
  - [x] 추가한 상품을 화면에 표시한다
  - [x] 상품 가격이 100원 이상인지 검증한다
  - [x] 상품 가격이 10원으로 나누어 떨어지는지 검증한다

<br>

- [x] 잔돈 충전 탭
  - [x] 충전하기 버튼을 눌러 자판기 보유 금액을 누적하여 충전한다
  - [x] 자판기 보유 금액 만큼의 동전을 랜덤으로 생성한다
  - [x] 자판기 보유 총 금액을 화면에 표시한다
  - [x] 각 동전의 개수를 화면에 표시한다

<br>

- [x] 상품 구매 탭
  - [x] 금액을 입력받아 누적하여 충전한다
  - [x] 금액이 10원으로 나누어 떨어지는지 검증한다
  - [x] 총 투입된 금액을 화면에 표시한다
  - [x] 반환하기 버튼을 통해 잔돈을 반환한다
  - [x] 구매하기 버튼 이벤트 추가한다
  - [x] 잔돈이 최소 개수의 동전인지 검증한다
  - [x] 잔돈으로 반환할 수 있는 금액만 반환한다
  - [x] 잔돈의 각 동전 개수를 화면에 표시한다

<br>

--- 
## ❗️ 예외 처리할 목록

<br>

- [x] 입력받은 상품 정보 검사
  - [x] 하나의 정보라도 입력하지 않았으면 alert
  - [x] 상품명이 공백을 포함한다면 alert
  - [x] 가격이 100 미만이라면 alert
  - [x] 가격이 10으로 나누어 떨어지지 않는다면 alert
  - [x] 수량이 0개 이하이면 alert
  - [x] 수량이 정수가 아니라면 alert
  - [x] 수량과 가격이 숫자가 아니라면 alert

- [x] 입력받은 충전 금액 검사
  - [x] 금액이 10으로 나누어 떨어지지 않는다면 alert
  - [x] 금액이 0 이하이면 alert
  - [x] 금액이 정수가 아니라면 alert
  - [x] 금액을 입력하지 않았거나 공백을 포함하면 alert

- [x] 입력받은 투입 금액 검사
  - [x] 금액이 10으로 나누어 떨어지지 않는다면 alert
  - [x] 금액이 0 이하이면 alert
  - [x] 금액이 정수가 아니라면 alert
  - [x] 금액을 입력하지 않았거나 공백을 포함하면 alert

-[x] 투입한 금액보다 구매하려는 상품이 더 비싼 경우 alert

-[x] 재고가 없는 상품을 구매하려고 하면 alert

-[x] 투입한 금액이 없는데 반환하기를 누르면 alert