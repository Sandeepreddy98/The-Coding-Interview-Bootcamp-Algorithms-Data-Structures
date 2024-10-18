// Using reduce helper functions
function revereString(str) {
  return str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}

// Using reduce helper functions bit simplier
function revereString(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(revereString("sandeep"));
