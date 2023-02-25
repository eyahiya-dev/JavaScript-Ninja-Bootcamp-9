// Practicing advance object
const profile = {
  firstName: "Yahya",
  lastName: "Mahmud",
  age: 24,
  email: "eyahiya@gmail.com",
  fullname() {
    // here fullname () is called a method.
    return this.firstName + " " + this.lastName;
  },
  education: {
    class: "Honer's second year",
    roll: 084,
    department: "Psychology",
    institution: "Dhaka College",
  },
};
console.log(profile.firstName);
console.log(profile["lastName"]);
console.log(profile.fullname());
console.log(profile.education.department); //Multidimenstional object calling

// dynamitically access properties []
const myEmail = "email";
console.log(profile[myEmail]);
const myAge = "age";
console.log(profile[myAge]);

for (let key in profile) {
  console.log(key);
  console.log(profile[key]);
}

// this binding
console.log(this); // outside function this refere window

// implicit this binding
/*
JS binding this default that called implicit this binding.
*/

// Explicit this bindingb (call, bind, apply)

function greet(name) {
  console.log(this);
  return `${this} ${name}`;
}
console.log(greet("Yahya"));

// call()
console.log(greet.call("Hello", "Mahmud"));

// apply()
console.log(greet.apply("Welcome to", ["Bangladesh"]));

// bind()
greet.bind("Hi there", "How are you?");
const boundGreet = greet.bind("Hi there", "How are your");
console.log(boundGreet());

// practical implementation of call bind and apply

const profileInfo = {
  fName: "Yahya",
  lName: "Mahmud",
  title: "MR.",
  age: 24,
  fulName() {
    console.log(this);
    const that = this;
    return function () {
      // return this.title + " " + this.fName + " " + this.lName;
      return that.title + " " + that.fName + " " + that.lName;
    };
  },
};

const inner = profileInfo.fulName();
console.log(inner());
console.log(inner.apply(profileInfo));
console.log(inner.call(profileInfo));
const boundInner = inner.bind(profileInfo);
console.log(boundInner());

// practice factory function

function selfProfile(firstName, lastName, emailAddress) {
  return {
    firstName,
    lastName,
    emailAddress,
    fullName() {
      return (
        this.firstName +
        " " +
        this.lastName +
        " Your email address is: " +
        " " +
        this.emailAddress
      );
    },
  };
}
console.log(selfProfile("Yahya", "Mahmud", "eyahiya@gmail.com"));
console.log(selfProfile("karim", "hasan", "karim4524646@gmail.com"));

// constructor function

function Profile(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;  
  };
}
const name1 = new Profile("yahya", "mahmud", "eyahiya@gmail.com");
console.log(name1.fullName());

