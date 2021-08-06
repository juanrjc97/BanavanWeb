const { element } = require("protractor");

/*describe('Banavan Web App', function () {
  it('Should have a title', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard');

    expect(browser.getTitle()).toEqual('BanavanWeb');
  });
});*/

describe('Personal Banavan', function name() {
  it('should add new personal', function () {
        browser.get('https://bananaweb.herokuapp.com/dashboard');        
        element(by.partialButtonText("Agregar")).click();
        element(by.id('nombres')).sendKeys("Sofia");
        element(by.id('apellidos')).sendKeys("Miranda");
        element(by.id('cedula')).sendKeys("0982121212");
        element(by.id('email')).sendKeys("sofia@gmail.com");
        element(by.className('ant-select-selection-search-input')).sendKeys("Gerente");
        element(by.id('nickname')).sendKeys("sofita12");
        element(by.id('contrasena')).sendKeys("123456");
        element(by.id('checkPassword')).sendKeys("123456");
        element(by.partialButtonText("Registrar")).click();
        
        expect(element(by.id('swal2-title')).getText()).toEqual("Personal Agregado");
    
  });  
});

/*
describe('Protractor Demo App', function () {
  it('should add one and two', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
    toEqual('5'); // This is wrong!
  });
});*/