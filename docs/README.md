## 기능 분류

### 메뉴

- 상단에 `탭 메뉴`가 존재
  - `상품 관리` 탭
  - `잔돈 충전` 탭
  - `상품 구매` 탭
- 다른 탭으로 이동했다 돌아와도 기존 탭의 상태가 유지되어야 함
- `localStorage`를 사용하여, 새로고침하더라도 가장 최근에 작업한 정보들을 불러올 수 있도록 함

<br>

### 상품 관리 탭

- 자판기가 보유하고 있는 상품을 추가하는 기능
- 규칙
  - 최초 상품 목록은 비워놓아야 함
  - 상품명, 가격, 수량을 입력하여 상품을 추가할 수 있음
    - 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 함
  - 사용자는 추가한 상품을 확인할 수 있음

<br>

### 잔돈 충전 탭 (자판기 보유 동전)

- 자판기가 보유할 금액을 충전하는 기능
- 규칙
  - 최초 자판기가 보유한 금액은 0원이며, 각 동전의 개수 또한 0개
  - 잔돈 충전 입력 요소에 충전할 금액을 입력한 뒤 `충전하기` 버튼을 눌러 자판기 보유 금액을 충전할 수 있음
    - 자판기 보유 금액은 `{금액}원` 형식으로 나타냄
  - 자판기 보유 금액만큼의 동전이 무작위로 생성됨
    - 동전의 개수는 `{개수}개` 형식으로 나타냄
  - 자판기 보유 금액을 누적하여 충전할 수 있음
    - 이 때, 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해짐

<br>

### 상품 구매 탭

- 사용자가 금액을 투입할 수 있음
- 투입한 금액에 맞춰 상품을 구매하고, 남은 금액은 반환
- 규칙
  - 최초 충전 금액은 0원이며, 각 동전의 개수 또한 0개
  - 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 뒤 `투입하기` 버튼을 눌러 금액을 투입할 수 있음
    - **10원으로 나누어 떨어지는 금액**만 투입할 수 있음
    - 자판기가 보유한 금액은 `{금액}원` 형식으로 나타냄
  - 금액은 누적으로 투입할 수 있음
  - 사용자는 `반환하기` 버튼을 통해 잔돈을 반환받을 수 있음
- 잔돈 반환 규칙
  - 잔돈을 돌려줄 때는 **현재 보유한 최소 개수의 동전**으로 잔돈을 돌려줌
  - 지폐를 잔돈으로 반환하는 경우는 없다고 가정
  - 잔돈으로 반환할 수 없는 경우, 잔돈으로 반환할 수 있는 금액만 반환
  - 동전의 개수를 나타내는 정보는 `{개수}개` 형식으로 나타냄

<br>
<hr>
<br>

## 구현 기능 목록

*위를 바탕으로 구현을 한 뒤 해당 기능에 대한 설명을 적었습니다* 😊

