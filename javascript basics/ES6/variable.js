/* when we declare a variable with the var keyword 
that variable is accessible inside of the function
in which it is defined */ 
// var is fuction scoped
function sayHello(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); //here, there will be no error
}
sayHello();

/* When we declare a variable with the let keyword that
variable is only accessible inside of that block */
// let is variable scoped, it is used to reassign a variable
function sayHello(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); //here, there will be error
}
sayHello();

// const is used to define constants, it is block scoped
const x=1;
x=2;//x cannot be reassigned