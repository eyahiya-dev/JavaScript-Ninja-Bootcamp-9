/*

# 1. What is the value of the keyword this in the following example: (3)
const data = this;
console.log(data); // window

What does this function output? Why?
function logThis(){
    return this;
}

logThis(); // window

*/

const data = this;
console.log(data);

//

function logThis() {
  return this;
}

logThis();

// logThis function output will be window because it is a plain function and a plain function call return window object
// In browser contex here this indicate the window object

/*

# 2. What does this function output? Why? (2)
const instructor = {
    firstName: 'Adnan',
    sayHi(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi() // "Hello! Adnan Ahmed";

// here instuctro.sayHi() output is "Hello! Adnan Ahmed" because instructor object have a key:value and a function. inside the funciton we expect "Hello!" word and this.firstName output. this contain the instructor object. so if i call this it means i called instructor object.


*/

const instructor = {
  firstName: "Adnan Ahmed",
  sayHi() {
    console.log("Hello! " + this.firstName);
  },
};
instructor.sayHi();

/*

# 3. What does this function output? Why? (3)
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false
    },
    displayInfo: function(){
        console.log("Cat owner? "+ '-' + this.catOwner);
    }
}

instructor.displayInfo() // ?
Bind this to get correct output ex: "Cat owner?-true "

*/
const instructor1 = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: false,
  },
  displayInfo: function () {
    return "Cat Owner ?" + "-" + this.catOwner;
  },
};
// instructor1.displayInfo();
const inner = instructor1.displayInfo;
const boundDisplayInfo = inner.bind(instructor1.info);
console.log(boundDisplayInfo());


/*

# 4.What does this function output? Why? (3)
const instructor = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false,
        displayLocation: function(){
            return  `Residing ${this.data.location}`;
        },
        data: {
            location: "Dhaka"
        }
    },
}

instructor.info.displayLocation() // ?

*/



