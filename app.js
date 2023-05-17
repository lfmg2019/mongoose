require('dotenv').config();
const express= require('express');

const app = express();

// para poder utilizar el modulo de mongo

const mongoose = require('mongoose');


(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_TEST)
        console.log('esta conectado a mongoose')
    }catch(error){
        console.log(error);

    }
    

  

})()
module.exports=app;