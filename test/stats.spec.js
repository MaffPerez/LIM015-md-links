const stats = require('../src/stats');
const array = [
    {
      href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file: 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\archivo1.md'      
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md'
    },
    {
      href: 'https://github.com/404',
      text: 'GitHub',
      file: 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md'
    }
  ];

const resultStats = `Total: 3
Unique: 3`;

const resultBroken = `Broken: 0`;


describe('statsLinks', () => {
    it('is a function', () => {
      expect(typeof stats.statsLinks).toBe('function');
    });

    it('If it is an array, it returns the total and unique links.', () => {
        expect(stats.statsLinks(array)).toEqual(resultStats);
      });
  });


describe('brokenLinks', () => {
    it('is a function', () => {
      expect(typeof stats.brokenLinks).toBe('function');
    });
    it('If it is an array, it returns the broken links.', () => {
        expect(stats.brokenLinks(array)).toEqual(resultBroken);
    });
});