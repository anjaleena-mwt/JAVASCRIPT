const address = {
    street: '',
    city: '',
    country: ''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

// destructuring syntax for the above
const { street, city, country } = address; //here no repetition of address., its not necessary to give street, city, country all 3 

// we can change the name of the const aka alias names
const{ street:st } = address;
