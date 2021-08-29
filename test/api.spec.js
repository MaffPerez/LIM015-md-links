const api = require('../src/api');

const directory = "C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba";
const resultDirectory = [
  'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\archivo1.md',
  "C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo2.md",
  "C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md"
];
  const result = [
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
describe('validatePath', () => {

  it('is a function', () => {
    expect(typeof api.validatePath).toBe('function');
  });
});

describe('searchFileMd', () => {

  const file = 'C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md';
  const resultFile = ['C:\\Users\\Admin\\Documents\\Laboratoria\\LIM015-md-links\\prueba\\prueba2\\archivo3.md'];


  it('Is a function', () => {
    expect(typeof api.searchFileMd).toBe('function');
  });

  it('If it is a directory returns an array of .md file paths', () => {
    expect(api.searchFileMd(directory)).toEqual(resultDirectory);
  });

  it("If it is a file returns an array of .md file paths", () => {
    expect(api.searchFileMd(file)).toEqual(resultFile);
  })
});

describe('mdFileLinks', () => {


  it('Is a function', () => {
    expect(typeof api.mdFileLinks).toBe('function');
  });
  it('If it is a directory returns an array of .md file paths', () => {
    expect(api.mdFileLinks(resultDirectory)).toEqual(result);
  });
});

describe('validateLinks', () => {
const data = [
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
]
  it('Is a function', () => {
    expect(typeof api.validateLinks).toBe('function');
  });
});
