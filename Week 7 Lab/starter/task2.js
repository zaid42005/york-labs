function initializeSession() {
  //On page load, set some session variables.
  //These will maintain the state of our program while our HTML page
  //is loaded. See task0.js for more details.
  if (!("fives" in sessionStorage)) sessionStorage.setItem("fives", "0");

  //display current count of fives
  document.getElementById("totals").innerHTML =
    "Number of 5s: " + sessionStorage.fives;
}

function myFunction() {
  //This method is called when the number generation button in HTML is pressed

  //First, generate random number between 0 and 9 below
  result = Math.floor(Math.random() * 10);

  //result = ... // replace with your code

  //Pass the outcome to a sub-routine
  tallyResult(result);
}

function tallyResult(result) {
  let tally = parseInt(sessionStorage.getItem("fives"));
  //In this function, determine if the result is a 5.
  //If yes, update your record of the number of 5s
  //that have been generated thus far. Your record
  //should be maintained in the session variable: sessionStorage.fives

  if (result === 5) {
    tally++;
    sessionStorage.setItem("fives", tally.toString());
  }

  //Write your result to the paragraph with id "mydata"
  document.getElementById("mydata").innerHTML = "Result is: " + result;
  //Write your count of 5s to the paragraph with id "totals"
  document.getElementById("totals").innerHTML = "Nums 5s thus far:" + tally;
  //Remember to STORE YOUR UPDATED SESSION VARIABLES before
  //you exit this method.
}
