import { EatSafePage } from './app.po';

describe('eat-safe App', function() {
  let page: EatSafePage;

  beforeEach(() => {
    page = new EatSafePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
