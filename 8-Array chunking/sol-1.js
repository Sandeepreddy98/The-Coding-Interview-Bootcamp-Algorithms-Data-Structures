// using regular for of loop
function arrayChunking(arr, size) {
  let chuncked = [];
  for (let element of arr) {
    const last = chuncked[chuncked.length - 1];
    if (!last || last.length === size) {
      chuncked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chuncked;
}

console.log(arrayChunking([1, 2, 3, 4, 5, 6], 3));
