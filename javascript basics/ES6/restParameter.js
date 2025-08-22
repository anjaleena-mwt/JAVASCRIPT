// Rest Parameter (...) -Used to collect multiple elements into a single array
// In function parameter
function sum(...numbers){
    return numbers.reduce((total,n) => total + n, 0);
}
console.log(sum(1,2,3,4));


// Collecting remaining elements 
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

//Rest (...) → Collects values into an array/object → gathers things together.

// Collecting remaining properties (object destructuring)
const { name, ...others } = { name: "Sarah", age: 22, city: "Kochi" };
console.log(name);   // "Sarah"
console.log(others); // { age: 22, city: "Kochi" }
