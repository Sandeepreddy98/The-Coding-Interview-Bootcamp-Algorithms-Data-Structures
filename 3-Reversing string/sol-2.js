// Using regular for loop
function revereString(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// Using  for-of loop
function revereString(str) {
  let reversed = "";
  for (const charcter of str) {
    reversed = charcter + reversed;
  }
  return reversed;
}

console.log(revereString("sandeep"));
