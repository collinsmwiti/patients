import { PatientsPage } from './app.po';

describe('patients App', () => {
  let page: PatientsPage;

  beforeEach(() => {
    page = new PatientsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
