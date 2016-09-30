import { NgTimetablePage } from './app.po';

describe('ng-timetable App', function() {
  let page: NgTimetablePage;

  beforeEach(() => {
    page = new NgTimetablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
