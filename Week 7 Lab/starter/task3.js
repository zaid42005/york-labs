// JavaScript code for Task 3
function generateNum(num) {
  var p = document.getElementById("mydata");

  //TODO: complete the following line by calling a sub-algorithm to generate a number with
  //a number of digits equal to 'num'
  var result = generateDigits(num);

  //write the result to p.innerHTML

  p.innerHTML = "Result:" + result;
}

// a sub-algorithm to return sum of natural numbers up to upTo
// pre-conditions: upTo belongs to Natural numbers and is less than 5
// post-conditions: returns an integer with a number of digits equal to 'upTo'
function generateDigits(upTo) {
  var result = 0;
  switch (upTo) {
    case 1:
      result = Math.floor(Math.random() * 10);
      break;
    case 2:
      result = Math.floor(Math.random() * 100);
      break;
    case 3:
      result = Math.floor(Math.random() * 1000);
      break;
    case 4:
      result = Math.floor(Math.random() * 10000);
      break;

    default:
      result = "Invalid input";
  }

  return result;
}

window.onload = function() {
  var p = document.getElementById("mydata");
  p.innerHTML = "Result";
};

