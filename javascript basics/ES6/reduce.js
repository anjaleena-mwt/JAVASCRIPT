//reduce turns a list of values into one single value

//to calculate the sum of the array
const prices = [4, 8, 15, 16, 23, 42];
const totalPrice = prices.reduce((total, currentPrice) =>{
    return total + currentPrice 
}, 0);
console.log(totalPrice);

const words = ['Hello', ' ', 'world'];
const sentence = words.reduce((result, word)=>{
    return result + word
}, '')
console.log(sentence);