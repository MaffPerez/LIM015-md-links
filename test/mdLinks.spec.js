const {mdLinks} = require('../src/mdLinks.js');
const route = 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba';
const links =[
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


describe('mdLinks', () => {
    it('is a function', () => {
      expect(typeof mdLinks).toBe('function');
    });

    it('returns an array with href, file and text', () => {
        mdLinks(route, { validate: false })
        .then((res)=>{
           expect(res).toEqual(links);
      })
    });
    
  });