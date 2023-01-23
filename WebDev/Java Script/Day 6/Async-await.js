// async await is used to  
// it help to make  the code from asynchronous to sysnchronous 
// it make the promises EASY 
// the function which is containg the await should be define async
 function getChees(){
   return new Promise((resolve,reject)=>{
       
    setTimeout(()=>{
      resolve('chease 🥚');
    },2000)
   })
}
 function makeDough(chese){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve(` dough 🍥 + ${chese}`)
       },2000)
    })
}
 function makePizza(dough)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(` pizza 🍕+${dough}`)
        },2000)
     })
}
async function orderAPizza(){
    try{
    const chese=await getChees();
    console.log("now we have chese ",chese);
    const dough=await makeDough(chese);
    console.log("now we have dough ",dough);
    const pizza=await makePizza(dough);
    console.log("mow we have pizza ",pizza);
    return pizza;
    }
    catch(error){
        console.log("error mil gya ");
    }
}
orderAPizza().then((pizza)=>{
    console.log("finally we recive pizaa: " , pizza);
});
