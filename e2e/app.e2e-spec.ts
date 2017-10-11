import { CreativeCataPage } from './app.po';

describe('creative-cata App', function() {
  let page: CreativeCataPage;

  beforeEach(() => {
    page = new CreativeCataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
