const express=require('express');

const blogController = require('./../controller/blogController');

let setRouter=(app)=>{
    app.get('/test/route/:param1/:param2',blogController.testRoute);
} //end setRouter


module.exports={
    setRouter : setRouter
}
