console.log("kartikeya Bhatt is a BAD BOY");
console.log("Error Handling");

try
{
    console.log(x);
    console.log("I am not going to execute ");
}
catch(e)
{
    console.log(e);
    console.log("I am the catch block and the error has been occoured");
}
finally
{
  console.log("It does'nt matter for me i am finally block i will always execute whether the error has been occoured or not ");
}