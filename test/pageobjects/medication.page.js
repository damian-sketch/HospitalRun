const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class MedicationPage extends Page {
    /**
     * define selectors as getter functions
     */

     get medication () { return browser.$('=Medication')}
     get requests () { return browser.$('=Requests')}
     get completed () { return browser.$('=Completed')}
     get newRequest () { return browser.$('=New Request')}
     get returnMedication () { return browser.$('=Return Medication')}
     get patient () { return browser.$('//input[contains(@id, "patient")]')}
     get patientOption () { return browser.$('div.tt-suggestion')}
     get medicationInput () { return browser.$('//input[contains(@id, "inventory")]')}
     get medicationOption () { return browser.$('div.tt-dataset.tt-dataset-1')}
     get prescription () { return browser.$('//textarea[contains(@id, "prescription")]')}
     get prescriptionDate () { return browser.$('//input[contains(@id, "prescription")]')}
     get quantity () { return browser.$('//input[contains(@id, "quantity")]')}
     get refills () { return browser.$('//input[contains(@id, "refills")]')}
     get visit () { return browser.$('//select[contains(@id, "visit")]')}
     get addBtn () { return browser.$('button=Add')}
     get savedPopup () { return browser.$('div.modal-content')}
     get crossIcon () { return browser.$('button.close')}
     get okBtn () { return browser.$('button=Ok')}
     get updateBtn () { return browser.$('button=Update')}
    
       // called to open the login page
    async open() {
        await super.open('login');
    }

    /**
     fill the patient form data
     */
    async fillData (patient, medication, prescription, date, quantity, refills) {

        await this.medication.click();
        await this.newRequest.click();
        await this.patient.click()
        await browser.pause(3000)
        await this.patient.keys(patient);
        await browser.pause(3000)
        await this.patient.keys(' - P00')
        await browser.pause(3000)
        await this.patient.keys('201') // this is done to mimic human typing and generate the dropdown list of users
        await this.patientOption.click() 
        await this.medicationInput.click()
        await this.medicationInput.keys(medication);
        await browser.pause(3000)
        await this.medicationOption.click()
        await this.prescription.setValue(prescription);
        await this.prescriptionDate.setValue(date);
        await this.quantity.click();
        await this.quantity.setValue(quantity);
        await this.refills.click();
        await this.refills.setValue(refills);
        await this.visit.click();
        await browser.pause(5000) // wait time for the options in the dropdown to load
        await this.visit.selectByIndex(1);
        await this.addBtn.click();
    }

    // accept the popup dialog
    async acceptDialog () {
        await this.okBtn.click()
    }

}

module.exports = new MedicationPage();
