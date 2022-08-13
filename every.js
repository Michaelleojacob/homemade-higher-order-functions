//using .every lol
const checkAllValuesInArray = (arr, cb) => arr.every((item) => cb(item));
// console.log(checkAllValuesInArray([1, 2, 3], (num) => num < 2));

// recursive
const all = (arr, cb) => {
  let copy = [...arr];
  if (copy.length === 0) return true;
  if (cb(copy[copy.length - 1])) {
    copy.pop();
    return all(copy, cb);
  } else {
    return false;
  }
};
// console.log(all([1, 2, 9], (num) => num < 10));

// iterative
const all2 = (arr, cb) => {
  let token = true;
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i])) return (token = false);
  }
  return token;
};
// console.log(all2([1, 2, 9, 11], (num) => num < 3));

// recursive but with ternary. -Shorter version of all (no number / 1)
const all3 = (arr, cb) => {
  let copy = [...arr];
  if (arr.length === 0) return true;
  return cb(copy.pop()) ? all(copy, cb) : false;
};
console.log(all3([1, 2, 3, 4, 9], (num) => num < 6));
