<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        async function getCheese()
                {
                return new Promise(function(resolve,reject){
                    setTimeout(()=>{
                    let cheese='🧀';
                    console.log("I am in cheese shop");
                    resolve(cheese);
                    },2000)
                });
                }

               async function makeDough(cheese)
                {
                return new Promise(function(resolve,reject){
                    setTimeout(()=>{
                    let dough='🍙'+cheese;
                    console.log('i am currently making dough');
                    resolve(dough);
                    },2000);
                });
                }

               async function bakePizza(dough)
                {
                return new Promise(function(resolve,reject){
                    setTimeout(()=>{
                    let pizza='🍕'+dough;
                    console.log('dough is getting backed');
                    resolve(pizza);
                    },2000);
                });
                }
               async function orderPizza()
               {
                  const cheese=await getCheese();
                  const dough=await makeDough(cheese);
                  const pizza=await bakePizza(dough);
               }
               orderPizza();
    </script>
</body>
</html>
