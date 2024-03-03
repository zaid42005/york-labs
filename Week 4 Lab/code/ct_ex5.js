// in Ex2 to Ex5, you will change the name of the following function
function convert() {

  /* in Ex1, change the following two lines such that the 
	numbers are parsed to integers before being assigned to 
	variables.*/
  var temperature= parseFloat(document.getElementById("temperature").value);
  var unit= document.getElementById("unit").value;

  /* in Ex 2, change the variables to floating point numbers instead. */  

  // You will need to alter the code below for Ex 2-5
  var result = ""

  if (unit == "C"){
    result = (temperature*9/5) + (32).toFixed(2) + " degrees Fahrenheit"
  }
  else if (unit == "F"){
    result = (temperature-32)*(5/9).toFixed(2) + " degrees Celsius"
  }
  else{
    "Invalid"
  }
  

  
  /* in Ex2 to Ex5, you will want to rename "addedvalue" to make it appropriate
     for those problems. You will also want to adjust the prefix to the output
     in order to match the images in the specification. */ 
   document.getElementById("output").innerHTML = "Conversion: "+ result; 

}
