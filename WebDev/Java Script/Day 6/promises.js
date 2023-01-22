
function orderPizza(){
    return new Promise( function (resolve,rejact){
        setTimeout(()=>{
            let isAvailable=false; // true to resolve and false to reject 
            let pizza='🍕';
            if(isAvailable==true){
             resolve(pizza);
            }
            else
            {
              rejact("is not available");
            }
        },2000)
    })
}

let pizzaPromise=orderPizza();
pizzaPromise
.then((pizza)=>{
    console.log("This is my pizza ",pizza);
})
.catch((error)=>{
    console.log(`🍕 ${error}`);
})


// railway ticket
// select seat 
// enter info{name ,age }
// patyem karo 

