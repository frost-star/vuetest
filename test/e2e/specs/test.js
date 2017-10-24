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
  'case 1': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .setCsvValue('test/e2e/decision_table.csv', 'case1')
      .click('#btn-signup')
      .assert.containsText('#result span', 'success')
      .saveScreenshot('./ss/' + browser.currentTest.name + '.png')
      .end();
  },

};
