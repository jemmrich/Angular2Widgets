import { Angular2WidgetsPage } from './app.po';

describe('angular2-widgets App', () => {
  let page: Angular2WidgetsPage;

  beforeEach(() => {
    page = new Angular2WidgetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
