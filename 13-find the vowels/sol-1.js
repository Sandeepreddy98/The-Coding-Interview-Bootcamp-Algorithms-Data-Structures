function vowelCounter(string){
    let vowels = 'aeiou'
    let counter = 0
    for(let char of string){
        if(vowels.includes(char)){
            counter++
        }
    }
    return counter
}

console.log(vowelCounter('sandeep'))