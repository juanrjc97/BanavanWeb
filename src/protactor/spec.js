const { element } = require("protractor");

describe('Banavan Web App', function () {
  it('Should have a title', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard');

    expect(browser.getTitle()).toEqual('BanavanWeb');
  });
});

describe('Section Banavan', function name() {
  it('should go to Cinta section', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard');
    element(by.className("ant-menu-submenu-title")).click();
    element(by.linkText('Cinta')).click();

    let first = element.all(by.css('h1')).last();
    expect(first.getText()).toBe('Lista de Cintas');
  });

  it('should go to Lote section', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard');
    element(by.className("ant-menu-submenu-title")).click();
    element(by.linkText('Lote')).click();

    let first = element.all(by.css('h1')).last();
    expect(first.getText()).toBe('Visualizar Lotes');
  });

  it('should go to Lote section', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard');
    element(by.className("ant-menu-submenu-title")).click();
    element(by.linkText('Semana')).click();

    let first = element.all(by.css('h1')).last();
    expect(first.getText()).toBe('Lista de las Semanas Laborables');
  });

  it('should go to User section', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard');
    element(by.linkText('Personal')).click();

    let first = element.all(by.css('h1')).last();
    expect(first.getText()).toBe('Lista de Personal');
  });
});


describe('New Register Banavan', function name() {
  it('should add new lote', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard/lote');
    element(by.partialButtonText("Agregar")).click();

    element(by.id('idSemana')).sendKeys("13");
    element(by.id('superficie')).sendKeys("220000");
    element(by.partialButtonText("Crear")).click();

    expect(element(by.id('swal2-title')).getText()).toEqual("Nuevo Lote Creado");
  });

  it('should add new ribbon', function () {
    browser.get('https://bananaweb.herokuapp.com/dashboard/cinta');
    element(by.partialButtonText("Agregar")).click();

    element(by.id('nombre')).sendKeys("Celeste");
    element(by.partialButtonText("Registrar")).click();

    expect(element(by.id('swal2-title')).getText()).toEqual("Cinta Agregada");
  });
});
