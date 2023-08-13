function bookTicket() {
  return new Promise(function (resolve, reject) {
    let ita = true;
    if (ita == false) {
      reject("ticket is not available");
    } else {
      resolve("ticket is available");
    }
  });
}

bookTicket()
  .then((info) => {
    console.log(`${info}`);
  })
  .catch((info) => {
    console.log(`${info}`);
  });



 // PIZZA MAKING

 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function getCheese()
                {
                return new Promise(function(resolve,reject){
                    setTimeout(()=>{
                    let cheese='🧀';
                    console.log("I am in cheese shop");
                    resolve(cheese);
                    },2000)
                });
                }

                function makeDough(cheese)
                {
                return new Promise(function(resolve,reject){
                    setTimeout(()=>{
                    let dough='🍙'+cheese;
                    console.log('i am currently making dough');
                    resolve(dough);
                    },2000);
                });
                }

                function bakePizza(dough)
                {
                return new Promise(function(resolve,reject){
                    setTimeout(()=>{
                    let pizza='🍕'+dough;
                    console.log('dough is getting backed');
                    resolve(pizza);
                    },2000);
                });
                }
                getCheese()
                .then((cheese)=>{
                console.log(`i got ${cheese}`);
                return makeDough(cheese);
                })
                .then((dough)=>{
                console.log(`i got ${dough}`);
                return bakePizza(dough);
                })
                .then((pizza)=>{
                console.log(`i got ${pizza}`);
                })
                .catch(()=>{
                console.log("the error occoured");
                })

    </script>
</body>
</html>
