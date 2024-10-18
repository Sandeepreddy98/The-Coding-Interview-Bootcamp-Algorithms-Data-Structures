function sentenceCapitalise(sentence) {
  let result = sentence[0].toUpperCase();
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i - 1] === " ") {
      result = result + sentence[i].toUpperCase();
    } else {
      result = result + sentence[i].toLowerCase();
    }
  }
  return result;
}

console.log(sentenceCapitalise("good morning sandeep"));
