const Account = (function () {
  let userEmail = {};
  let userPassword = {};
  let userFirstName = {};
  let userLastName = {};

  function passValidation(userInput, uniqueKey) {
    return userInput === userPassword[uniqueKey];
  }

  function getRandom16Char() {
    const CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ0123456789".split(
      ""
    );
    let result = [];
    for (let idx = 0; idx < 16; idx += 1) {
      let randomIdx = Math.floor(Math.random() * CHARSET.length);
      result.push(CHARSET[randomIdx]);
    }
    return result.join("");
  }

  return {
    init(email, password, firstName, lastName) {
      this.displayName = getRandom16Char();
      userEmail[this.displayName] = email;
      userPassword[this.displayName] = password;
      userFirstName[this.displayName] = firstName;
      userLastName[this.displayName] = lastName;
      return this;
    },

    reanonymize(password) {
      if (!passValidation(password, this.displayName)) {
        return "Invalid password";
      } else {
        let oldUniqueKey = this.displayName;
        this.displayName = getRandom16Char();
        userEmail[this.displayName] = userEmail[oldUniqueKey];
        userPassword[this.displayName] = userPassword[oldUniqueKey];
        userFirstName[this.displayName] = userFirstName[oldUniqueKey];
        userLastName[this.displayName] = userLastName[oldUniqueKey];
        delete userEmail[oldUniqueKey];
        delete userPassword[oldUniqueKey];
        delete userFirstName[oldUniqueKey];
        delete userLastName[oldUniqueKey];
        return true;
      }
    },

    resetPassword(oldPass, newPass) {
      if (!passValidation(oldPass, this.displayName)) {
        return "Invalid password";
      } else {
        userPassword[this.displayName] = newPass;
        return true;
      }
    },

    firstName(password) {
      if (!passValidation(password, this.displayName)) {
        return "Invalid password";
      } else {
        return userFirstName[this.displayName];
      }
    },

    lastName(password) {
      if (!passValidation(password, this.displayName)) {
        return "Invalid password";
      } else {
        return userLastName[this.displayName];
      }
    },

    email(password) {
      if (!passValidation(password, this.displayName)) {
        return "Invalid password";
      } else {
        return userEmail[this.displayName];
      }
    },
  };
})();

let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize("abc"); // returns true
console.log(displayName === fooBar.displayName); // logs false

let bazQux = Object.create(Account).init("baz@qux.com", "123456", "baz", "qux");
console.log(fooBar.firstName("abc")); // logs 'foo'
console.log(fooBar.email("abc")); // logs 'foo@bar.com'

console.log(bazQux.firstName("123456")); // logs 'baz'
