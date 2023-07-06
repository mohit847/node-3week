const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

const db_url = "YourString"

mongoose.connect(db_url, {userNewUrlParser: true}, () =>{
    console.log("Connected to database")
})

const app = express();


//middleware of body parser
app.use(bodyParser.json());


//from api/avengers
app.use('/api', routes)

//error handler middleware
app.use((err, req, res, next)=>{
    res.status(422).send({error: err.message})
})



app.listen(3001, ()=>{
    console.log('Listening at port number 3001')
})