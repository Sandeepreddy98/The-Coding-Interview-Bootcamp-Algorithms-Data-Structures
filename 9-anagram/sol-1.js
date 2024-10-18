//using char map
function anagram(str1, str2) {
  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  let str1CharMap = charMap(str1);
  let str2CharMap = charMap(str2);
  for (let char in str1CharMap) {
    if (str1CharMap[char] !== str2CharMap[char]) {
      return false;
    }
  }
  return true;
}

function charMap(string) {
  let charMap = {};
  for (let char of string) {
    if (charMap[char] > 0) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

console.log(anagram("hello", "lleoh"));
