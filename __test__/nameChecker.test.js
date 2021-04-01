import { nameChecker } from '../src/client/js/urlchecker';

describe('testing a valid url', () => {
  test('testing checkForUrl', () => {
    expect(nameChecker('https://en.wikipedia.org/wiki/Hansel_and_Gretel')).toBe(
      true
    );
  });
  test('testing checkForUrl', () => {
    expect(
      nameChecker('https://www.shortkidstories.com/story/pandora-boxed/')
    ).toBe(true);
  });
  test('testing checkForUrl', () => {
    expect(
      nameChecker(
        'www.nytimes.com/2021/02/20/opinion/sunday/picture-books-reading.html'
      )
    ).toBe(true);
  });
  test('testing checkForUrl', () => {
    expect(
      nameChecker(
        'nytimes.com/2021/02/20/opinion/sunday/picture-books-reading.html'
      )
    ).toBe(true);
  });
  test('testing checkForUrl', () => {
    expect(nameChecker('bad url')).toBe(false);
  });
});
