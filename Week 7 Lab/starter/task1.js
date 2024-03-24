//you will need to create a global variable in this file.
var tally = 0;
function myFunction() {
  //This method is called when the number generation button in HTML is pressed
  
  //First, generate random number between 0 and 9 below
  result = Math.floor(Math.random() * 10)

  //result = ... // replace with your code 

  //Pass the outcome to a sub-routine
  tallyResult(result);
}

function tallyResult(result) {

  //In this function, determine if the result is a 5.
  //If yes, update your global record of the number of 5s
  //that have been generated thus far. 
  if (result === 5){
    tally++
  }
  
  //Write you result to the paragraph with id "mydata"
  document.getElementById("mydata").innerHTML = "Result is: " + result;
  //Write you count of 5s to the paragraph with id "totals"
  document.getElementById("totals").innerHTML = "Num 5s thus far: " +tally;

}

