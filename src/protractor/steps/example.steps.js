//let { defineSupportCode } = require('cucumber');
let {
   Given,
   Then,
   When
 } = require(  "cucumber");

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

  // Title web
  When('I navigate to {string}', function (site) {
    return browser.get(site);
  });

  Then('the title should be {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.eql(title);
  });

  // Boton Registrar Personal
  When('I click the Agregar Personal button', function () {
    var docButton = element(by.css('[class="ant-btn ant-btn-primary ant-btn-round"]'));
    return docButton.click();
  });

  Then('I should see a {string} button', function (title) {
    var article = element(by.id('btn-register-user'));
    return expect(article.getText()).to.eventually.eql(title);
  });

   // Go to Solicitudes Page
   When('I click the Solicitudes on the sidebar', function () {
     var docButton = element(by.id('sidebar-solicitud'));
     return docButton.click();
   });

   Then('the title h1 should be {string}', function (title) {
     var article = element(by.id('title-solicitud'));
     return expect(article.getText()).to.eventually.eql(title);
   });

   // Go to Respaldo Page
   When('I click the Respaldo on the sidebar', function () {
     var sidButton = element(by.id('sidebar-respaldo'));
     return sidButton.click();
   });

   Then('the h1 should be {string}', function (title) {
     var h1respaldo = element(by.id('title-respaldo'));
     return expect(h1respaldo.getText()).to.eventually.eql(title);
   });
