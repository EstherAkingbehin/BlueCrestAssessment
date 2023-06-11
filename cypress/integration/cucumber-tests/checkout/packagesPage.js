const findPackage = '.packages-block_packageWrapper__waVtF'
const addToCart = 'button[aria-label="Book now"]'

class PackagesPage {


    addOrderToCart(){
    cy.get(findPackage).eq(0);
    cy.get(addToCart).eq(4).click();
    }


}
export default PackagesPage