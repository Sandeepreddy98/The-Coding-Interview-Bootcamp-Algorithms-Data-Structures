//Using JS inbuilt methods
function palindrome(str) {
  return str === str.split("").reverse().join("");
}

// Using regular for loop
function palindrome(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return str === reversed;
}

// Using  for-of loop
function palindrome(str) {
  let reversed = "";
  for (const charcter of str) {
    reversed = charcter + reversed;
  }
  return str === reversed;
}

// Using reduce helper functions
function palindrome(str) {
  return str === str.split("").reduce((rev, char) => {
    return char + rev;
  }, "");
}

// Using reduce helper functions bit simplier
function palindrome(str) {
  return str === str.split("").reduce((rev, char) => char + rev, "");
}
console.log(palindrome("abba"));
