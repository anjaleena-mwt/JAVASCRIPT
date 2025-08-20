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


const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

// to get only the active jobs
// job is an object
const activeJobs = jobs.filter(function(job) { return job.isActive; });
//short way to write the above
const activeJob = jobs.filter(job => job.isActive );
console.log(activeJob);

//Arrow functions and this
// const person = {
//     talk() {
//         console.log('this', this);
//     }
// };
// person.talk();

// setTimeout 
/* When we call a function as a standalone function outside 
of an object by default this returns the window object */
const person = {
    talk() {
        setTimeout(function() {
            console.log("this", this);
        }, 1000); 
    }
};
person.talk();
