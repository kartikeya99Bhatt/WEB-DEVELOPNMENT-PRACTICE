/*
JAVASCRIPT OBJECT NOTATION
    JSON::JSON is a text format 
    1.In JSON the key and value int key/value pair both are in the double quotes(" ") .
    2.In JSON we cannot define the function (we can define variable, object ,array ) .
    3.JASON can be created in other programing languages .

    JAVASCRIPT 
    1.The key in key/value pair can be without double quotes .
    2.In JavaScript we can define the function .
    3.JavaScript object are created in JavaScript language only.
    */

    const text=`{
        "name":"kartikeya Bhatt",
        "age":20,
        "state":"uttrakhand",
         "city":"Dehradun"
    }`

   // JSON.parse() -: it will convet the string into JAVASCRIPT

    console.log(text);
    const jsonObj=JSON.parse(text);
    console.log(jsonObj);

    // JSON.stringify() -: it will convet the JAVASCRIPT into string
    const obj = {name: "lues", age: 30, city: "New York"};
    console.log(obj);
    const getText=JSON.stringify(obj);
    console.log(getText);
