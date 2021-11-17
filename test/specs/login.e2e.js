const LoginPage = require('../pageobjects/login.page');
const Patients = require('../pageobjects/patients')

describe('Login to the application', () => {
    it('should login with valid credentials', async () => {
        const username = 'hr.doctor@hospitalrun.io';
        const password = 'HRt3st12'

        // open the login page
        await LoginPage.open();

        // perform the login actions
        await LoginPage.login(username, password);

        // assert that Patient Listing page and header are visible
        await expect(Patients.patientListingPage).toBeExisting();
        await expect(Patients.patientListingPage).toHaveTextContaining(
            'Patient Listing');
    });

});


