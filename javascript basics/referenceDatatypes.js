// let name = 'ASKR';
// let age = 30; or we can use an object ref type

// OBJECTS IN JS
let person = {
    name: 'ASKR',
    age: 30
};

// console.log(person);

//to chnage the name of the person - there are 2 ways
// 1st one is DOT NOTATION
person.name = 'John';
console.log(person.name);

// 2nd is BRACKET NOTATION
person['name'] = 'Mary'; 
console.log(person.name);

let selection = 'name';
person[selection] = 'Mary'; 
console.log(person.name);


// ARRAYS IN JS
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1; 
console.log(selectedColors);
console.log(selectedColors[0]);

// PROPERTIES OF AN ARRAY can be used using dot operator
console.log(selectedColors.length);//length property returns the number of items or elements in an array


// FUNCTIONS
function greet() {
    console.log('Hello World');
}

greet();

// TYPES OF FUNCTIONS
// 1 -Performing a Task
function greetName(name, lastName) {//name is parameter(parameter is what we have at the time of declaration)
    console.log('Hello' + name + lastName);
}

greetName(' Sarah ');//Sarah is argument(argument is the actual value that supply for the above parameter)
// since i didn't pass any value after Sarah so by default the it will print (var is) undefined
greetName(' Magi', ' C G');//A function can have multiple parameters

// 2 - Calculating a value
function square(number){
    return number * number;
}
let n = square(2);
console.log(n);
// or
console.log(square(3));


