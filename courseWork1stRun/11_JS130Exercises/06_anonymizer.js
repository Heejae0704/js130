function _getRandomString() {
  let nameArr = [];
  let stringArr = "abcdefghijklmnopqrstuvwxyzABCDEFGIHJKLMNOPQRSTUVWXYZ0123456789".split(
    ""
  );
  for (let idx = 0; idx < 16; idx++) {
    let randomIndex = Math.floor(Math.random() * stringArr.length);
    let randomChar = stringArr[randomIndex];
    nameArr.push(randomChar);
  }
  return nameArr.join("");
}

const Account = {
  reanonymize(password) {
    if (password !== this._password) {
      return "Invalid Password";
    } else {
      this.displayName = _getRandomString();
      return true;
    }
  },
  resetPassword(oldPass, newPass) {
    if (oldPass !== this._password) {
      return "Invalid Password";
    } else {
      this._password = newPass;
      return true;
    }
  },
  firstName(password) {
    if (password !== this._password) {
      return "Invalid Password";
    } else {
      return this._firstName;
    }
  },
  lastName(password) {
    if (password !== this._password) {
      return "Invalid Password";
    } else {
      return this._lastName;
    }
  },
  email(password) {
    if (password !== this._password) {
      return "Invalid Password";
    } else {
      return this._email;
    }
  },
  init(email, password, firstName, lastName) {
    this._email = email;
    this._password = password;
    this._firstName = firstName;
    this._lastName = lastName;
    this.displayName = _getRandomString();
    return this;
  },
}();

let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize("abc")); // returns true
console.log(displayName === fooBar.displayName); // logs false
