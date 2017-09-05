Array.prototype.bubbleSort = function() {
  const sortedArr = this.slice();
  let sorted = true;
  while (sorted) {
    sorted = false;
    for ( let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] > sortedArr[i+1]) {
        [sortedArr[i], sortedArr[i+1]] = [sortedArr[i+1], sortedArr[i]];
        sorted = true;
      }
    }
  }
  return sortedArr;
};

String.prototype.subStrings = function() {
  const subStrings = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      subStrings.push(this.slice(i,j+1));
    }
  }
  return subStrings;
};
