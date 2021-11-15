# HospitalRun
These are the test cases to test the 'HospitalRun' website. Built on webdriverIO, browserstack and allure report generator

## How to install and run
Clone the folder into your local machine and execute the following commands. Ensure you have a browserstack username and access key to be able to switch browsers and platforms on Browserstack 
1. `npm install` to install all the dependencies
2. `npx wdio run wdio.conf.js` to run all the test cases . To run a specific test case , use the --spec flag like so `npx wdio run wdio.conf.js --spec ./test/specs/logout.e2e.js`
3. Once the tests are done running, you can check the results on your browserstack dashboard. 
4. To integrate browserstack, all you need to do is set your username and access key as environment variables. e.g in Mac `export BROWSERSTACK_USERNAME='your_username'`
5. Once the tests are done, you should be able to see this on browserstack with an attached recording of the execution.![Screenshot 2021-11-15 at 13 04 37](https://user-images.githubusercontent.com/63429298/141762504-f7005bdc-afa8-4713-b72c-52ba3b663d1b.png)

6.To generate an allure report for the completed test cases, run the following command `allure generate allure-results && allure open`


## Issues
1. Please check the Issues tab to see reported bugs in the test cases
2. I am still working on the ability to switch the browsers in the command line

## Note
To switch capabilities, i.e Browsers and Device OS types, you can simply edit/add the capability in the `wdio.conf.js` file. Currently, it picks up the last capability on the list and uses only that.
