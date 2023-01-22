const arr1=[1,2,3,"kartikeya Bhatt",4,8,'abc',10,20,30,40,50,60,'suraj Bhatt'];
console.log(arr1);
arr1[3]=222;
console.log(arr1);
console.log(typeof(arr1));

const a=[1,2,3];
a[6]=33;
console.log(a);

const b=['A','B','C','D','E','F','G','H','I'];
b.splice(1,3);
console.log(b);

console.log("GADWALI!!")
const bb=['A','B','C','D','E','F','G','H','I'];
bb.splice(2,0,'bhatt');

// array get sort on the basic of alphabat 
const c=[9,10,4,23];
c.sort();
console.log(c);

//functions in  java script 

greeting();

function greeting(){
    console.log("hi");
    console.log("mr");
    console.log("suraj");
}

greeting();
greeting();

// function with parameter
function additon(a,b){
    return (a+b);
}

let num=additon(10,20);
console.log(num);

// anominous function in javaScript 

let myAdditionFunction=function(a,b){
    console.log("The Processing of function start");
    return (a+b);
}

console.log(myAdditionFunction(10,22));

// working with arrow function

let myAdditionFunction2=(a,b)=>{
    console.log("The Processing of function start");
    return (a+b);
}
console.log(myAdditionFunction2(10,22));
