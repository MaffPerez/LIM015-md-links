const {mdLinks} = require('../src/mdLinks.js');
const route = 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba';
const routeFail = 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueb';
const routeNoLinks = 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo2.md';
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

const validate = [
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\archivo1.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md',
    status: 200,
    message: 'OK'
  },
  {
    href: 'https://github.com/404',
    text: 'GitHub',
    file: 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md',
    status: 404,
    message: 'FAIL'
  }
];

const messageErrorRoute =`
────────────▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄──────────────────────────────────────────────
────────────█▒▒░░░░░░░░░▒▒█──────────────────────────────────────────────
─────────────█░░█░░░░░█░░█───────────────────────────────────────────────
──────────▄▄──█░░░▀█▀░░░█──▄▄─────────────── THE ROUTE DOES NOT EXIST ───
─────────█░░█─▀▄░░░░░░░▄▀─█░░█──────────────                          ───
███████╗██████╗ ██████╗  ██████╗ ██████╗────   Please, check it or    ───
██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗───                          ───
█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝───      place another       ───
██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗────────────────────────────────
███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║────────────────────────────────
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝────────────────────────────────
`
const messageNotLinks =`
────────────▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄──────────────────────────────────────────────
────────────█▒▒░░░░░░░░░▒▒█──────────────────────────────────────────────
─────────────█░░█░░░░░█░░█───────────────────────────────────────────────
──────────▄▄──█░░░▀█▀░░░█──▄▄───────────────     NO                  ────
─────────█░░█─▀▄░░░░░░░▄▀─█░░█──────────────                          ───
███████╗██████╗ ██████╗  ██████╗ ██████╗────          LINKS           ───
██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗───                          ───
█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝───                 FOUND    ───
██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗────────────────────────────────
███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║────────────────────────────────
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝────────────────────────────────
`

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
    
    it('route does have no exists retur messageNotLinks', () => {
      mdLinks(routeNoLinks, { validate: false })
      .catch((rej)=>{
         expect(rej).toEqual(messageNotLinks);
    })
  });

    it('returns an array with href, file, text, status and message', () => {
      mdLinks(route, { validate: true })
      .then((res)=>{
         expect(res).toEqual(validate);
    })
    });

    it('route does have no exists return messageErrorRoute', () => {
      mdLinks(routeFail, { validate: false })
      .catch((rej)=>{
         expect(rej).toEqual(messageErrorRoute);
    })
  });
  });