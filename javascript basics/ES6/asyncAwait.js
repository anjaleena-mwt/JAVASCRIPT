// async makes a function return a Promise
// await makes a function wait for a Promise


// Function that returns a Promise
function checkExam() {
  return new Promise((resolve, reject) => {
    let marks = 75;

    if (marks >= 50) {
      resolve("🎉 You passed the exam!");
    } else {
      reject("❌ You failed the exam.");
    }
  });
}

// Async function to use await
async function getResult() {
  try {
    let result = await checkExam(); // wait until promise resolves/rejects
    console.log(result); // if success
  } catch (error) {
    console.log(error); // if failure
  }
}

// Call the async function
getResult();
