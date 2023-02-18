// If else  Conditional
const studyLevel = "average";

if (studyLevel === "hard") {
  console.log("You will pass");
} else if (studyLevel === "average") {
  console.log("You will make an average result");
} else {
  console.log("You will fail");
}

const age = 18;

if (age) {
    console.log('You can vote');
} else {
    console.log(`Your're not aligible for Vote`);
}

// if (age === 18) {
//   console.log("You can vote");
// } else {
//   console.log(`Your're not aligible for Vote`);
// }

// SwichCase Conditional

const var1 = "average";

switch (var1) {
  case "hard":
    console.log("Your will pass");
    break;
  case "average":
    console.log("result average");
    break;
  default:
    console.log("You must study");
}


// Ternary operator
// condition ? true : false ;

const height = 5
const result = height <= 6 && height >= 4 ? `your're average` : 'your short or long';
console.log(result);



