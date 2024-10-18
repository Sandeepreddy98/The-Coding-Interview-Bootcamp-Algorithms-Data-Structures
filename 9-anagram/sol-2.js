//using sort
function anagram(str1, str2) {
  str1 = str1.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
  str2 = str2.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
  return str1 === str2 ? true : false
}

console.log(anagram("hello", "lleohs"));