const title = '#title'
const FirstName = '#first_name'
const LastName = '#last_name'
const day = '#days'
const month = '#months'
const year = '#years'
const gender = '#sex'
const EmailAddress = '#email'
const mobile = '#phone_number'
const password = '#password'
const postcode = '#postcode'
const AddressLine1 = '#user_address1'
const town = '#user_town'
const TnC = '#terms'
const privacyPolicy = 'input[name="privacy"]'
const ContinueCheckout = '#checkoutContinueButton'

import {faker} from '@faker-js/faker'


class PersonalDetailsPage{
    EnterPersonalDetails(){
        cy.get(title).select("Mr").invoke("val").should("eq", "Mr");
        cy.wait(1000);
        cy.get(FirstName).type(faker.person.firstName());
        cy.get(LastName).type(faker.person.lastName());
        cy.get(day).type('06')
        cy.get(month).type('12')
        cy.get(year).type('1986')
        cy.get(gender).select("Female").invoke("val").should("eq", "Female");
        cy.get(EmailAddress).type(faker.internet.email()).invoke('val').then(email => {
            const confirmEmail = email;
            cy.log(confirmEmail);
            cy.get('#email_confirm').type(confirmEmail)
        })
        cy.get(mobile).type(faker.phone.number('079########'));
        cy.get(password).type('.'+ faker.internet.password()).invoke('val').then(password => {
            const confirmPassword = password;
            cy.log(confirmPassword);
            cy.get('#password_confirm').type(confirmPassword)
        })
    }

    EnterAddress(){
        cy.get(postcode).type('DA16 1RT');
        cy.get(AddressLine1).type('38b Parkview Road') ;
        cy.get(town).type('welling');
    }

    MandatoryCheckboxes(){
    cy.get(TnC).check();
    cy.get(privacyPolicy).check();
    cy.wait(1000);
    }

    submitDetails(){
    cy.get(ContinueCheckout).click();
    cy.wait(20000)
    }



}
export default PersonalDetailsPage