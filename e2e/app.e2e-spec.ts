import {browser, By, element} from "protractor";
import {until} from "selenium-webdriver";
import titleContains = until.titleContains;

describe('items view', ()=> {

  const btnLogIn = element(By.buttonText('log in'))
  const datagrid = element(By.tagName('app-datagrid')); //albo by css
  const search = element(By.tagName('app-search'));
  const btnAddItem = element(By.buttonText('add'));

  beforeAll(()=> {
    browser.get('items')
    btnLogIn.click();
    expect(btnLogIn.isPresent()).toBeFalsy(); /*sprawdza czy zniknal przycisk*/
  })

  it('should open items view', ()=> {
    browser.get('items');
    browser.sleep(5000); /*tu nic nie sprawdzamy */
  });

  it('should display elements', ()=> {
    browser.get('items');
    expect(datagrid.isPresent()).toBeTruthy();
    expect(search.isPresent()).toBeTruthy();
    expect(btnAddItem.isPresent()).toBeTruthy(); //normalnie kazdy z tych elementow powinien byc w osobnym itcie
  });

  describe('when add itembtn clicked, ', ()=> {
    //dobra praktyka odswiezyc widok

    const addItemForm = element(By.id('newItemForm'));
  const nameField = addItemForm.element(By.name('title'));
  const descriptionField = addItemForm.element(By.name('description'));
  const priceField = addItemForm.element(By.name('price'));
  const categoryField = addItemForm.element(By.name('category'));
    const uniqueTitle = "Kasia" + Date.now();

    beforeAll(()=> {
      browser.get('items')
      btnAddItem.click();

    })

    it('should display fields', ()=> {
      expect(addItemForm.isPresent()).toBeTruthy();
      nameField.sendKeys(uniqueTitle);
      descriptionField.sendKeys('any mesage...');
      priceField.sendKeys('9292');

      categoryField.element(By.cssContainingText('option', 'food')).click(); //wybieranie food

      browser.sleep(5000);
    });
  })



});
