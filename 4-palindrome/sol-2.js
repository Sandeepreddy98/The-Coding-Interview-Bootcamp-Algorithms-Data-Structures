//Using two pointer
function palindrome(str) {
    for(let i = 0;i<str.length/2;i++){
        if(str[i] !== str[str.length - i-1]){
            return false
        }
    }
    return true
}

// Using two pointer using every helper function
function palindrome(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - index - 1]);
}

console.log(palindrome('ababa'));