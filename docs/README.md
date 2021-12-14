<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">자판기</h1>

## 🎯 구현할 기능 목록

```
- docs
  |- README.md : 구현할 기능 목록 파일
- src
  |- app.js : 자판기 탭 메뉴 버튼 연결 클래스
  |- view
  |   |- tapView.js : 자판기 탭 메뉴 버튼을 표시하는 클래스
  |   |- adminView.js : 상품 관리 탭을 표시하는 클래스
  |   |- chargeView.js : 잔돈 충전 탭을 표시하는 클래스
  |   |- purchaseView.js : 상품 구매 탭을 표시하는 클래스
  |- Model
  |   |- adminModel.js : 상품 관리 탭에 필요한 데이터를 저장하는 클래스
  |   |- chargeModel.js : 잔돈 충전 탭에 필요한 데이터를 저장하는 클래스
  |   |- purchaseModel.js : 상품 구매 탭에 필요한 데이터를 저장하는 클래스
  |- Controller
  |   |- adminController.js : 상품 관리 탭의 데이터를 View에 연결
  |   |- chargeController.js : 잔돈 충전 탭의 데이터를 View에 연결
  |   |- purchaseController.js : 상품 구매 탭의 데이터를 View에 연결
  |- constants
      |- constants.js : 상수 선언 파일
```

### 1. 자판기 View

- 자판기 타이틀 표시
- 탭 버튼 표시

### 2. 상품 관리

- 상품명 입력 받기
- 가격 입력 받기
  - 최소 100원 이상
  - 10 원으로 나누어 떨어질 것
- 수량 입력 받기
  - 자연수만 입력 가능
- 추가하기 버튼
  - 위의 조건들을 만족하면 localStorage에 추가
- 상품 현황
  - localStorage에 저장된 상품들을 표시

### 3. 잔돈 충전

- 충전할 금액 입력 받기
  - 최소 10원 이상
  - 10원으로 나누어 떨어질 것
- 충전하기 버튼
  - 위의 조건을 만족하면 localStorage에 저장된 보유 금액에 추가
- 동전 생성
  - MissionUtils 라이브러리 사용
  - 충전한 금액만큼의 동전을 랜덤으로 생성
  - 금액이 큰 순으로 랜덤 생성하고 10원으로 부족한 금액 추가하기
- 보유금액 표시
  - localStorage에 저장된 보유 금액 표시

### 4. 상품 구매

- 투입 금액 입력
  - 최소 10원 이상
  - 10원으로 나누어 떨어질 것
- 투입하기 버튼
  - 위 조건을 만족하면 localStorage에 투입 금액 추가
- 투입한 금액 표시
  - localStorage에 저장된 투입 금액 표시
- 구매할 수 있는 상품현황 표시
  - localStorage에 저장된 상품 표시
  - 구매하기 버튼 누르면 투입 금액, 상품 수량 차감

### 5. 잔돈 계산

- 반환하기 버튼 클릭
  - 현재 보유한 동전들 중 최소의 동전을 반환
  - 동전 수가 부족하면 부족한 금액으로 반환
  - 반환한 동전 결과 표시

### 6. 예외사항 추가

- 이미 같은 이름의 물건이 등록되어있는 경우
- 반환할 잔돈이 없는 경우
