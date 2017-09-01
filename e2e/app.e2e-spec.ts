import {browser, By, element} from "protractor";

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



});
