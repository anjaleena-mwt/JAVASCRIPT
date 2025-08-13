// Array: a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];//Array declaration

fruits[0] = "coconut";
fruits[3] = "grapes";


// Array functions
// 1- PUSH - to push an element to the end
// fruits.push("kiwii");

// 2-POP - used to remove the last element
// fruits.pop("kiwii");

// 3-UNSHIFT method will add an element to the beginning
// fruits.unshift("mango");

// 4-SHIFT is used to remove an element from the beginning
// fruits.shift();

// 5-LENGTH property is used to get the length of an array
// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// indexOf() We can find the index of an element if there's a match
let numOfFruits = fruits.length;
let index = fruits.indexOf("grapes");//if the item is not there in the list this method will return a -1 as output
console.log(index);

// we can use for loop to Loop through the elements and display them
console.log("For loop")
for(let i = 0; i< fruits.length; i++)
{
    console.log(fruits[i]);
}
console.log("J for loop")
for(let j = 0; j< fruits.length; j+=2)
{
    console.log(fruits[j]);
}

// If you want to display the order of the array in reverse
console.log("for loop array reverse")
for(let rev=fruits.length; rev>=0;rev--)
{
    console.log(fruits[rev]);
}

// Enhanced for loop is - for of
console.log("Enhanced for loop - for of")
for(let  fruit of fruits)
{
    console.log(fruit);
}

//sort method - to sort an array 
fruits.sort();

// reverse method - to reverse the elements
fruits.reverse();

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); 