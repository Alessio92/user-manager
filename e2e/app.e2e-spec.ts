import { UserManagerPage } from './app.po';

describe('user-manager App', () => {
  let page: UserManagerPage;

  beforeEach(() => {
    page = new UserManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
