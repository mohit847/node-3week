const express = require('express')
const Avenger = require('../models/avenger')

const routes = express.Router();

routes.post('/avengers', (req,res)=>{
    console.log(req.body);

    const newAvenger = new Avenger(req.body);
    newAvenger.save().then((data)=>{
        res.send(data);
    });


    res.send("Avenger added successfully!");
})

module.exports = routes;