

const statsLinks = (arr) => {
  const totalLinks = arr.length;
  const uniqueLinks = new Set(arr.map(link=>link.href));
  const stats = `Total: ${totalLinks}\nUnique: ${uniqueLinks.size}`;
  return console.log(stats);
}

const brokenLinks = (arr) =>{
  const brokenFilter = arr.filter((link) => link.message === 'FAIL' );
  const stats = `Broken: ${brokenFilter.length}`;
  return console.log(stats);
}



const messageHelp = `
────────────▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───────────────█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
────────────█▒▒░░░░░░░░░▒▒█───────────────█               ¿ N E E D   H E L P ?                    █
─────────────█░░█░░░░░█░░█────────────────█                                                        █
──────────▄▄──█░░░▀█▀░░░█──▄▄─────────────█   --validate: Show href,text,file,status,OK or Fail    █
─────────█░░█─▀▄░░░░░░░▄▀─█░░█────────────█                                                        █
███████╗██████╗ ██████╗  ██████╗ ██████╗──█        --stats: Show Total and Unique links            █
██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗─█                                                        █
█████╗  ██████╔╝██████╔╝██║   ██║██████╔╝─█ --stats & validate: Show Total,Unique and broken links █
██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗─█                                                        █
███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║─█ --validate & stats: Show Total,Unique and broken links █
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝─█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`

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


module.exports = {
  statsLinks,
  brokenLinks,
  messageHelp,
  messageErrorRoute,
  messageNotLinks
};
