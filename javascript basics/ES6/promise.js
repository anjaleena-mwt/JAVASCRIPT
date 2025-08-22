// Creating a Promise
let examResult = new Promise((resolve, reject) => {
  let marks = 75;

  if (marks >= 50) {
    resolve("🎉 You passed the exam!");
  } else {
    reject("❌ You failed the exam.");
  }
});

// Use the Promise
examResult
// then(): Used to handle the successful completion (fulfillment) of a Promise
  .then(result => console.log(result))  // if resolved
// catch(): Used to handle the failure (rejection) of a Promise.
  .catch(error => console.log(error)); // if rejected
