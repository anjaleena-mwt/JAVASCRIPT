/* this is a special keyword in js
this always return a reference to the current object */

const person = {
    name: "Mosh",
    walk(){
        console.log(this);
    }
};
person.walk();

// in JS functions are objects
// const walk = person.walk;//person.walk is actually an object
// console.log(walk); 
 /*If we store it in const walk = person.walk;, and call walk();, 
it will no longer know who owns it (the connection to person is lost).
So here, this will not be person anymore — usually it becomes 
undefined (in strict mode) or the global object (window in browsers) */

// bind method is used to bind a function to an object
// with the bind method we can set the value of "this" permanently
/* when we call bind in the walk function we get a new walk function 
and in that walk function the value of "this" is based on the 
argument that we pass to the bind method so because here 
we're passing the person object as an argument we'll get a 
walk function that is always attached to this person object 
and that's why when we call it here without a reference to 
the person object we'll still see the person object on the console */
const walk = person.walk.bind(person);
walk();