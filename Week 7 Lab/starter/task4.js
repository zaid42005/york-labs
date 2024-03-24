// JavaScript code for Task 4

// You will need either a session of global variable to complete this
// task.  If you elect to use session variables, you will
// need to initialize these variables.  You can do this by editing the
// HTML file to include a call to initializeSession upon page load.
function initializeSession() {
  // initialize session variables here, if you choose to do so.
  sessionStorage.setItem("currentSum", 0);
}

function addNum(num) {
  var p = document.getElementById("mydata");

  //TODO: complete the following line by calling a sub-algorithm to add
  //'num' to a running sum.  Store the sum as a global or session variable.
  runningSum(num);
  //write the result to p.innerHTML
  p.innerHTML = "Result: " + sessionStorage.getItem("currentSum");
}

// a sub-algorithm to add upTo to a running sum of numbers
// pre-conditions: upTo belongs to Real numbers
// post-conditions: adds upTo to the running sum of numbers stored in memory
function runningSum(upTo) {
  var currentSum = parseInt(sessionStorage.getItem("currentSum")) || 0;

  switch (upTo) {
    case 1:
      currentSum += 1;
      break;
    case 2:
      currentSum += 2;
      break;
    case 3:
      currentSum += 3;
      break;
    case 4:
      currentSum += 4;
      break;
    default:
      currentSum = "invalid input";
  }

  sessionStorage.setItem("currentSum", currentSum.toString());

  /*TODO: implement the body of the function here */
}

window.onload = function() {
  var p = document.getElementById("mydata");
  p.innerHTML = "Result";
};
