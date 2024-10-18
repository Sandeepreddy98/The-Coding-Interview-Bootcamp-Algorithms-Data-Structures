//Using match inbuilt js method
function vowelCounter(string){
    const matches = string.match(/[aeiou]/gi)
   return  matches ? matches.length : 0
}

console.log(vowelCounter('sandeep'))