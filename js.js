// HOisting && temprorary dead zone
// var a =10;
// console.log(a);
// //10


// console.log(a);
// var a =10;
// //undefined


// console.log(a);
// let a =10;
// //reference error

// console.log(a);


// function test(num){
// console.log(num)}
// test(19)
// function test2(num2){
//     console.log(num2);
// }
// test2(45);

//   a = 2;


let normal = function(name){
  return this.name;
}

let arrow  = (number) => {
  return this.name; 
}


const person = {
  name: "Mansi",
  age:22,
  normal,
  arrow
}

console.log(person.normal());
console.log(person.arrow());