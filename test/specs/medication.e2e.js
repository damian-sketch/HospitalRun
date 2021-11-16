const LoginPage = require('../pageobjects/login.page');
const Patients = require('../pageobjects/patients')
const Medication = require('../pageobjects/medication.page')
const moment = require('moment')

describe('Request a medication', () => {
    it('should request a medication for a logged in user', async () => {

        // generate a random number between a provided range
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        
        }

        // input data 
        const username = 'hr.doctor@hospitalrun.io';
        const password = 'HRt3st12'
        const patient = 'Test Patient - P00201'
        const medication = 'Pramoxine - m00005'
        const prescription = 'Testing prescription'
        const date = moment().subtract(1, 'days').format('L');
        const quantity = getRandomInt(1,5);
        const refills = getRandomInt(5,10);

        await LoginPage.open();

        // login the user
        await LoginPage.login(username, password);
        await expect(Patients.patientListingPage).toBeExisting();
        
        // request new medication
        await Medication.fillData(patient, medication, prescription, date, quantity, refills);
        await expect(Medication.savedPopup).toBeExisting()
        await expect(Medication.crossIcon).toBeExisting()
        await expect(Medication.okBtn).toBeExisting()
        await Medication.acceptDialog();
        await expect(Medication.updateBtn).toBeExisting()
    });

});