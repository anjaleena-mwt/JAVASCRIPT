const address = {
    street: '',
    city: '',
    country: ''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

// destructuring syntax for the above
const { street, city, country } = address; //here no repetition of address., its not necessary to give street, city, country all 3 

// we can change the name of the const aka alias names
const{ street:st } = address;


// OBJECT DESTRUCTURING - extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a);
console.log(b);

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
