const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
    /**
     * define selectors as getter functions
     */

     get username () { return browser.$('#identification')}
     get password () { return browser.$('#password')}
     get loginForm() { return browser.$('div.signin-contents')}
     get submit () { return browser.$('button[type="submit"]')}
     get loginError () { return browser.$('div.alert-danger')}
    
    

       // called to open the login page
    async open() {
        await super.open('login');
    }

    /**
     login using username and password
     */
    async login (username, password) {

        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.submit.click();
    }

}

module.exports = new LoginPage();
