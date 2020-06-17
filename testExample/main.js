const errorStore = [];

function generateRandomError() {
  try {
    const number = Math.floor(Math.random() * 10);
    if (number > 8) {
      throw new Error("number too high!");
    } else {
      console.log(number);
    }
  } catch (error) {
    console.log("We had an error but we will recover!"); // we decided not to stop the execution
    errorStore.push(error); // we will just store the error log
  }
}

generateRandomError();
generateRandomError();
generateRandomError();
