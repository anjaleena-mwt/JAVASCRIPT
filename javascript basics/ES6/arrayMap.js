/* ECMO script 6 introduced a new method in arrays called map 
this is a very useful method and in react we use it to render lists */

const colors = ['red', 'green', 'blue'];
// const items = colors.map(function(color){
//     return '<li>' + color + '</li>';
// });  or we can use the arrow function

// const items = colors.map(color =>'<li>' + color + '</li>' );
// we can use the template literal backtick for the above

const items = colors.map(color =>`<li>${color}</li>` );
console.log(items);