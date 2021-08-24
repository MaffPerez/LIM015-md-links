
const path = require ('path');
const fs = require('fs');
const fetch = require('node-fetch');

/*------------------1.Funcion que comprueba si existe la ruta ------------*/
const validatePath = (route) =>fs.existsSync(route)


/*------------------2.Funcion que comprueba si la ruta es absoluta--------*/
const convertToAbsolute = (route) => path.resolve(route)

/*-----------------3.Funcion que verifica si es directorio---------------*/
const itsDirectory = (route) => fs.statSync(route).isDirectory()

/*-----------------4.Funcion que verdifica si tiene archivos md----------*/
const mdExtension = (route) => path.extname(route)

/*-----------------5.Funcion que lee los archivo-------------------------*/
const readFile = (route) => fs.readFileSync(route, { encoding: 'utf-8', flag: 'r' });

/*-----------------6.Funcion que extrae archivos md ---------------------*/
function searchFileMd(route) {
  let allFilesMd = [];
  if (itsDirectory(route)) {
    const readDirectory = fs.readdirSync(route);
    readDirectory.forEach((file) => {
      const pathAbsolute = convertToAbsolute(`${route}/${file}`);
      if (itsDirectory(pathAbsolute)) {
        /* Recurse into a subdirectory */
        allFilesMd = allFilesMd.concat(searchFileMd(pathAbsolute));
      } else {
        /* Is a file */
        if (mdExtension(pathAbsolute) === '.md')allFilesMd.push(pathAbsolute);
      }
    });
  } else if (mdExtension(route) === '.md') {
    allFilesMd.push(convertToAbsolute(route));
  }
  // console.log(allFilesMd, 41);
  return allFilesMd;
}

/*---------------------7.Funcion que extrae links ---------------------*/
const mdFileLinks = (allfiles) => {
  const linksArray = [];
  allfiles.forEach((file) => {
    const regularExpression = /\[(.*)\]\(((?!#).+)\)/gi;
    const carpeta = readFile(file).match(regularExpression);
      if (carpeta !== null) {
      const fileLinks = readFile(file).match(regularExpression).map((x) => x.split('](')[1].slice(0, -1));
      const filetext = readFile(file).match(regularExpression).map((x) => x.split('](')[0].slice(1));
          fileLinks.forEach((link, i) => {
          linksArray.push({
            href: link,
            text: filetext[i],
            file,
          });
        });
    }
  });
    return (linksArray);
};

/*--------------------8.Funcion que valida los links ---------------------*/

const validateLinks = (arrlinks) => {
  const arrayPromesas = arrlinks.map((link)=>{
    return fetch(link.href)
    .then((res) => {
      const statusText = (res.status == 200) ? res.statusText : "FAIL";
      return {
        ...link,
        status:res.status,
        message:statusText
      };
    })
    .catch((rej) => {
      return {
        ...link,
      status:rej.status,
      message:"Fail"
      }
      });
  })
  return arrayPromesas;
}

module.exports = {
validatePath,
searchFileMd,
mdFileLinks,
validateLinks
}

