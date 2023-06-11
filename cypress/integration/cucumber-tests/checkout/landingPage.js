const url = "https://www.bluecrestwellness.com/"

class LandingPage{
    visiturl(){
        cy.visit(url);
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(20000);
    }
    accepectprivacy(){
        cy.contains('I Accept').click();
    }
    closePromotionModal(){
        cy.get('body').then($body => {
            if ($body.find('button[title="Close"]').length > 0) {
                cy.get('button[title="Close"]').click();
            } else {
                assert.isOk('Promotional Modal','No Show');
                cy.wait(1000);
            }
        })
    }
    openPackages(){
        cy.wait(2000);
        cy.contains('View All Health Checks').click();
    }

}


export default LandingPage