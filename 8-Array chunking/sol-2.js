// Using splice js inbuit function
function arrayChunking(arr, size) {
    let chunked = [];
    for (let i = 0; i < arr.length; i++) {
        chunked.push(arr.splice(i, size));
      i = i - 1;
    }
    return chunked;
}

// Using slice js inbuit function
function arrayChunking(arr, size) {
    let chunked = []
    for(let i = 0; i < arr.length; i++){
        chunked.push(arr.slice(i,i+size))
        i = (i+size) - 1
    }
    return chunked
}

// Using slice while loop js inbuit function
function arrayChunking(arr, size) {
    let chunked = []
    index = 0
    while(index < arr.length){
        chunked.push(arr.slice(index,index + size))
        index = index + size
    }
    return chunked
}

console.log(arrayChunking([1, 2, 3, 4, 5, 6], 2));