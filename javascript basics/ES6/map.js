// map returns a new array without changing the original array
const prices = [4, 8, 15, 16, 23, 42];
// below is a single arrow function
const discountPrices = prices.map( price => price*0.5 ); //instead of price*0.5 we can give "abc" or any no or whatever
//if we do not return a value then it will show lots of undefined according to the element it has
console.log(prices);
console.log(discountPrices);