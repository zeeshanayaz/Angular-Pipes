import { AngularPipePage } from './app.po';

describe('angular-pipe App', () => {
  let page: AngularPipePage;

  beforeEach(() => {
    page = new AngularPipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
