# QA Automation Challenge

In order to apply for a QA Automation job position at Aki you'll need to code an automated test for us.

Within this project you will find a test that opens a headless browser, enters to github.com and check its content. In a similar way you will need to code a test that browses to the Marketplace section, searchs for github integrations related with the keyword "test" and performs a snapshot test of the search results.

**Here a video that shows what the test should do**

[![test.gif](https://s33.postimg.cc/55i8rhlv3/test.gif)](https://postimg.cc/image/7mtzyr5rf/)

**Acceptance Criteria**

 - Code the described automated test inside the `/tests` folder.
 - Make sure all tests run sucessfully.
 - Make sure your test implementation is elegant. Code quality will be considered as part of the challenge.

**Submit your test!**

Send us an email to jperez@a.ki and cm@a.ki with the entire project (except for the `node_modules` folder) and we'll reach you out as soon as possible.

## Testing Project

### Requirements
Make sure of install the following requirements before setup the project:
- git
- node v10.9.0
- npm v6.2.0

### Setup
Execute the following commands into a terminal:

```
git clone git@github.com:akiunlocks/qa-automation-challenge.git
cd qa-automation-challenge
npm install
```

### Run the tests
 - `npm run test` Runs the entire test suit once
 - `npm run test:dev` Same than `npm run test` but in watch mode
 - `npm run test:debug` Same than `npm run test` but with headless browser setting turned off

## Useful links
 - https://jestjs.io/docs/en/getting-started
 - https://pptr.dev/
 - https://github.com/smooth-code/jest-puppeteer