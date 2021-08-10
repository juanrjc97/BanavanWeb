//let { defineSupportCode } = require('cucumber');
let {
   Given,
   Then,
   When
 } = require(  "cucumber");

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

  When('I navigate to {string}', function (site) {
    return browser.get(site);
  });

  Then('the title should be {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.eql(title);
  });

  When('I click the Agregar Personal button', function () {
    var docButton = element(by.css('[class="ant-btn ant-btn-primary ant-btn-round"]'));
    return docButton.click();
  });

  Then('I should see a {string} button', function (title) {
    var article = element(by.id('btn-register-user'));
    return expect(article.getText()).to.eventually.eql(title);
  });
