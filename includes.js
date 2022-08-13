// .includes
const doesInclude = (arr, target) => {
  let token = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return (token = true);
    }
  }
  return token;
};
// console.log(doesInclude([1, 2, 3, 4], 1));

// using a for loop
const removeFromArray = (keepArr, removeArr) => {
  const res = [];
  for (let i = 0; i < keepArr.length; i++) {
    if (!doesInclude(removeArr, keepArr[i])) res.push(keepArr[i]);
  }
  return res;
};
// console.log(removeFromArray([1, 2, 3, 4], [2, 3]));

// using filter
const removeFromArray2 = (keepArr, removeArr) => {
  return keepArr.filter((item) => !doesInclude(removeArr, item));
};
console.log(removeFromArray2([1, 2, 3, 4], [2, 3]));
