#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');
const {statsLinks, brokenLinks, messageHelp} = require('./stats.js');
const userPath = process.argv[2];
const options = process.argv.slice(3);

const validate = options.includes("--validate");
const stats = options.includes("--stats");

if(validate === false){
    mdLinks(userPath,{validate:false})
    .then((res)=>{
        if (stats){
         statsLinks(res)
        }else{
        console.log(res)
        }
        
    }).catch((rej)=>{
        console.log(rej)
    })
}
//--validate & --stats
if(validate){
    mdLinks(userPath,{validate:true})
    .then((res)=>{
        if (stats){
            statsLinks(res)
            brokenLinks(res)
        }else{
            console.log(res)
        }
    })
    .catch((rej)=>{
        console.log(rej)
    })
}

