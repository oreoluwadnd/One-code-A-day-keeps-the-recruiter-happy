// Return True if every value of an array has its corresponding value squared in the second array.The array lenght must be the same
function same(arr1, arr2) {
  if (arr1 === arr2) {
    return false;
  }
  let firstarr = {};
  let secondarr = {};
  for (let val of arr1) {
    firstarr[val] = (firstarr[val] || 0) + 1;
  }
  for (let val of arr2) {
    secondarr[val] = (secondarr[val] || 0) + 1;
  }
  for (let key in firstarr) {
    //     console.log(key**2)
    console.log(secondarr[key ** 2]);
    if (!(key ** 2 in secondarr)) {
      return false;
    }
    if (secondarr[key ** 2] !== firstarr[key]) {
      return false;
    }
  }

  return true;
}
console.log(same([2, 3, 4, 5], [4, 9, 16, 25]));
