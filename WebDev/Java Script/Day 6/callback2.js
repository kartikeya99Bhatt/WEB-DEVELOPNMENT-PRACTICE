// simple 

// function orderPizza(myfun){
//   let pizza='🍕';
//   myfun(pizza);
// }
// let nofifyme=(pizza)=>{
//     console.log("This is the notification for the  pizza",pizza);
// }
// orderPizza(nofifyme);

// callback 
function getPizza(myfun){
    let pizza='🍕';
    myfun(pizza);
}
function orderPizza(myfun){
    setTimeout(getPizza,2000,myfun);
}
let nofifyme=(pizza)=>{
    console.log("This is the notification for the  pizza",pizza);
}
orderPizza(nofifyme);