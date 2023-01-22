let arr=[1,2,3,4,5,6,7,8,9];

function filterfunction(){
    let b=[];
    for(let val in arr){   
        if(val%2==0){
            b.push(val);
        }
    }
   return b;
}

let newarr=filterfunction();
console.log(newarr);


// HIGHER ORDER FUNCTION 
   // the funtion which take function as a input is known as high order function 
function isEven(num){if(num%2==0){return true;}} // if a number is odd
let isOdd=(num)=>{if(num%2==1){return true;}}  // if a number is multiple of three
let isMultipleOfThree=(num)=>{if(num%3==0){return true;}} // if a number is numtiplke of three

function filterfunction2(contitionStatement){
    let b=[];
    for(let val in arr){   
        if(contitionStatement(val)){
            b.push(val);
        }
    }
   return b;
}
let newarr2=filterfunction2(isEven);
let newarr3=filterfunction2(isOdd);
let newarr4=filterfunction2(isMultipleOfThree);
console.log("Array of even number",newarr2);
console.log("Array of odd number",newarr3);
console.log("Array of Multiple Of Three number",newarr4);

// filter in array

let cc=arr.filter(isEven);
console.log(cc);

// map

let b=[1,2,3,4,5,6,7,1452]
function square(num){return num*num;}
let negative=(num)=>{return -num;}
let arr2=b.map(square);
console.log("The SQUARE of the number are: ",arr2);
let arr3=b.map(negative);
console.log("The negative of these number are ",arr3);

// find:
   // find return the first element of array which satisfy the condition 
let c=[4,5,10,20,77];
let found=c.find(isEven);
console.log("The first even number is ",found);
 
// exploring more to find function

let student=[
    {
        name:"kartikeya Bhatt",
        marks:87
    },
    {
        name:"Anajli Bhatt",
        marks:45  
    },
    {
        name:"Shruti Bhatt",
        marks:96
    }
]

let found2=student.find((elm)=>{
    return(elm.marks<50)
});
console.log("The failer student is ",found2);

