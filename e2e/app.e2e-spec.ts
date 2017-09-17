import { MusicSchoolPage } from './app.po';

describe('music-school App', () => {
  let page: MusicSchoolPage;

  beforeEach(() => {
    page = new MusicSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
