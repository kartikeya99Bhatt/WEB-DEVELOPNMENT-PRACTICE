  function getCheese(callback)
  {
      setTimeout(()=>{
          let cheese='🧀';
          console.log(`${cheese} is getting ready`);
          callback(cheese)
      },2000);
  }
  function makeDough(cheese,callback)
  {
      setTimeout(()=>{
          let dough=cheese+'🍩';
          console.log(`${dough} is getting ready`);
          callback(dough);
      },2000);
  }
  function getPizzaReady(dough,callback)
  {
      setTimeout(()=>{
          let pizza='🍕'
          console.log(`geting your pizza ready ${pizza}`);
          callback(pizza);
      },2000);
  }
  getCheese((cheese)=>{
      console.log(`We have receave the ${cheese}`);
      makeDough(cheese,(dough)=>{
          console.log(`we have receeave the ${dough}`)
          getPizzaReady(dough,(pizza)=>{
              console.log(`This is a ${pizza} you can eat it`);
          })
      })
  })
