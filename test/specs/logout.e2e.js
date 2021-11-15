const LoginPage = require('../pageobjects/login.page');
const Patients = require('../pageobjects/patients')
const Logout = require('../pageobjects/logout.page');

describe('Login to the application', () => {
    it('should login a user and log them out', async () => {
        const username = 'hr.doctor@hospitalrun.io';
        const password = 'HRt3st12'

        await LoginPage.open();

        await LoginPage.login(username, password);
        await expect(Patients.patientListingPage).toBeExisting();
        await expect(Patients.patientListingPage).toHaveTextContaining(
            'Patient Listing');
        await Logout.signout();
        await expect(LoginPage.loginForm).toBeExisting()
        
    });

});