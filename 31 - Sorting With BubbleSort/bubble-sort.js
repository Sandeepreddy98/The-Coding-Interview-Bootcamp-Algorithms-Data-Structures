function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                const lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    return arr
}


console.log(bubbleSort([10,-30,97,0,5]));