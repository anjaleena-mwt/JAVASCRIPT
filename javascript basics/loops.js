// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for...of (array)
const arr = ["apple","banana"];
for (const fruit of arr) {
  console.log(fruit);
}

// .map example -> transforms array
const prices = [10, 20, 30];
const doubled = prices.map(p => p * 2);
console.log(doubled);

// filter example -> selects based on the condition specified
const expensive = prices.filter(p => p > 15);
console.log(expensive);
