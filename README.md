<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-vendingmachine-precourse/blob/main/images/beverage_icon.png?raw=true"/>
</p>
<h1 align="middle">nan-noo's 자판기</h1>

## 구현 기능 목록

### 탭

- [x] 상단 탭 버튼 구현: 상품 관리, 잔돈 충전, 상품 구매
- [x] 탭 버튼마다 다른 화면 보이기
- [ ] 다른 탭으로 이동했다 돌아와도 상태 유지
- [ ] 새로고침하면 가장 최근 작업 정보 불러오기: localStorage

### 상품 관리

- [ ] 최초 진입 시 상품 목록 비워두기
- [x] 상품명, 가격, 수량 입력 받기
- [x] 입력값이 옳은지 확인: 빈문자열x, 100이상 10배수, 1이상 정수
- [x] 옳바르지 않은 입력값이면 alert 메세지
- [x] 추가된 상품 목록 화면에 표시

### 잔돈 충전

- [ ] 최초 상태: 자판기 보유 금액 0원, 각 동전 개수 0개
- [x] 자판기 충전 금액 입력 받기: 충전하기 버튼
- [x] 10의 배수 0 초과인 지 확인, 아니면 alert
- [x] 충전된 금액 화면에 보이기
- [x] 누적 충전도 화면에 보이기
- [x] 보유금액만큼 동전 무작위 생성
- [x] 누적 충전 시 추가 금액만큼 동전 무작위 생성
- [ ] 기존 동전에 추가 동전 개수 더하기
- [ ] 무작위 생성된 동전 개수 화면에 보이기

### 상품 구매

- [ ] 최초 상태: 충전 금액 0원, 각 동전 개수 0개
- [ ] 투입할 금액 입력 받기: 누적 가능
- [ ] 금액이 10의 배수인지 확인
- [ ] 자판기 보유 금액 화면에 보이기
- [ ] 구매할 수 있는 상품 목록 보이기
- [ ] 상품 구매시 수량 감소
- [ ] 상품 구매시 자판기 보유 금액 감소
- [ ] 잔돈 반환하기: 현재 보유한 최소 개수의 동전으로
- [ ] 잔돈을 반환할 수 있는지 확인
- [ ] 잔돈을 반환할 수 없으면, 잔돈으로 반환할 수 있는 금액만 반환
- [ ] 동전 개수 화면에 표시

## 🎯 자판기 기능

반환되는 동전이 최소한이 되는 자판기

### 1) 탭

상단에 `탭`메뉴가 존재하며 각 탭에 따라 적절한 기능을 수행한다.

- `상품 관리`탭은 자판기가 보유하고 있는 **상품을 추가**하는 기능
- `잔돈 충전`탭은 **자판기가 보유할 금액을 충전**하는 기능
- `상품 구매`탭은 사용자가 **금액을 투입**할 수 있으며, 투입한 금액에 맞춰 **상품을 구매**하고, 남은 금액에 대해서는 **잔돈을 반환**하는 기능

### 2) 상품 관리 탭

- 상품명, 가격, 수량을 입력해 상품을 추가할 수 있다.
  - 상품 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 한다.
- 사용자는 추가한 상품을 확인할 수 있다.

### 3) 잔돈 충전 탭 (자판기 보유 동전)

- 잔돈 충전 입력 요소에 충전할 금액을 입력한 후, `충전하기` 버튼을 눌러 자판기 보유 금액을 충전할 수 있다.
- 자판기 보유 금액을 누적하여 충전할 수 있다. 추가 충전 금액만큼의 동전이 무작위로 생성되어 기존 동전들에 더해진다.

### 4) 상품 구매 탭

- 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, `투입하기`버튼을 이용하여 금액을 투입한다.
  - 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
- 금액은 누적으로 투입할 수 있다.
- 사용자는 `반환하기` 버튼을 통해 잔돈을 반환 받을 수 있다.

**상품 구매 > 잔돈 계산 모듈**

`상품 구매` 탭에서 잔돈 반환 시 다음과 같은 규칙을 통해 잔돈을 반환한다.

- 잔돈을 돌려줄 때는 현재 보유한 최소 개수의 동전으로 잔돈을 돌려준다.
- 지폐를 잔돈으로 반환하는 경우는 없다고 가정한다.
- 잔돈을 반환할 수 없는 경우 잔돈으로 반환할 수 있는 금액만 반환한다.
- 동전의 개수를 나타내는 정보는 `{개수}개` 형식으로 나타낸다.

---

### 💻 실행 결과 예시

#### 상품 관리

<img src="./images/vendingmachine_inventory.gif" width="400" />

#### 잔돈 충전

<img src="./images/vendingmachine_coin.gif" width="400" />

#### 상품 구매 및 잔돈 반환

<img src="./images/vendingmachine_purchase.gif" width="400" />

---

### 라이브러리

- 잔돈을 무작위로 생성하는 기능은 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInList`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

---

### ✔️ 테스트 실행 가이드

- 테스트 실행에 필요한 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
// {폴더 경로}/javascript-vendingmachine-precourse/ 에서
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
// {폴더 경로}/javascript-vendingmachine-precourse/ 에서
npm run test
```

- 아래와 같은 화면이 나오며 모든 테스트가 pass한다면 성공!

![테스트 결과](./images/test_result.png)
