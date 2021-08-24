#!/usr/bin/env node
const {mdLinks} = require('./mdLinks.js');
const path = process.argv.slice(2);

if(path.length === 1){
    mdLinks(path[0],{validate:false})
    .then((res)=>{
        console.log(res)
    }).catch((rej)=>{
        console.log(rej)
    })
}
if(path.length === 2){
    mdLinks(path[0],{validate:true})
    .then((res)=>{
        console.log(res)
    }).catch((rej)=>{
        console.log(rej)
    })
}