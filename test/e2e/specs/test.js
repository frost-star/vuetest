// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  //'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
  //   const devServer = browser.globals.devServerURL;
  //
  //   browser
  //     .url(devServer)
  //     .waitForElementVisible('#app', 5000)
  //     .assert.elementPresent('.hello')
  //     .assert.containsText('h1', 'Welcome to Your Vue.js App')
  //     .assert.elementCount('img', 1)
  //     .end();
  // },
  'case1': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'success')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },
  'case2': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'success')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },
  'case3': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'error')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },
  'case4': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'error')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },
  'case5': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'error')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },
  'case6': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'error')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },
  'case7': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', browser.currentTest.name)
      .click('#btn-signup')
      .assert.containsText('#result span', 'error')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },

};
