
// by id
const box=document.getElementById('box-1');
console.log(box);

// by tag
const b=document.getElementsByTagName('div');
console.log(b);

// by class Name
const c=document.getElementsByClassName('container');
console.log(c);

// by querySelector
const d=document.querySelector('#box-3');
console.log(d);

// by querySelectorAll

const e=document.querySelectorAll('.container div');
console.log(e);

// changing the HTML

const b2=document.getElementById('box-2');
b.innerHTML="<h4>KARTIKEYA BHATT</h4>"

document.getElementById("img_my").src="https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-9/116881405_929294904249903_3779489102458389500_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCOeIbJxd_AAX8N8AP1&_nc_ht=scontent.fdel27-4.fna&oh=00_AfA1KU1wffTqyS1dONYp3ST13QWLKOOy14rPFShRW7P4Ug&oe=63EF2C0D";

// Giving style in js

document.getElementById("img_my").style.boarderRadius="50%";

////////////////////////////////////////////////////////-- EVENT LISTENER-- ///////////////////////////////////////////////////////////////////////////////

const sbox=document.getElementById('small');
console.log(sbox);
// let logMassage=()=>{
//     console.log("Suraj Bhatt"); // click
// }

// sbox.addEventListener('click',sbox)

