const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

class LogoutPage extends Page {
    get cogweel () { return browser.$('a.settings-trigger')}
    get logout () { return browser.$('a.logout')}

    async signout() {
        await this.cogweel.click();
        await this.logout.click()
    }
}

module.exports = new LogoutPage();4