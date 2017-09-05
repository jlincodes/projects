// .load phase_1_arrays.js
Array.prototype.uniq = function uniq () {
  const uniqArr = [];
  this.forEach(el=>{
    if (!uniqArr.includes(el)) {
      uniqArr.push(el);
    }
  });
  return uniqArr;
};

Array.prototype.twoSum = function twoSum() {
  const positions = [];

  for (let i = 0; i< (this.length - 1); i++) {
    for (let j = i+1; j< this.length; j++) {
      if (this[i] + this[j] === 0) {
        positions.push([i,j]);
      }
    }
  }
  return positions;
};

Array.prototype.transpose = function transpose() {
  const transposed = [];
  for (let i = 0; i < this.length; i++) {
    transposed.push([]);
  }
  this.forEach(arr=>{
    arr.forEach((el, idx)=>{
      transposed[idx].push(el);
    });
  });
  return transposed;
};
