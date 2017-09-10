// const currySum = function(numArgs) {
//   const arr = [];
//   function _curriedSum(arg) {
//     arr.push(arg);
//
//     if (arr.length === numArgs) {
//       let sum = 0;
//       arr.forEach( (el) => {
//         sum += el;
//       });
//       return sum;
//     } else {
//       return _curriedSum;
//     }
//   }
//   return _curriedSum;
// };
//
// console.log(currySum(4)(5)(2)(3)(1));

// Function.prototype.curry = function(numArgs) {
//   // debugger;
//   const funct = this;
//   const arr = [];
//   function _curried(arg) {
//     arr.push(arg);
//
//     if (arr.length === numArgs) {
//       return funct.apply(null, arr);
//     } else {
//       return _curried;
//     }
//   }
//   return _curried;
// };
//
// const sum = function sum(...arr) {
//   let total = 0;
//   arr.forEach( (el) => {
//     total += el;
//   });
//   return total;
// };
//
// console.log(sum.curry(4)(5)(2)(3)(1));
//
// Function.prototype.inherit1 = (parent) => {
//   this.prototype = Object.create(parent.prototype);
//   this.prototype.constructor = this;
// };
//
// Function.prototype.inherit2 = (parent) => {
//   const Surrogate = function Surrogate() {};
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };
//
// const binarySearch = function binarySearch (array, target) {
//   if (array.length === 0) return -1;
//
//   let mid = Math.floor(array.length / 2);
//   if (array[mid] === target) return mid;
//   if (array[mid] > target) {
//     let left = array.slice(0, mid);
//     return binarySearch(left, target);
//   } else {
//     let right = array.slice(mid+1);
//     let result = binarySearch(right, target);
//     return result === -1 ? -1 : mid + 1 + result;
//   }
// };
//
// console.log(binarySearch([1,2,3,4,5,6,7], 6)); // == 5
// console.log(binarySearch([1,2,3,4,5,6,7], 2)); // == 1

const margeSort = function margeSort(arr, comparator) {
  // debugger;
  if(arr.length === 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = margeSort(arr.slice(0, mid), comparator);
  let right = margeSort(arr.slice(mid),comparator);
  return marge(left, right, comparator);
};

const marge = function marge(left, right, comparator) {

  let marged = [];
  while (left.length > 0 && right.length > 0) {
    if (comparator(left[0],right[0]) < 0) {
      marged.push(left.shift());
    } else {
      marged.push(right.shift());
    }
  }
  // debugger;
  return marged.concat(left).concat(right);
};

console.log(margeSort([4,5,7,3,5,2,1,9], compy));

function compy(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

Function.prototype.mybind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};
Function.prototype.mybind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    let args = bindArgs.concat(callArgs);
    return this.call(ctx, ...args);
  };
};
