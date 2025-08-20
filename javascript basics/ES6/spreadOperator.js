const first = [1,2,3];
const second = [4,5,6];

// to combine the 2 arrays we can use concat
const combined = first.concat(second);
console.log(combined);

// spread operator is represented using 3 dots ... 
// using the spread operator we can commbine the above, spread will display all the elements in the array
const combined1 = [...first, ...second]; 
console.log(combined1);

// if we want to add an element the using spread will be helpful
const combined2 = [...first, 'a', ...second, 'b']; 
console.log(combined2);

// to clone the above array we can perform the below
const clone = [...first];
console.log(first);
console.log(clone);

// we can use the spread operator with OBJECTS as well
const firstt = {name: 'Askr'};
const secondd = {job: 'Instructor'};
// to combine the above 2 objects perform the below, also we can optionally add other properties
const combinedd = {...firstt, ...secondd, location: 'Australia'};
console.log(combinedd);

// to clone the abve object
const clonee = {...firstt};
console.log(firstt);
console.log(clonee);

