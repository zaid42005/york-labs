//Lab 7. This file includes some example methods
//that you can use to help inform your lab.

//Goals are to:
//1. Introduce the idea of maintenance of state
//2. Introduce random number generation
//3. Introduce subroutines and passing of function parameters

var tcount = 0; // this is a GLOBAL variable. 
var hcount = 0; // this is another GLOBAL variable. 

// GLOBAL varables maintain values outside the scope of any function.
// The GLOBAL variables' values persist across many function calls.
// When you navigate away from the page, however, the values will be cleared.

function initializeSession() {
  //We use this method to set some SESSION variables.
  //These will maintain values across multiple web pages.
  //The values in the SESSION variables can persist even after
  //we leave the current page.

  //Session variables are key-value (i.e. variable-value) pairs.
  //Below we make two variables, one named 'heads' with a value of '0'.
  //The other is named 'tails' with a value of '0'.
  //Note that all key-value pairs stored in sessionStorage are strings.
  if (!("heads" in sessionStorage)) sessionStorage.setItem("heads", "0");
  if (!("tails" in sessionStorage)) sessionStorage.setItem("tails", "0");

  //display current values
  document.getElementById("global").innerHTML = "Heads: 0 Tails: 0" 
  document.getElementById("session").innerHTML = "Heads: " + parseInt(sessionStorage.heads).toString() +  " Tails: " + parseInt(sessionStorage.tails).toString() 

}

function myFunction() {
  //This method is called when the coin flip button in HTML is pressed
  var result = Math.floor(Math.random() * 2); //generate random number between 0 and 1
  //we will pass the outcome of the coin toss (result) to a sub-routine
  coinFlip(result);
}

function coinFlip(result) {

  //Let's update our records of the number of heads and tails
  //that have been generated thus far. We'll update both 
  //the records that are stored in GLOBAL and SESSION variables

  //First, we will access the values of variables stored in session data:
  var heads = parseInt(sessionStorage.heads)
  var tails = parseInt(sessionStorage.tails)

  //Next, update our global and session records
  if (result == 1) {
    document.getElementById("mydata").innerHTML = "Heads"
    heads += 1 //for session storage
    hcount += 1 //for global storage
  } else {
    document.getElementById("mydata").innerHTML = "Tails"
    tails += 1 //for session storage
    tcount += 1 //for global storage
  }

  //save the session variables
  sessionStorage.setItem("heads", heads.toString());
  sessionStorage.setItem("tails", tails.toString());

  //Update the outputs and continue.
  //Try RELOADING the page to see the difference between
  //SESSION and GLOBAL variables
  document.getElementById("global").innerHTML = "Heads: " + hcount.toString() +  " Tails: " + tcount.toString() 
  document.getElementById("session").innerHTML = "Heads: " + parseInt(sessionStorage.heads).toString() +  " Tails: " + parseInt(sessionStorage.tails).toString() 
}

/* The function below nukes the variables stored in sessionStorage */
function restartSession() {
  sessionStorage.clear(); // clear values

  // let's go ahead and reset the session variables, in case we want to start again.
  if (!("heads" in sessionStorage)) sessionStorage.setItem("heads", "0");
  if (!("tails" in sessionStorage)) sessionStorage.setItem("tails", "0");
  document.getElementById("session").innerHTML = "Heads: " + parseInt(sessionStorage.heads).toString() +  " Tails: " + parseInt(sessionStorage.tails).toString() 

}

