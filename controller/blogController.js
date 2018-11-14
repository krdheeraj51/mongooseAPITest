
const express =require('express');

const mongoose=require('mongoose');

//importing model here

const BlogModel=mongoose.model('Blog')

let testRoute=(req,res)=>{

    console.log(req.params);

    res.send(req.params);

} //end test

module.exports={
    testRoute:testRoute
}