// Arranging multiple data with better naming

const profile = {
    name: "Yahya",
    age: 24,
    profession: "Student"
}

console.log(profile.name);
console.log(profile['age']);


// Updating the data in Object

const hobby = {
    football: true,
    cricket: true,
    carrom:true,
}
console.log(hobby);
console.log(hobby.football);
console.log(hobby.carrom);

hobby.football = false;
hobby.carrom = false;

console.log(hobby.football);
console.log(hobby.carrom);


// nested object

const randObj = {
    name: "eyahiya",
    mail: "yam@gmail.com",
    age: 24,
    hobby : {
        hobby1: 'football',
        hobby2: 'cricket',
        hobby3: 'carrom',
    },
    profession: ['Web designer', 'Web Developer', 'Student'],
}
console.log(randObj.mail);
console.log(randObj.hobby.hobby1);
console.log(randObj.profession[0]);
console.log(randObj.profession[2]);