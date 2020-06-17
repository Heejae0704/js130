const LOCATION_BEGINS_AT = "a".charCodeAt();
const LOCATION_ENDS_AT = "z".charCodeAt();

function getReplacedChar(char) {
  const newCharCode =
    LOCATION_ENDS_AT - (char.charCodeAt() - LOCATION_BEGINS_AT);
  return String.fromCharCode(newCharCode);
}

function groupFive(str) {
  if (str.length <= 5) return str;
  return str.substring(0, 5) + " " + groupFive(str.substring(5));
}

function encode(str) {
  const preprocessedStr = str
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[a-z0-9]/));

  const newStrArr = [];

  preprocessedStr.forEach((char) => {
    if (char.match(/[a-z]/)) {
      newStrArr.push(getReplacedChar(char));
    } else newStrArr.push(char);
  });

  return groupFive(newStrArr.join(""));
}

module.exports = encode;
