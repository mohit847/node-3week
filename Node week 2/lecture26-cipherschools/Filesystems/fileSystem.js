let fs = require('fs');

let readFile = fs.readFileSync('readMe.txt', 'utf-8',(err,data)=>{
    console.log(data)
    console.log(err)
})
console.log(readFile)