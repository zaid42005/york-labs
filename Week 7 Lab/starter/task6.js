// JavaScript code for Task 6

function myFunction() {
    var p = document.getElementById("mydata");
    //call a sub-algorithm to return the current time and date in a specific format
    p.innerHTML = getDateInCustomizedFormat();
  }
  
  // a sub-algorithm to return the current date in a customized format
  // pre-conditions: none
  // post-conditions: returns current time and date in the following format: "It is DAYOFWEEK (MONTH, DAY, YEAR) at HOUR:MIN."
  //                  where capital words are replaced by appropriate values.
  function getDateInCustomizedFormat() {
    var d = new Date();
    var dayOfWeek = d.getDay();
    var month = d.getMonth();
    var day = d.getDate();
    var year = d.getFullYear();
    var hour = d.getHours();
    var min = d.getMinutes();
  
    /* TODO: complete the following statement such that the current time and date are shown with 
       a format similar to that of the corresponding figure in Lab07 specification */ 
    var result = "It's " + hour+ ":" + min + " Today is " + getDayOfWeekString(dayOfWeek)   + " (" + getMonthString(month) + " " + day+ ", " + year + ")."
    return result;
  }

  function getDayOfWeekString(dayOfWeek) {
    
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayOfWeek];
}

function getMonthString(month) {
  
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

