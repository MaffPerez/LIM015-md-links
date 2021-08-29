#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');
const {statsLinks, brokenLinks, messageHelp} = require('./stats.js');
const userPath = process.argv[2];
const options = process.argv.slice(3);

const validate = options[0] === '--validate' || options[1] === '--validate';
const stats = options[0] === '--stats' || options[1] === '--stats';


if(options.length === 0){
    mdLinks(userPath,{validate:false})
    .then((res)=>{
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej);
    })
}else{
    if(validate){
    mdLinks(userPath,{validate:true})
    .then((res)=>{
        if (stats){
        console.log(statsLinks(res));
        console.log(brokenLinks(res));
        }else{
        console.log(res);
        }
    })
    .catch((rej)=>{
    console.log(rej);
        })
    }else if (stats) {
    mdLinks(userPath, {validate:true})
    .then((res)=>{
        console.log(statsLinks(res));
    })
    .catch((rej)=>{
        console.log(rej);
    })
    }else{
        mdLinks(userPath, {validate:true})
        .then(()=>{
            console.log(messageHelp);
        })
        .catch(()=>{
            console.log("xd");
        })
    }
}


