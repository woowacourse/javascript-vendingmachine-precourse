## 구현 기능 목록

### 자판기

-   자판기 타이틀 생성
-   각 탭의 내용을 담을 스켈레톤 생성
-   `상품 관리`, `잔돈 충전`, `상품 구매` 버튼 생성
-   버튼을 누를 때마다 탭 전환시키기
    -   현재 탭을 `localStorage`에 저장하기
    -   초기화할 때마다 `localStorage`에 저장된 가장 최근에 본 탭을 랜더링하기

### 상품 관리 탭

-   초기화 시, 상품 입력 폼과 상품 현황 `html` 랜더링하기
-   랜더링 할 때마다, `localStorage`에 저장된 상품 목록 랜더링하기
-   사용자가 입력한 가격 검증하기
    -   `100`보다 작으면 안됨
        -   ex) `10`, `99`
    -   `10`으로 나누어 떨어지지 않으면 안됨
        -   ex) `111`
-   상품명, 가격, 수량을 입력 받아서 상품 추가하기
    -   같은 상품명이 있을 땐 `alert` 띄우기
        -   가격과 수량의 처리가 애매하기 때문
-   추가한 상품들은 `localStorage`에 저장하기

### 잔돈 충전 탭

-   초기화 시, 동전 충전 폼과 보유 동전 `html` 랜더링하기
-   랜더링 할 때마다, `localStorage`에 저장된 동전 목록을 랜더링하기
-   사용자가 입력한 충전 금액 검증하기
-   사용자가 입력한 충전 금액을 `charge`라 했을 때 `charge - charge % 10`만큼 충전하기
    -   ex) `107` -> `100`, `2137` -> `2130`
-   `charge`를 동전으로 랜덤하게 분배하기
    -   ex) `150` -> `[100, 50]` or `[50, 50, 50]`
-   충전 동전과 보유 금액 `localStorage`에 저장하기
-   충전 동전과 보유 금액 랜더링하기

### 상품 구매 탭

-   초기화 시, 금액 투입 폼, 상품 목록 폼, 잔돈 폼 `html` 랜더링하기
-   랜더링 할 때마다, `localStorage`에 저장된 투입 금액과 상품 목록 랜더링하기
-   사용자가 입력한 금액 검증하기
    -   `0`이하면 안됨
        -   ex) `0`, `-1`
    -   `10`으로 나누어 떨어지지 않으면 안됨
        -   ex) `111`
-   사용자가 투입한 금액이 유효할 때
    -   기존에 있던 투입 금액에 누적해서 `localStorage`에 저장하기
    -   누적한 투입 금액 랜더링하기
-   상품 구매하기
    -   보유 금액보다 상품의 가격이 더 비싸면 `alert` 띄우기
    -   구매 가능하면 차감한 투입 금액과 차감된 상품 목록을 `localStorage`에 업데이트
    -   상품 목록을 통으로 다시 랜더링하기
-   잔돈 반환하기
    -   그리디하게 제일 값이 큰 동전부터 채워서 반환하기
    -   반환된 동전 값만큼 투입 금액과 보유 동전 목록을 차감하고
        차감된 투입 금액과 자판기 보유 동전 목록을 `localStorage`에 업데이트

## 프로젝트 구조

![image](https://user-images.githubusercontent.com/38878617/145949612-6c9bdcf5-54da-4e7c-8650-c3e0fe2f41ce.PNG)

## 디렉터리 구조

```
C:.
|   index.js
|
\---app
    |   index.js
    |
    +---asset
    |   +---components
    |   |   |   index.js
    |   |   |
    |   |   +---BeverageIcon
    |   |   |       index.js
    |   |   |       Style.js
    |   |   |
    |   |   +---Button
    |   |   |       ButtonByClassName.js
    |   |   |       ButtonById.js
    |   |   |       index.js
    |   |   |
    |   |   +---Cell
    |   |   |       CellByClassName.js
    |   |   |       CellByClassNameAndDataset.js
    |   |   |       CellById.js
    |   |   |       index.js
    |   |   |       Style.js
    |   |   |
    |   |   +---CoinTable
    |   |   |       index.js
    |   |   |
    |   |   +---Input
    |   |   |       index.js
    |   |   |       InputNumber.js
    |   |   |       InputText.js
    |   |   |       Style.js
    |   |   |
    |   |   +---MainTitle
    |   |   |       index.js
    |   |   |       Style.js
    |   |   |
    |   |   +---Row
    |   |   |       CoinRow.js
    |   |   |       index.js
    |   |   |       InventoryBodyRow.js
    |   |   |       InventoryHeadRow.js
    |   |   |       PurchaseBodyRow.js
    |   |   |       PurchaseHeadRow.js
    |   |   |       RowByClassName.js
    |   |   |
    |   |   +---Span
    |   |   |       index.js
    |   |   |
    |   |   +---SubmitForm
    |   |   |       index.js
    |   |   |
    |   |   +---SubTitle
    |   |   |       index.js
    |   |   |       Style.js
    |   |   |
    |   |   \---Table
    |   |           index.js
    |   |           Style.js
    |   |
    |   +---constants
    |   |       BEVERAGE_ICON_PATH.js
    |   |       BUTTON.js
    |   |       CHANGE_COIN_ID.js
    |   |       COINS.js
    |   |       COIN_ID.js
    |   |       ERROR_MSG.js
    |   |       GUIDE.js
    |   |       index.js
    |   |       INPUT_ID.js
    |   |       INPUT_ITEM.js
    |   |       INPUT_NUMBER_RULE.js
    |   |       STORAGE_KEY.js
    |   |       SUB_TITLE_TEXT.js
    |   |       TABLE_CELL_CLASS_NAME.js
    |   |       TABLE_CELL_DATASET.js
    |   |       TABLE_ROW_CLASS_NAME.js
    |   |       TABLE_TITLE.js
    |   |       TAP.js
    |   |       UNIT.js
    |   |       VENDING_MACHINE_TITLE.js
    |   |
    |   +---util
    |   |       calcCoinAmount.js
    |   |       getDistributedCoinGreedily.js
    |   |       getDistributedCoinRandomly.js
    |   |       getEnableChargeAmount.js
    |   |       index.js
    |   |
    |   \---validation
    |           checkChargeAmount.js
    |           checkInputAmount.js
    |           checkProductName.js
    |           checkProductPrice.js
    |           checkProductQuantity.js
    |           common.js
    |           index.js
    |
    +---controller
    |       ChargeCoin.js
    |       Inventory.js
    |       Purchase.js
    |       VendingMachine.js
    |
    +---localStorage
    |       coin.js
    |       common.js
    |       index.js
    |       inputAmount.js
    |       inventory.js
    |       tap.js
    |
    \---view
            ChargeCoinTap.js
            InventoryTap.js
            PurchaseTap.js
            Tap.js
            VendingSkeleton.js
```
