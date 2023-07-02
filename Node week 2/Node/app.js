// console.log(global)

setTimeout( ()=>{
    console.log("Timed it for 2 seconds")
},2000)

var time = 0;

var timer = setInterval(()=>{
    time +=2
    console.log(time,"seconds has passed")
    if(time > 10){
        clearInterval(timer);
    }
},2000)