const student={
    name:"kartikeya_Bhatt" ,
    age:19,
    student_id:20011715,
    cllg:"Graphic Era Hill University",
    hobees:["coding","web Developnment"],
    food:{ // object inside an object
        sunday:"pizza",
        monday:"burger",
        tuesday:"only Veg",
        wednesday:"chicken",
        thrusday:"mutton",
        friday:"fish fry",
        saturday:"only veg",
        sunday:"mutton"
    }
}

console.log(student);
console.log(student.age);
console.log(student.cllg);
console.log(student.hobees);

student.familier_platform="vsCode";

console.log(student);

// ANOTHER WAY
console.log("THE ANOTHER WAY TO ACCESS TO THE OBJECT");
console.log(student["age"]);
console.log(student["hobees"]);
console.log(student.hobees[0]);

// Applying loop in the object
for(let key in student)
{
    console.log(student[key]);
}

console.log("What Raina will eat on friday: ",student.food.friday);

// return the object by the function 

function car(){
    return{
        name:"scorpio",
        company:"mahindra",
        TopSpeed:220,
        model:2023,
        seat:"8(4X4)",
        cost:"25L (on road)"
    }
} 

console.log(car());

console.log(typeof(car));
console.log(typeof(student));

// storing the object value 

//first way
let age=student.age;
console.log(age);

// secound way
let {age:myage , name:myname}=student;

console.log(myage,myname);

// third way 
let {cllg,name}=student;
console.log("The name of student is : " ,name,"The cllg name is: " , cllg);


// we can also place the function inside an object
// playing with another object
const obj2={
    walk:function(){
        console.log("kartikeya bhatt is walking >>> towards her ");
    }
}
obj2.walk(); // calling to the function which is inside the object 

// working with --> "this" ----> keyword
    // this keyword is used with in the function 
     let yr=3;
     let msg="my current yr of cllg is : "+yr;
     console.log(msg);
    
     // another way 
     msg=`my current yr of cllg is ${yr}`;

       console.log(msg);

       // this keyword
             // function ke inside object 
       const obj3={
          name:"kartikeya bhatt",
          age:10,
            fun:function (){
               console.log(`my name is ${this.name} and my age is ${this.age}`);
            }
       }
       
      
      obj3.fun();

      //WORKING WITH CLASS 

      class Vechile
      {
         constructor(name,wheel)
         {
            this.name=name;
            this.wheel=wheel;
         }
         start() // function inside the class
         {
            console.log("The vechile has been started");
         }
      }

      const obj4=new Vechile("Thar",4);
      const obj5=new Vechile("scooty",2);

      console.log(obj4,obj5);
    console.log(typeof(Vechile),typeof(obj4));
    obj4.start();
    
