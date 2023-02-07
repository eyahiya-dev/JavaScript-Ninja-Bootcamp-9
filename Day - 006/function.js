function printProfile() {
  console.log("Hello bangladesh");
  console.log("I'm Eyahia mahmud");
  console.log("i am a student");
  console.log("i am 24");
}
printProfile();
printProfile();
printProfile();
printProfile();

// Do some math using Function
function simpleAddition() {
  console.log(10 + 5);
}
simpleAddition();

function smartAddition(num) {
  console.log(num + num);
}
smartAddition(20);

function overSmartAdd(num1, num2 = 0) {
  console.log(num1 + num2);
}
overSmartAdd(10, 20);

// parameter and argument practice

function subs(parameter1, parameter2 = 0) //here 0 is the deafult value.
{ 
  console.log(parameter1 - parameter2);
}
subs(50, 30 );  // here into the function that is the arguments.
subs(50000, 49999);

// Les't try Return

function multip(para1, para2, para3 = 1)  //here 1 is the deafult value of multiplication.
{
  return para1 * para2 * para3
}
console.log(multip(10,20, 5));
console.log(multip(8, 50,));

function info() {
  const infoP = 
    "Yahaya mahmud" + 
    " 24" + 
    " Student"
  return infoP
}
console.log(info());

function makeProfile() {
  const str = `Hi, This is Eyahia Mahmud. I am 24. I am a student and Part time web developer`;
  return str
}
console.log(makeProfile());


// let's make it dynamic
function makeProfile2(name = "name" , age = "age", occupation = "student", profession = "profession") {
  const str1 = `Hi, This is ${name}. I am ${age}. I am a ${occupation} and Part time ${profession}`;
  return str1
}
console.log(makeProfile2('Yahya', 99 , 'Psychologist', 'Web Designer'));


// Function also known as methos when a function declare inside an object.

const testObj = {
  firtsName: "Eyahiya",
  lastName: "Mahmud",
  fullName: function fullNameOf() {
    return testObj.firtsName + " " + testObj.lastName
  }  
}
console.log(testObj.fullName());

// another way

const obj = {
  profession: "Web Developer",
  duration: 24,
  experience() {
    return this.profession + " " + this.duration;
  }
}
console.log(obj.experience());