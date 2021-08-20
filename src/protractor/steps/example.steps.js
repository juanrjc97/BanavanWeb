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
    var btn_register = element(by.id('btn-register-user'));
    return expect(btn_register.getText()).to.eventually.eql(title);
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

   Then('the Backup button should be {string}', function (title) {
     var btnBackUp = element(by.buttonText('Realizar respaldo'));
     return expect(btnBackUp.getText()).to.eventually.eql(title);
   });

   // Edit ribbon
   When('I click the Edit on the first row on table in Ribbon Table', function () {
     var buttonEdit = element(by.className('editRibbon-1'));
     return buttonEdit.click();
   });

   Then('the button save should be {string}', function (title) {
     var btnSave = element(by.css('[nztype="save"]'));
     return expect(btnSave.getAttribute('nztype')).to.eventually.eql(title);
   });

   Then('the button cancel should be {string}', function (title) {
     var btnCancel = element(by.css('[nztype="close-circle"]'));
     return expect(btnCancel.getAttribute('nztype')).to.eventually.eql(title);
   });

   Then('the color input should be {string}', function (title) {
     var inputRibbon = element(by.className('inputRibbon-1'));
     return expect(inputRibbon.getAttribute('value')).to.eventually.eql(title);
   });

   // Go to reports of harvested bunches
   When('I navigate to ReporteRacimo {string}', function (site) {
     return browser.get(site);
   });

   Then('the title should show the present year {string}', function (title) {
     let lastH1 = element.all(by.css('h1')).last();
     return expect(lastH1.getText()).to.eventually.eql(title);
   });

   Then('the Racimo graphic should be {string}', function (title) {
     let report = element(by.className('graphic-harvested-bunches'));
     return expect(report.getAttribute('class')).to.eventually.eql(title);
   });

   Then('the name of the filter button should be {string}', function (title) {
     let btnFiltrar = element(by.buttonText('Filtrar'));
     return expect(btnFiltrar.getText()).to.eventually.eql(title);
   });

   // Go to reports of sheated bunches
   When('I navigate to ReporteEnfundado {string}', function (site) {
     return browser.get(site);
   });

   Then('the Enfundado graphic should be {string}', function (title) {
     let report = element(by.className('graphic-sheated-bunches'));
     return expect(report.getAttribute('class')).to.eventually.eql(title);
   });

   Then('the name of the filter text should be {string}', function (title) {
     return expect(element(by.tagName('p')).getText()).to.eventually.eql(title);
   });
