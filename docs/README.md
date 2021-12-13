<h1 align="middle">🥤 자판기</h1>

## 👀 게임 설명
상품을 관리, 잔돈 충전, 상품 구매를 하고 잔돈을 최소 동전 개수로 반환해주는 자판기 게임

## 📃 요구 사항
> 미션으로 주어진 기능 요구사항, 프로그래밍 요구사항을 반영하여 구현할 기능 목록을 만들었습니다.<br>
> 체크박스 이모지를 클릭하면 관련 프로그래밍 요구사항이 나타납니다.

## 💬 &nbsp;기능 목록 상세
<details>
  <summary>✅ &nbsp;index.html</summary>
  <ul>
    <li>스크립트 추가 외에 주어진 index.html파일은 수정할 수 없다.</li>
  </ul>
</details>

- [x] 앱 고정 UI를 구현한다.
- [x] 상품관리 고정 UI를 구현한다.
<details>
  <summary>✅ &nbsp;DOM 선택자 id</summary>
  <ul>
    <h3>탭 메뉴 버튼</h3>
    <li>상품 구매 탭으로 이동하는 메뉴 버튼 id는 product-purchase-menu이다.</li>
    <li>잔돈 충전탭으로 이동하는 메뉴 버튼 id는 `vending-machine-manage-menu`이다.</li>
    <li>상품 관리탭으로 이동하는 메뉴 버튼 id는 product-add-menu이다.</li>
    <br><h3>상품 관리(추가) 메뉴</h3>
    <li>상품 추가 입력 폼의 상품명 입력 요소의 id는 product-name-input이다.</li>
    <li>상품 추가 입력 폼의 상품 가격 입력 요소의 id는 product-price-input이다.</li>
    <li>상품 추가 입력 폼의 수량 입력 요소의 id는 product-quantity-input이다.</li>
    <li>상품 추가하기 버튼 요소의 id는 product-add-button이다.</li>
    <li>추가한 각 상품 요소의 class명은 product-manage-item이며, 하위에 아래 요소들을 갖는다.</li>
    <ul>
      <li>상품명에 해당하는 요소의 class명은 product-manage-name이다.</li>
      <li>가격에 해당하는 요소의 class명은 product-manage-price이다.</li>
      <li>수량에 해당하는 요소의 class명은 product-manage-quantity이다.</li>
    </ul>
    <br><h3>잔돈 충전 (자판기 보유 동전) 메뉴</h3>
    <li>자판기가 보유할 금액을 충전할 요소의 id는 vending-machine-charge-input이다.</li>
    <li>충전하기 버튼에 해당하는 요소의 id는 vending-machine-charge-button이다.</li>
    <li>충전된 금액을 확인하는 요소의 id는 vending-machine-charge-amount 이다.</li>
    <li>보유한 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.</li>
    <ul>
      <li>500원: vending-machine-coin-500-quantity</li>
      <li>100원: vending-machine-coin-100-quantity</li>
      <li>50원: vending-machine-coin-50-quantity</li>
      <li>10원: vending-machine-coin-10-quantity</li>
    </ul>
    <br><h3>상품 구매 메뉴</h3>
    <li>투입 금액 입력 요소의 id는 charge-input이다.</li>
    <li>투입하기 버튼 요소의 id는 charge-button이다.</li>
    <li>투입한 금액을 확인하는 요소의 id는 charge-amount이다.</li>
    <li>반환하기 버튼 요소의 id는 coin-return-button이다.</li>
    <li>반환된 각 동전의 개수에 해당하는 요소의 id는 다음과 같다.</li>
    <ul>
      <li>500원: coin-500-quantity</li>
      <li>100원: coin-100-quantity</li>
      <li>50원: coin-50-quantity</li>
      <li>10원: coin-10-quantity</li>
    </ul>
    <li>각 상품 요소의 class명은 product-purchase-item이고, 하위에 아래 요소들을 갖는다.</li>
    <ul>
      <li>구매 버튼에 해당하는 요소의 class명은 purchase-button이다.</li>
      <li>상품명에 해당하는 요소의 class명은 product-purchase-name이다.</li>
      <li>가격에 해당하는 요소의 class명은 product-purchase-price이다.</li>
      <li>수량에 해당하는 요소의 class명은 product-purchase-quantity이다.</li>
      <li>상품명은 dataset 속성을 사용하고 data-product-name 형식으로 저장한다.</li>
      <li>가격은 dataset 속성을 사용하고 data-product-price 형식으로 저장한다.</li>
      <li>수량은 dataset 속성을 사용하고 data-product-quantity 형식으로 저장한다.</li>
    </ul>
  </ul>
</details>

- [x] 상품관리 탭에서 상품명, 가격, 수량을 입력받아 상품을 추가한다.
  - [x] 상품명이 빈 문자열인지 검사하고 유효하면 trim해서 저장한다.
  - [x] 상품가격이 100 이상이고 10으로 나누어떨어지는지 검사한다.
  - [x] 수량이 1이상인지 검사한다.
  - [x] 상품명이 이미 있는 제품과 중복되는지 검사한다.
  - [x] 유효하지 않으면 alert로 에러 표시한다.
- [x] 추가하기를 하면 input을 빈 문자열로 초기화한다.
- [x] 추가된 목록을 참고하여 상품현황 UI를 업데이트한다.
- [x] 잔돈충전 고정 UI를 구현한다.
- [x] 각 탭 클릭시 뷰 변경을 구현한다.
- [x] 잔돈 충전 탭에서 자판기 동전 충전하기 입력받아 잔돈을 충전한다.
  - [x] 충전 금액이 10원 이상이고 10으로 나누어떨어지는지 검사한다.
- [x] 충전된 금액만큼 무작위로 동전을 생성하여 기존 동전에 추가한다.
<details>
  <summary>✅ &nbsp;랜덤 값 생성</summary>
  <ul>
    <li>랜덤 값 생성은 <a href="https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils"><code>MissionUtils</code> 라이브러리</a>의 <code>Random.pickNumberInList</code>를 사용한다.</li>
  </ul>
</details>

- [x] 상품구매 고정 UI를 구현한다.
- [x] 구매할 수 있는 상품 현황 UI를 보여준다.
- [x] 투입금액 입력값을 받는다.
  - [x] 10 이상이고 10으로 나누어 떨어지는지 검사하고 기존 투입한 금액에 추가한다(최초 0원).
- [x] 투입한 금액 UI를 업데이트한다.
- [x] 구매하기를 하면 투입한 금액 차감, 수량 감소한다.
  - [x] 투입한 금액보다 비싼 상품을 구매하면 에러를 표시한다.
- [x] 투입한 금액과 수량 UI를 업데이트한다.
- [x] 반환하기를 누르면 현재 보유 잔돈으로 동전 개수를 최소로 하여 동전을 차감한다.
  - [x] 보유한 잔돈보다 반환해야할 돈이 많은 경우 최대한으로 반환한다.
  - [x] 반환할 금액이 없는 경우 에러를 표시한다.
- [x] 차감된 동전만큼 UI를 업데이트한다.
