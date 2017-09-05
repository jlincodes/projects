Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const mapped = [];
  this.myEach(el => {
    mapped.push(callback(el));
  });
  return mapped;
};


Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = 0;
  if ((initialValue === null) && (this.length >= 1)) {
    accumulator = this[0];
  }
  this.myEach((el)=> {
    accumulator = callback(accumulator, el);
  });
  return accumulator;
};
// arr.myReduce((accumulator, el) => accumulator + el);
