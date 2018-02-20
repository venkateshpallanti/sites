import { AngularCiExamplePage } from './app.po';

describe('angular-ci-example App', () => {
  let page: AngularCiExamplePage;

  beforeEach(() => {
    page = new AngularCiExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
