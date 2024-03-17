function problem_09() {
  var outputObj = document.getElementById("output");
  var number = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML =
    "Input number: " + number + "<br><br>The number of 5s: ";
  let count = 0;
  while (number > 0) {
    if (number % 10 === 5) {
      count++;
    }
    number = Math.floor(number / 10);
  }

  outputObj.innerHTML += count;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}
function problem_10() {
  var outputObj = document.getElementById("output");

  var num = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "Input number: " + num + "<br><br>";

  let multiplication = 1;
  let count = 0;

  while (num > 0 && count < 5) {
    let digit = num % 10;
    multiplication *= digit;
    num = Math.floor(num / 10);
    count++;
  }

  outputObj.innerHTML =
    outputObj.innerHTML +
    "multiplication of final " +
    count +
    " digits: " +
    multiplication;
  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

function problem_11() {
  var outputObj = document.getElementById("output");

  var num = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "number: " + num + "<br><br>";

  let result = [];
  while (num > 0) {
    let digit = num % 10;
    result.push(digit * 2);
    num = Math.floor(num / 10);
  }

  outputstring = result.toString();

  outputObj.innerHTML =
    outputObj.innerHTML + "its digits, after doubling:" + outputstring;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

function problem_12() {
  var outputObj = document.getElementById("output");

  var num = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "number: " + num + "<br><br>";

  let prevDigit = num % 10;
  num = Math.floor(num / 10);

  while (num > 0) {
    let currentDigit = num % 10;
    if (currentDigit > prevDigit) {
      outputstring = "no";
      break;
    } else {
      outputstring = "yes"; 
    }
    num = Math.floor(num / 10);
  }


  outputObj.innerHTML =
    outputObj.innerHTML + "number in non-decreasing order? " + outputstring;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}


function problem_13() {
  var outputObj = document.getElementById("output");
  var num = parseInt(document.getElementById("numberInput").value); // Get the value from the input field  
  //var num = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "number: " + num + "<br><br>";

  let sequence = [];
    for (let i = 1; i <= num; i++){
        let term = Math.pow(2, i) - 1;
        sequence.push(term);
    }
    outputstring =  sequence.toString();

  outputObj.innerHTML =
    outputObj.innerHTML + outputstring;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

//you will write additional functions below.
//function problem_10() {
//}