| 📃 | ⚠️ |
|---|---|
| 메뉴에서 각 탭 클릭 시 이에 해당하는 화면이 나타나는 기능 | <ul><li>초기 상태에 미리 각 화면을 만들어놓고 hidden을 사용하여 제어</li></ul> |
| 상품을 추가하는 기능 | <ul><li>예외<ul><li>상품명, 가격, 수량 중 하나라도 입력하지 않은 것이 있을 경우</li><li>가격과 수량에 양의 정수가 아닌 수를 입력한 경우(ex: 0, 음수, 실수)</li><li>가격이 100원보다 작거나 10원으로 나누어 떨어지지 않는 경우</li></ul></li><li>기존 상품과 동일한 상품명을 가진 상품을 입력하였을 경우, 밑의 상품 수정 기능 실행</li><li>상품 추가에 성공하였을 경우, 해당 상품 정보를 밑에 추가하고 input 초기화</li></ul> |
| 상품을 수정하는 기능 | <ul><li>상품 추가 시 기존 상품 중 하나와 상품명과 가격을 똑같이 입력하였을 경우, 해당 상품의 재고를 입력한 만큼 증가시킴</li><li>만약 상품명은 같으나 가격이 다를 경우, 입력한 가격과 재고로 변경할지를 물어보고 변경 여부를 결정함</li><ul><li>변경을 하겠다고 하면, 동일한 이름을 가진 상품의 가격과 재고를 입력한 값으로 변경</li><li>변경을 하지 않겠다고 하면, 동일한 이름의 상품은 추가를 할 수 없다고 알림</li></ul></ul> |
| 자판기에 동전을 충전하는 기능 | <ul><li>예외<ul><li>금액을 10으로 나누어 떨어지는 자연수로 입력하지 않은 경우</li></ul></li><li>금액이 성공적으로 입력되면 무작위로 동전의 개수를 뽑아내어 기존의 개수에 누적해서 저장</li><li>저장이 되고 난 후 자동으로 화면에서 보유 금액과 동전 테이블 갱신</li></ul> |
| 구매할 수 있는 상품을 보여주는 기능 | <ul><li>수량이 있는 상품이라면 전부 보여주도록 구현</li></ul> |
| 금액을 투입하는 기능 | <ul><li>예외<ul><li>금액을 10으로 나누어 떨지는 자연수로 입력하지 않은 경우</li></ul></li><li>금액이 성공적으로 입력되면 사용자가 투입한 금액이 누적되어 밑에 표시됨</li></ul> |
| 상품을 구매하는 기능 | <ul><li>예외<ul><li>현재 투입되어 있는 금액으로 살 수 없는 상품을 구매하려는 경우</li></ul></li><li>구매에 성공하였을 경우, 해당 상품의 금액만큼 투입 금액에서 차감한 다음 해당 상품의 수량을 1 감소</li></ul> |
| 잔돈을 반환하는 기능 | <ul><li>잔돈 반환 시 현재 투입한 금액에서 자판기가 가진 동전으로 반환할 수 있는 만큼을 반환해줌</li><li>반환하고자 하는 금액이 자판기 내에 존재하는 금액보다 크거나 같은 경우, 자판기 내에 존재하는 금액을 모두 반환</li><li>반환하고자 하는 금액이 자판기 내에 존재하는 금액보다 작은 경우, 동전의 개수를 최소로 하여 반환</li><li>동전 반환에 성공하면, 해당 금액만큼을 투입한 금액에서 차감하고, 또한 반환한 동전 개수를 자판기가 가진 동전 개수에서 차감</li></ul> |

<br>
<hr>
<br>

## src 폴더 구조

*파일의 개수가 많아 먼저 가독성을 위해 폴더 구조와 index.js만을 시각화하여 역할을 적었습니다* 😊

#### 폴더 정리

```bash
📦src
 ┣ 📂controllers  # 이벤트 처리, 뷰 제어
 ┃ ┣ 📂chargeManager  # 잔돈 충전
 ┃ ┃ ┣ 📂data # 잔돈 충전 로직
 ┃ ┣ 📂common # 컨트롤러에서 공통적으로 사용
 ┃ ┣ 📂menu # 메뉴
 ┃ ┣ 📂productManager # 상품 관리
 ┃ ┃ ┣ 📂data # 상품 추가 로직
 ┃ ┗ 📂purchaseManager  # 상품 구매
 ┃ ┃ ┣ 📂data # 금액 투입, 상품 구매, 잔돈 반환 로직
 ┣ 📂utils  # 컨트롤러와 뷰에서 공통적으로 사용
 ┣ 📂views  # 화면 표시
 ┃ ┣ 📂chargeManager  # 잔돈 충전
 ┃ ┣ 📂common # 뷰에서 공통적으로 사용
 ┃ ┣ 📂header # 로고와 메뉴 버튼
 ┃ ┣ 📂productManager # 상품 관리
 ┃ ┗ 📂purchaseManager  # 상품 구매
 ┗ 📜index.js # 컨트롤러와 뷰 생성
```

<br>
<br>

*추가적으로 파일에 대한 설명을 정리하였습니다.*

