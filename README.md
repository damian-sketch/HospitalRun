# HospitalRun
This the a Selenium framework used to test the 'HospitalRun' website. Built on webdriverIO, browserstack and allure report generator

## How to install and run
Clone the folder into your local machine and execute the following commands. Ensure you have a browserstack username and access key to be able to switch browsers and platforms on Browserstack 
1. `npm install` to install all the dependencies
2. `npx wdio run wdio.conf.js` to run all the test cases . To run a specific test case , use the --spec flag like so `npx wdio run wdio.conf.js --spec ./test/specs/logout.e2e.js`
3. You can configure the `capabilities` in the config file to either run the tests on your local browser or on BrowserStack. Supported capabilites are commented out, all you need to do is uncomment depending on what you want to use.
4. To integrate browserstack, all you need to do is set your username and access key as environment variables. e.g in Mac `export BROWSERSTACK_USERNAME='your_username'`, `export BROWSERSTACK_ACCESS_KEY='your_access_key'`
5. Once the tests are done, you should be able to see this on browserstack with an attached recording of the execution.
![Screenshot 2021-11-15 at 13 04 37](https://user-images.githubusercontent.com/63429298/141762504-f7005bdc-afa8-4713-b72c-52ba3b663d1b.png)

6.To generate an allure report for the completed test cases, run the following command `npm run report`
* This step action also generates a screenshot of the last step if a test was successful and stores it in the root directory

7. Using the terminal, you can switch browsers on Windows OS in BrowserStack easily between chrome and firefox. Follow these steps for MacOs users:
    * Install gsed for `brew install gnu-sed`
    * Run the chrome/firefox script depending on which browser you want to switch to `npm run firefox` or `npm run chrome`
    * Run the test cases as per step 2
    *
    
 8. For windows or linux, you can use any text finder and replacer and modify the `chrome` and `firefox` scripts in `package.json` accordingly.

## Issues


## Note
To switch capabilities, i.e Browsers and Device OS types, you can add the capability you want in the `wdio.conf.js` file. Currently, it picks up the last capability on the list and uses only that if multiple options are provided.
