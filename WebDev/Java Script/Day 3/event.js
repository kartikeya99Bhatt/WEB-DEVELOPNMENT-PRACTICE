let count=0;
// let mesg=function(){
//     console.log("clicked",count++);
// }

// another way using arrow function 
const coordinates=document.createElement('p');
document.body.append(coordinates);
let mesg=(event)=>{
    console.log(event,count++);
    coordinates.innerHTML=`${event.offsetX} ${event.offsetY}`
}

let b=document.querySelector('#box');
console.log(b);
b.addEventListener('click',mesg);