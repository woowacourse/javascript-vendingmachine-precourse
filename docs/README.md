## 📌 구현할 기능 목록

1. 상품관리

- 상품명 입력받기
  - [예외] 빈칸 또는 모두 공백으로 입력 되지 않도록
- 가격 입력받기
  - [예외] 100원 이상이어야 한다.
  - [예외] 10원으로 나누어 떨어져야 한다.
- 수량 입력받기
  - [예외] 자연수만 입력 받아야 한다.
- [예외] 같은 제품에 다른 가격일 수 없다.
- [예외] 같은 제품을 등록하면 기본 제품에 수량을 더해준다.
- "상품 추가하기" 클릭 시 상품 현황에 보여주기
  - 입력창 비우기
- localStorage에 등록

2. 잔돈 관리

- 잔돈 입력받기
  - [예외] 10원으로 나누어 떨어져야 한다.
  - [예외] 0원이면 안 된다.
- "충전하기" 클릭 시 보유 금액 증가
  - 최초 보유금액 0원.
  - 자판기가 보유한 동전 출력
    - 최초 보유 동전 0개
    - 자판기 보유 금액만큼의 동전이 무작위로 생성

3. 상품 구매 탭

a. 금액 투입

- 금액 입력받기
  - [예외] 10원으로 나누어 떨어지는 금액만 투입 가능
  - [예외] 0원이면 안 된다.
- "투입하기" 클릭 시 투입한 금액 증가

b. 구매할 수 있는 상품 현황

- 상품 현황 보여주기
- "구매하기" 클릭 시, 투입 금액 차감 & 수량 차감
  - [예외] 투입한 금액 < 상품 가격 일 때, alert
  - [예외] 수량이 0이 되면, 리스트에서 없애서 구매하기가 안되도록 하기

c. 잔돈 반환

- 반환하기 클릭 시, 투입금액 차감 & 잔돈 생성 & 자판기 동전 차감 & 자판기 보유 금액 차감
  - 투입금액 > 자판기 보유 금액 -> 보유금액 만큼만 차감
  - 최소 개수의 동전으로 잔돈 생성

4. nav 탭 기능

- 각 view의 load 함수 실행하여 데이터 최신화
- load 시, 탭1만 떠있도록

<br>

## 리팩터링 목록

- 함수 분리
- 로컬스토리지 관리
- controller와 model 역할 분리

<br>

## 🎬 프로젝트 시연

![화면 기록 2021-12-14 오전 12 46 36](https://user-images.githubusercontent.com/24906022/145843856-041fc29c-510a-4506-bdfa-3f42e9a7a5df.gif)

![화면 기록 2021-12-14 오전 12 49 32](https://user-images.githubusercontent.com/24906022/145844129-355a18d9-e819-4b9e-9f2b-006de53a08b4.gif)

![화면 기록 2021-12-14 오전 12 50 57](https://user-images.githubusercontent.com/24906022/145844775-65521ef8-1ab0-4cd0-abbe-bfccf1db12f1.gif)

<br>

## 📂 디렉토리 구조

```sh
┣ src
┃   ┣ controller
┃   ┃ ┣ BuyController.js
┃   ┃ ┣ ChargeController.js
┃   ┃ ┗ ProductController.js
┃   ┣ model
┃   ┃ ┗ VendingMachineModel.js
┃   ┣ utils
┃   ┃ ┣ constant.js
┃   ┃ ┣ DOM.js
┃   ┃ ┣ template.js
┃   ┃ ┗ validator.js
┃   ┣ view
┃   ┃ ┣ BuyView.js
┃   ┃ ┣ ChargeView.js
┃   ┃ ┣ CoreView.js
┃   ┃ ┗ ProductView.js
┃   ┗ index.js
┣ docs
┃   ┗ README.md
┣ .eslintrc.json
┣ .prettierrc.json
┗ index.html
```

<br>

## ⚒️ About skills

- eslint + prettier
- MVC 패턴으로 클래스 분리
- JavaScript NHN 코딩 컨벤션 준수
