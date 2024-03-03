// in Ex2 to Ex5, you will change the name of the following function
function roots() {

  /* in Ex1, change the following two lines such that the 
	numbers are parsed to integers before being assigned to 
	variables.*/
  var a= parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  /* in Ex 2, change the variables to floating point numbers instead. */  

  // You will need to alter the code below for Ex 2-5
  var discriminant = b**2 - (4*a*c)
  var result = ""

  if (discriminant == 0){
    result = "1"
  }
  else if(discriminant > 0){
    result = "2"

  } 
  else{
    result="no"
  }
  /* //in Ex 4, uncomment this block
  switch (a){
    case (1): 
      answer = "January";
      break;
    case (2): 
      answer = "February";
      break;
      // in Ex4, you need to add cases for other months
      // as well as a case for an invalid month
  }
  */
  
  /* in Ex2 to Ex5, you will want to rename "addedvalue" to make it appropriate
     for those problems. You will also want to adjust the prefix to the output
     in order to match the images in the specification. */ 
   document.getElementById("output").innerHTML = "this equation has " + result + " real roots"; 

}
