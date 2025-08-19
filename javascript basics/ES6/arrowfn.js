const square = function(number){
    return number*number;
}

/* in es6 - to convert the above function to arrow fn 
we get rid of the function keyword and put the arrow between
the parameters and body of the function 
If we have only a single parameter we can exclude parameters 
If you have zero parameters we have to add empty parentheses*/
// const square = () => {//this is a function that takes no parameters
//     return number*number;
// }

// below we have a single parameter "number"
/* if the body of our fn includes only a single line 
we can remove the return as well as the {} */
const squaree = (number) => number*number;
console.log(squaree(5));
