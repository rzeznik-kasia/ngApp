import {browser} from "protractor";

describe('items view', ()=> {
  it('should open items view', ()=> {
    browser.get('items');
    browser.sleep(5000);
  });
});
