const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// class addNumbers {
//   constructor() {
//
//   }
//
//   sum () {
//
//   }
//
//   numsLeft() {
//
//   }
//
//   completionCallback(){
//
//
//   }
// }


function addNumbers(sum = 0,numsLeft = 3,completionCallback) {

  if (numsLeft > 0) {
      reader.question(`Please choose a number: `,(answer) =>{
        let num = parseInt(answer);
        sum += num;
        console.log(sum);
        numsLeft -= 1;
        addNumbers(sum, numsLeft,completionCallback);
      });
  } else {
    completionCallback(sum);
  }
}

const printSum = function (sum) {
  console.log(sum);
};

addNumbers(0,3,function (sum) {
  console.log(sum);
  reader.close();
});
