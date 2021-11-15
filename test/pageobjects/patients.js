const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PatientListing extends Page {
    /**
     * define selectors using getter methods
     */
    get patientListingPage() {
        return $('h1.view-current-title');
    }
}

module.exports = new PatientListing();
