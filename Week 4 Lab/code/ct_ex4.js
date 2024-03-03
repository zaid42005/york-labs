// in Ex2 to Ex5, you will change the name of the following function
function month() {

  /* in Ex1, change the following two lines such that the 
	numbers are parsed to integers before being assigned to 
	variables.*/
  var month= parseInt(document.getElementById("month").value);

  /* in Ex 2, change the variables to floating point numbers instead. */  

  // You will need to alter the code below for Ex 2-5
  var result = ""
  switch (month) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
    case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result = "May";
        break;
    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break;
    case 12:
        result = "December";
        break;
    default:
        result = "Invalid";
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
   document.getElementById("output").innerHTML = "Month: "+ result; 

}
