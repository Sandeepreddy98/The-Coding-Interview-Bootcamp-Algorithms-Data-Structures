// Using substring method
function sentenceCapitalise(sentence){
    sentence = sentence.split(' ')
    for(let i = 0 ;i<sentence.length;i++){
        sentence[i] = sentence[i].substring(0,1).toUpperCase() + sentence[i].substring(1,sentence[i].length).toLowerCase()
    }
    return sentence.join(' ')
}

// Using slice method
function sentenceCapitalise(sentence){
    let words = []
    for(let word of sentence.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    }
    return words.join(' ')
}
console.log(sentenceCapitalise("good morning sandeep"));