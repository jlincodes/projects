function range(start, end) {
  // let rangeArr = [];
  if (start === end) {
    return [start];
  }
  let ansArr = range(start,(end-1));
  ansArr.push(end);
  return ansArr;
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let last = arr.pop();
  last += sumRec(arr);
  return last;
}
// easy version
function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  let ans = base * exponent1(base, (exp-1));
  return ans;
}

function exponent(base, exp)  {
  if (exp === 0) {
    return 1;
  }
  else if (exp === 1) {
    return base;
  }
  // even
  if (exp % 2 === 0) {
    let x = exponent(base, exp/2);
    x *= x;
    return x;
    }
    else {
      let y = (exponent(base, ((exp - 1)/2)));
      y *= y;
      y *= base;
      return y;
    }
}

function fib(n) {
  if (n === 2) {
    return [1,1];
  }
  else if (n === 1) {
    return [1];
  }
  let y = fib(n-1);
  y.push(y[y.length-1] + y[y.length-2]);
  return y;
}

function bSearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  else if (arr.length === 1) {
    if (arr[0] === target) {
      return 0;
    }
    else {
      // not found
      return -1;
    }
  }
  let midpointIndex = Math.floor(arr.length/2);

  if (arr[midpointIndex] < target) {
    let indx =  bSearch(arr.slice(midpointIndex,arr.length), target);
    if (indx === -1) {
      return indx;
    } else {
      return (indx + midpointIndex);
    }
  }
  else if (arr[midpointIndex] > target) {
    let indx = bSearch(arr.slice(0,midpointIndex), target);
    return indx;
  }
  else {
    return midpointIndex;
  }
}

// arr = [1,2,3,4, 5]
// target = 7

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merged(mergeSort(left), mergeSort(right));

}

function merged(subarr1, subarr2) {
  const mergedArr = [];

  while (subarr1.length !== 0 && subarr2.length !== 0 )  {
    console.log(subarr1);
    console.log(subarr2);
    let nextVal = (subarr1[0] < subarr2[0]) ?
      subarr1.shift() : subarr2.shift();
    mergedArr.push(nextVal);
  }
  console.log(mergedArr);
  console.log("\n");
  return mergedArr.concat(subarr1, subarr2);
}

function subset(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  const first = arr[0];
  const withoutFirst = subset(arr.slice(1));
  const withFirst = withoutFirst.map(sub => [first].concat(sub));

  return withoutFirst.concat(withFirst);  
}
