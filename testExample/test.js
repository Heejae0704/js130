try {
  foo();  // 8. since the error is handled and ignored within foo function, catch block will not run
} catch (error) {
  console.log("That's all folks!"); // so this code will not execute
}

console.log("End program"); // 9. there is no error thrown in the above code, this code will execute at last

function foo() {
  try {
    try {
      doThis();  // 1. The function is not defined. This exception throws an error
      console.log("tried to run doThis"); // This will not run as we have an error above
    } catch (error) {
      if (error instanceof ReferenceError) { // 2. true (tried to call undefined function)
        console.log("Got a ReferenceError exception"); // 3. string here will be printed
      }

      throw error; // 4. re-throw the error
    }
  } catch (error) { // 5. caught the re-thrown error here
    console.log("Got exception"); // 6. string here will be printed
  }

  console.log("Done with foo()"); // 7. since the last catch statement did not re-throw error, this part of the code will run, and the string will be printed.
}
