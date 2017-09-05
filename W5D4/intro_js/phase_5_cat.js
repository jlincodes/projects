function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function cuteStatement() {
  // return `${this.owner} loves ${this.name}`;
  return `Everyone loves ${this.name}!`;
};

Cat.prototype.meow = function meow() {
  return `Meow`;
};

// let linux = new Cat("Linux", "David");
// linux.meow = function() {
// ... return "hssssssssssssssssssssssss";
// ... }
// linux.meow()
// 'hssssssssssssssssssssssss'
// breakfast.meow()
// 'Meow'
