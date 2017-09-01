import {browser, By, element} from "protractor";

describe('items view', ()=> {

  const btnLogIn = element(By.buttonText('log in'))

  beforeAll(()=> {
    browser.get('items')
    btnLogIn.click();
    expect(btnLogIn.isPresent()).toBeFalsy();
  })

  it('should open items view', ()=> {
    browser.get('items');
    browser.sleep(5000);
  });
});
