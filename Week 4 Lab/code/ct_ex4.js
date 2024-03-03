// in Ex2 to Ex5, you will change the name of the following function
function month() {

  /* in Ex1, change the following two lines such that the 
	numbers are parsed to integers before being assigned to 
	variables.*/
  var month= parseInt(document.getElementById("month").value);

  /* in Ex 2, change the variables to floating point numbers instead. */  

  // You will need to alter the code below for Ex 2-5
  var answer = ""
  switch (month) {
    case 1:
        answer = "January";
        break;
    case 2:
        answer = "February";
        break;
    case 3:
        answer = "March";
        break;
    case 4:
        answer = "April";
        break;
    case 5:
        answer = "May";
        break;
    case 6:
        answer = "June";
        break;
    case 7:
        answer = "July";
        break;
    case 8:
        answer = "August";
        break;
    case 9:
        answer = "September";
        break;
    case 10:
        answer = "October";
        break;
    case 11:
        answer = "November";
        break;
    case 12:
        answer = "December";
        break;
    default:
        answer = "Invalid";
  }
  
  /* in Ex2 to Ex5, you will want to rename "addedvalue" to make it appropriate
     for those problems. You will also want to adjust the prefix to the output
     in order to match the images in the specification. */ 
   document.getElementById("output").innerHTML = "Month: "+ answer; 

}
