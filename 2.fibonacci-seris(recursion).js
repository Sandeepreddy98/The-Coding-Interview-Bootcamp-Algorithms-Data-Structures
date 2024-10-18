//Using Recursion
function fibonacci(n){
    if(n < 2) { 
        return n
    }
    return fibonacci(n-1) + fibonacci (n-2)
}

//Using iterative
// function fibonacci(n){
//     let fibValue = 0
//     for(let i=0;i<=n;i++){
//         fibValue = fibValue + i
//     }
//     return fibValue
// }
// print seris using iterative approach [0,1,1,2,3,5,8,13,21]
function fibonacciSeris(n){
    
}
// using memoize to reduce run time complexity

function memoize(fn){
    let cache={}
    return function(...args) {
        if(cache[args]){
            return cache[args]
        }
        const result = fn.apply(this,args)
        cache[args] = result
        return result
    }
}

console.log(fibonacci(10));
console.log(memoize(fibonacci));