```bash
📦src
 ┣ 📂controllers
 ┃ ┣ 📂chargeManager
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┗ 📜chargeMachineDataController.js # 잔돈 충전 시 데이터 제어
 ┃ ┃ ┣ 📜chargeManager.js # 잔돈 충전 클래스
 ┃ ┃ ┗ 📜eventHandlers.js # 잔돈 충전 이벤트 리스너
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜checkMoneyInput.js # 입력된 돈이 조건에 맞는지 확인
 ┃ ┃ ┣ 📜createAll.js # 컨트롤러 속 모든 클래스 생성
 ┃ ┃ ┗ 📜isPositiveInteger.js # 자연수인지 확인
 ┃ ┣ 📂menu
 ┃ ┃ ┣ 📜eventHandlers.js # 메뉴 버튼 이벤트 리스너
 ┃ ┃ ┗ 📜menu.js  # 메뉴 클래스
 ┃ ┣ 📂productManager
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┗ 📜productDataController.js # 상품 추가 시 데이터 제어
 ┃ ┃ ┣ 📜checkInputValues.js  # 입력된 상품 데이터 확인
 ┃ ┃ ┣ 📜eventHandlers.js # 상품 추가 이벤트 리스너
 ┃ ┃ ┗ 📜productManager.js  # 상품 추가 클래스
 ┃ ┗ 📂purchaseManager
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜chargeCustomerDataController.js  # 금액 투입 시 데이터 제어
 ┃ ┃ ┃ ┣ 📜purchaseDataController.js  # 상품 구매 시 데이터 제어
 ┃ ┃ ┃ ┗ 📜returnCoinsDataController.js # 잔돈 반환 시 데이터 제어
 ┃ ┃ ┣ 📜eventHandlers.js # 금액 투입, 상품 구매, 잔돈 반환 이벤트 리스너
 ┃ ┃ ┗ 📜purchaseManager.js # 상품 구매 클래스
 ┣ 📂utils
 ┃ ┣ 📜calculateMoney.js  # 동전이 총 얼마인지 계산하여 반환
 ┃ ┣ 📜constants.js # 상수 정리
 ┃ ┣ 📜getSetItems.js # localStorage의 아이템 get, set 함수 정리
 ┃ ┣ 📜inputValue.js  # 입력창의 값을 가져오거나 설정
 ┃ ┣ 📜itemFromLocalStorage.js  # 저장소 관련 함수 정리
 ┃ ┗ 📜productNameConverter.js  # 공백을 -으로, -를 공백으로 변환하는 함수
 ┣ 📂views
 ┃ ┣ 📂chargeManager
 ┃ ┃ ┣ 📜addChargeManager.js  # 잔돈 충전 화면 추가
 ┃ ┃ ┣ 📜showCoinsInMachine.js  # 자판기 속 동전 보여주기
 ┃ ┃ ┣ 📜showMoneyInMachine.js  # 자판기 속 돈 보여주기
 ┃ ┃ ┗ 📜visibleChargeManager.js  # 잔돈 충전 화면 시각 제어
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜hideAllManager.js  # 헤더 제외 모든 화면 숨김
 ┃ ┃ ┣ 📜insertCoinTypeToTable.js # 동전 타입을 테이블에 삽입
 ┃ ┃ ┣ 📜resetInput.js  # 입력창 리셋
 ┃ ┃ ┣ 📜showAll.js # 데이터 변경 시 새 화면 보여주는 함수들 정리
 ┃ ┃ ┗ 📜visibleManager.js  # 화면 시각 제어 부모 클래스
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜showHeader.js  # 헤더(로고, 메뉴) 화면 추가
 ┃ ┣ 📂productManager
 ┃ ┃ ┣ 📜addProductManager.js # 상품 관리 화면 추가
 ┃ ┃ ┣ 📜showProducts.js  # 전체 상품 보여주기
 ┃ ┃ ┗ 📜visibleProductManager.js # 상품 관리 화면 시각 제어
 ┃ ┗ 📂purchaseManager
 ┃ ┃ ┣ 📜addPurchaseManager.js  # 상품 구매 화면 추가
 ┃ ┃ ┣ 📜showMoneyCustomer.js # 투입된 금액 보여주기
 ┃ ┃ ┣ 📜showProductsAbleToBuy.js # 재고 있는 상품 보여주기
 ┃ ┃ ┣ 📜showReturnCoins.js # 반환되는 동전 보여주기
 ┃ ┃ ┗ 📜visiblePurchaseManager.js  # 상품 구매 화면 시각 제어
 ┗ 📜index.js # 모든 컨트롤러 클래스와 뷰 생성
```
