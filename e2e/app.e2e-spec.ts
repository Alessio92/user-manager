import { PromanagerWebsitePage } from './app.po';

describe('promanager-website App', () => {
  let page: PromanagerWebsitePage;

  beforeEach(() => {
    page = new PromanagerWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
