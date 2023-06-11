const searchbar  = '#address-search'
const search = '#address-search-btn'
const availability = '.see-venue-availability'
const day = '.btn_day'
const time = '.available_time_card >'
const reserve = '.submit-reservation' 

class AppointmentPage{

    EnterLocation(){
    cy.get(searchbar).type('SE14 5DL');
    //Select location dropdown
    cy.get('.pac-container').find('.pac-item').click();
    //press Enter key to search location
    cy.get(search).click();
    }

    pickVenueNDate(){
    //select venue
    cy.wait(50000);
    cy.get(availability).eq(3).click();
    cy.get(day).eq(0).click();
    cy.get(time).eq(0).click();
    cy.get(reserve).filter(':visible').click();
    }
    




}
export default AppointmentPage