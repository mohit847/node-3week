let express = require('express')
let app = express();

app.get('/home' , (req, res) =>{
    res.send('Hello, this is a express response')
})

app.listen(5000, '127.0.0.1' ,() => {
    console.log("Server started on port 5000")
})