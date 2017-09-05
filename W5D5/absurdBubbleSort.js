const readline = require(`readline`);
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? Yes or no? `,
    function (answer) {
      console.log("Inside the question");
    if (answer === 'yes') {
      callback(true);
    }
    else {
      callback(false);
    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log("In innerBubbleSortLoop");
  console.log(i);
  // Do an "async loop":
  if (i === arr.length - 1) {
    // outerBubbleSortLoop(askIfGreaterThan.callback);
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
    // console.log(arr);
    askIfGreaterThan(arr[i], arr[i + 1], function (swap) {
      if (swap === true) {

        // arr[i], arr[i + 1] = arr[i + 1], arr[i];
        let storedVar = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = storedVar;
        storedVar = [];
        madeAnySwaps = true;
        // console.log(arr);
      }
      console.log("INSIDE SWAP");
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps,outerBubbleSortLoop);
    });



}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    console.log("In outerBubbleSortLoop");
    if(madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}
//
absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
