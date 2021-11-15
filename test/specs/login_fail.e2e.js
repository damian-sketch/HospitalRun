const LoginPage = require('../pageobjects/login.page');

describe('Not Login to the application', () => {
    it('should not login with invalid credentials', async () => {
        const username = 'wrongtest@hospitalrun.io';
        const password = 'wrongpass'
    
            await LoginPage.open();
    
            await LoginPage.login(username, password);
            await expect(LoginPage.loginError).toBeExisting();
            await expect(LoginPage.loginError).toHaveTextContaining(
                'Username or password is incorrect');
    })
})