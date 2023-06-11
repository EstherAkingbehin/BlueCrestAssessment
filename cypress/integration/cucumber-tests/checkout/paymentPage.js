const PaymentService = '#bluecrest-payment-service > iframe'
const cardNumber = '#pas_ccnum'
const expiry = '#pas_expiry'
const ccv = '#pas_cccvc'
const confirmPay = '#rxp-primary-btn'


class PaymentPage {

    Pay(){
        cy.wait(5000)
        cy.get(PaymentService).then($element => {
            const $body = $element.contents().find('body')
            cy.wrap($body).find(cardNumber).type('4242424242424242')
            cy.wrap($body).find(expiry).type('04/42')
            cy.wrap($body).find(ccv).type('424')
            cy.wrap($body).find(confirmPay).should('be.enabled');
        })
    }
    
    

}
export default PaymentPage 