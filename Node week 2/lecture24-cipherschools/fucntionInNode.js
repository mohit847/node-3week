function one(){
    console.log('Normal funtion')
}

function three(callBack){
    callBack() // calling the callback function from another file or module
}

let two = function(){
    console.log('two')
}

three(two);