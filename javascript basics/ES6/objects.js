//objects in js are collections of key value pairs
/* In OOP terms if we have a function inside of an
object we refer to that function as a method*/

// walk is a method in the person object

const person = {
    name: 'Sarah',
    walk: function() {},
    // or in es6
    talk() {}
};
//above we have a person object with one property and 2 methods

// there are 2 ways to access these members
// (i)we can use the dot notation
person.talk();

// (ii)we can use the bracket notation
person['name'] = 'John';
//or

/*if we do not know what property or method we are going 
to access , 1st we'll define a constant targetMember
imagine this targetMember is an input field of a form*/

person.name='';
const targetMember = 'name';
// we can dynamically access a property or a method
person[targetMember.value] = 'John';