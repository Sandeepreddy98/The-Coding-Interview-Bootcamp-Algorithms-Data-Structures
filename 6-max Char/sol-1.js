// Maximum characters in a string

function maxChar(str){
    let charCount = {}
    for(let i=0;i<str.length;i++){
        if(charCount[str[i]] > 0){
            charCount[str[i]] = charCount[str[i]] + 1
        }else{
            charCount[str[i]] = 1
        }
    }
    let max = 0
    let maxChar = ''
    for(let char in charCount){
        if(charCount[char] > max){
            maxChar = char
            max = charCount[char]
        }
    }
    return "Max Char is " + maxChar + ' : ' + max
}

console.log(maxChar('sandeep'));