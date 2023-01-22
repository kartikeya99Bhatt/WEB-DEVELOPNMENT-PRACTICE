// callback is just a paramerer we can change its name 
function orderPizza(callback){
    setTimeout(()=>{
       const pizza='🍕';
       callback(pizza);
    },2000);
}

// let getPizza=orderPizza((pizza)=>{
//     console.log("Here is my ",pizza);
// });


function nofifyme(pizza){
   console.log("Yes i got the pizaa ",pizza);
}

orderPizza(nofifyme);