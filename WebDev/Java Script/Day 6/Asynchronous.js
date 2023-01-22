// SetTimeOut function 
let greet=()=>{
    console.log("Anjali Bhatt");
}
console.log("before function");
setTimeout(greet,5000);
console.log(("After function "));

// clear time out

console.log("before function2");
let timeOutId=setTimeout(greet,5000);
console.log(("After function2"));
clearTimeout(timeOutId);

// setInterval();

function namef()
{
    console.log("My name is kartikeya Bhatt");
}

let getIntervalId=setInterval(namef,2000);
console.log("The id is ",getIntervalId);
clearTimeout(getIntervalId);