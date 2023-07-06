const express = require('express')
const Avenger = require('../models/avenger')

const routes = express.Router();


//GET

routes.get('/avengers', (req,res,next) =>{
    Avenger.find({}).then((data)=>{
        res.send(data);
    }).catch(next)
})

routes.post('/avengers', (req,res,next)=>{
    console.log(req.body);

    const newAvenger = new Avenger(req.body);
    newAvenger.save().then((data)=>{
        res.send(data);
    }).catch(next)
    res.send("Avenger added successfully!");
})


//PUT request Route
///api/avengers/:id
routes.put('/avengers/:id' ,(req,res,next) =>{
    console.log(req.body,req.params, req.params.id);
    Avenger.findByIdAndUpdate({_id: req.params.id}).then((data) =>{
        res.send(data);
    }).catch(next)
})



//Delete Request
routes.delete('/avengers/:id' ,(req,res,next) =>{
    console.log(req.body,req.params, req.params.id);
    Avenger.findByIdAndDelete({_id: req.params.id}, req.body,{new:true}).then((data) =>{
        res.send(`Data deleted: ${data}`);
    }).catch(next)
})




module.exports = routes;