describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  const baseUrl = "../index.html";
  const SELECTOR = {
    COIN_MENU: "#vending-machine-manage-menu",
    COIN_CHARGE_INPUT: "#vending-machine-charge-input",
    COIN_CHARGE_BUTTON: "#vending-machine-charge-button",
    COIN_500: "#vending-machine-coin-500-quantity",
    COIN_100: "#vending-machine-coin-100-quantity",
    COIN_50: "#vending-machine-coin-50-quantity",
    COIN_10: "#vending-machine-coin-10-quantity",
    PRODUCT_MENU: "#product-add-menu",
    PRODUCT_NAME_INPUT: "#product-name-input",
    PRODUCT_PRICE_INPUT: "#product-price-input",
    PRODUCT_QUANTITY_INPUT: "#product-quantity-input",
    PRODUCT_ADD_BUTTON: "#product-add-button",
    PURCHASE_MENU: "#product-purchase-menu",
    PURCHASE_CHARGE_INPUT: "#charge-input",
    PURCHASE_CHARGE_AMOUNT: "#charge-amount",
    PURCHASE_CHARGE_BUTTON: "#charge-button",
    PURCHASE_ITEM_BUTTON: ".purchase-button",
    PURCHASE_ITEM_QUANTITY: ".product-purchase-quantity",
  };

  before(() => {
    Cypress.Commands.add("stubRandomReturns", (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: (window) => {
          window.MissionUtils = {
            Random: {
              pickNumberInList: randomStub,
            },
          };
        },
      });
    });

    Cypress.Commands.add("addProduct", (name, price, quantity) => {
      cy.get(SELECTOR.PRODUCT_NAME_INPUT).type(name);
      cy.get(SELECTOR.PRODUCT_PRICE_INPUT).type(price);
      cy.get(SELECTOR.PRODUCT_QUANTITY_INPUT).type(quantity);
      cy.get(SELECTOR.PRODUCT_ADD_BUTTON).click();
    });
  });

  beforeEach(() => {
    cy.stubRandomReturns([100, 100, 100, 100, 50]);
  });

  it("상품 1개를 구매할 수 있어야 한다.", () => {
    // given
    const name = "콜라";
    const price = 1500;
    const quantity = 20;
    const coinAmount = 450;
    const chargeAmount = 3000;

    // 상품 추가
    cy.get(SELECTOR.PRODUCT_MENU).click();
    cy.addProduct(name, price, quantity);
    cy.addProduct("사이다", 1000, 10);

    // 잔돈 충전
    cy.get(SELECTOR.COIN_MENU).click();
    cy.get(SELECTOR.COIN_CHARGE_INPUT).type(coinAmount);
    cy.get(SELECTOR.COIN_CHARGE_BUTTON).click();

    // 금액 투입
    cy.get(SELECTOR.PURCHASE_MENU).click();
    cy.get(SELECTOR.PURCHASE_CHARGE_INPUT).type(chargeAmount);
    cy.get(SELECTOR.PURCHASE_CHARGE_BUTTON).click();

    // when
    cy.get("[data-product-name='콜라']")
      .parent()
      .find(SELECTOR.PURCHASE_ITEM_BUTTON)
      .click();

    // then
    cy.get(SELECTOR.PURCHASE_CHARGE_AMOUNT).should(
      "have.text",
      chargeAmount - price
    );
    cy.get("[data-product-name='콜라']")
      .parent()
      .find(SELECTOR.PURCHASE_ITEM_QUANTITY)
      .should("have.text", quantity - 1);
    cy.get(SELECTOR.COIN_MENU).click();
    cy.get(SELECTOR.COIN_100).should("have.text", "4개");
    cy.get(SELECTOR.COIN_50).should("have.text", "1개");
  });

  it("잘못된 입력값으로 잔돈 충전을 시도하는 경우 alert이 호출되어야 한다.", () => {
    // given
    const alertStub = cy.stub();
    const invalidInput = -1;

    cy.on("window:alert", alertStub);

    // when
    cy.get(SELECTOR.COIN_MENU).click();
    cy.get(SELECTOR.COIN_CHARGE_INPUT).type(invalidInput);

    // then
    cy.get(SELECTOR.COIN_CHARGE_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});
