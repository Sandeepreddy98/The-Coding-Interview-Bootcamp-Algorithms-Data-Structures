function selectionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let minIndex = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            const lesser = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

console.log(selectionSort([10,-30,97,0,5]));