const api = require("./api.js");
const mdLinks = (path, option = { validate: false }) =>
  new Promise((res, rej) => {
    if (api.validatePath(path)) {
      const filesMd = api.searchFileMd(path);
      const allLinks = api.mdFileLinks(filesMd);
      if (allLinks.length === 0) {
        rej("no hay links");
      } else {
        if (option.validate) {
          const linksValidados = api.validateLinks(allLinks);
          res(Promise.all(linksValidados));
        } else {
          res(allLinks);
        }
      }
    } else {
      rej("no existe la ruta");
    }
  });

module.exports = {
  mdLinks,
};
