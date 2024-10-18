function merger(left,right){
    let results = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift())
        }else {
            results.push(right.shift())
        }
    }

    return [...results,...left,...right]
}


function mergeSort(arr){
    if(arr.length === 1) { 
        return arr
    }
    const left = arr.slice(0,Math.floor(arr.length / 2))
    const right = arr.slice(Math.floor(arr.length / 2))
    return merger(mergeSort(left),mergeSort(right))
}

console.log(mergeSort([10,-30,97,0,5]));