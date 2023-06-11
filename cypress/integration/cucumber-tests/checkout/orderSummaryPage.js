const checkout = '#checkoutContinueButton'

class OrderSummaryPage{
    Checkout(){
        cy.get(checkout).click();
        cy.wait(2000);
    }
}

export default OrderSummaryPage
