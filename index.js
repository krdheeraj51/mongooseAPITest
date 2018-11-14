
const express   = require('express');
const mongoose  = require('mongoose');
const appConfig = require('./config/appConfig');
const fs=require('fs');

//import models
let modelsPath='./models';

//appplication instance
const app=express();
//Bootstrap
// app.get('/',(req,res)=>{
//     res.send('Hello world')}
//     )
//app.get('/','Hello world');

//Bootstrap Route
let routesPath='./route';
fs.readdirSync(routesPath).forEach(function(file){
    if(~file.indexOf('.js')) {
        let route =require(routesPath+'/'+file);
        route.setRoute(app);
    }
});










//Bootstrap Models
fs.readdirSync(modelsPath).forEach(function(file) {
    if(~file.indexOf('js'))
    require(modelsPath+'/'+file)
});



 app.listen(appConfig.port,()=>{

     console.log('Example app listening on Port 3000');

     let db=mongoose.connect(appConfig.db.uri,{useNewUrlParser:true})

 });
 mongoose.connection.on('error',function(err){
     if(err){
         console.log('connection error');
     }
 });

 mongoose.connection.on('open',function(err){
     if(err){
         console.log('Connection Open error');
     }else{
         console.log('connection has been successfully ...');
     }
 })