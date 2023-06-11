import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import LandingPage from './landingPage';
import PackagesPage from './packagesPage';
import AppointmentPage from './appointmentPage';
import OrderSummaryPage from './orderSummaryPage';
import PersonalDetailsPage from './personalDetailsPage';
import PaymentPage from './paymentPage';

const landingPage = new LandingPage()
const packagesPage = new PackagesPage()
const appointmentPage = new AppointmentPage()
const orderSummaryPage = new OrderSummaryPage()
const personalDetailsPage = new PersonalDetailsPage()
const paymentPage = new PaymentPage()


Given ( 'I am on Bluecrest site', () => {
        landingPage.visiturl();
        landingPage.accepectprivacy();
        landingPage.closePromotionModal();
        landingPage.openPackages();
        
});


When('I add an item to the cart', () => {
        packagesPage.addOrderToCart()

})
         

Then('I should be able to checkout successfully', () => {
        appointmentPage.EnterLocation();
        appointmentPage.pickVenueNDate();
        orderSummaryPage.Checkout()
        personalDetailsPage.EnterPersonalDetails();
        personalDetailsPage.EnterAddress();
        personalDetailsPage.MandatoryCheckboxes();
        personalDetailsPage.submitDetails();
        paymentPage.Pay(); 


       

});
