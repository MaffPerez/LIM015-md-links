const api = require("./api.js");
const {messageErrorRoute, messageNotLinks} = require('./stats.js');
const mdLinks = (path, option = { validate: false }) =>
  new Promise((res, rej) => {
    if (api.validatePath(path)) {
      const filesMd = api.searchFileMd(path);
      const allLinks = api.mdFileLinks(filesMd);
      if (allLinks.length === 0) {
        rej(messageNotLinks);
      } else {
        if (option.validate) {
          const linksValidados = api.validateLinks(allLinks);
          res(Promise.all(linksValidados));
        } else {
          res(allLinks);
        }
      }
    } else {
      rej(messageErrorRoute);
    }
  });

module.exports = {
  mdLinks,
};

