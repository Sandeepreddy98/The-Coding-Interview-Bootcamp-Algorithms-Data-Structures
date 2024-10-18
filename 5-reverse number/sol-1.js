// convert number to string and reverse it and then convert to int multiply with math.sign(number)

function revereInt(number){
    return Math.sign(number) * parseInt(number.toString().split('').reverse().join(''))
}

//using while loop
function revereInt(number){
    if(number < Math.pow(-2, 31) || number > Math.pow(2, 31)-1){
        return 0
    }
    let reversed = 0
    let initial = number
    number = Math.sign(number) * number
    while(number !== 0){
        let lastDigit = number % 10;
        reversed = (reversed * 10 ) + lastDigit
        number = Math.floor(number / 10)
    }
    return initial > 0 ? reversed : Math.sign(initial) * reversed
}

console.log(revereInt(1534236469));