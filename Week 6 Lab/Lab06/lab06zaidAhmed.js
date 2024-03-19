function problem1() {
  // this line will grab an integer from the input box.
  // but many problems will require string inputs!
  // you will have to change the code below accordingly.
  var num = parseInt(document.getElementById("input1").value);

  var answer;
  // write your problem 1 code here
  let prime = true;
  let d = 2;

  while (prime == true && d <= num / 2) {
    if (num % d == 0) {
      prime = false;
    }
    d = d + 1;
  }

  if (prime == true) {
    answer = num + " is prime";
  } else {
    answer = num + " is not prime";
  }

  // once you are done, write the result to the HTML page
  // as follows!
  document.getElementById("output1").innerHTML = answer;
}

// Write more code below!
function problem2() {
  var nums_input = document.getElementById("input2").value;
  var answer;
  let nums = nums_input.split(",").map(Number);
  let j = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= 4; i++) {
    sum1 = sum1 + nums[j];
    j++;
  }
  for (let i = 1; i <= 4; i++) {
    sum2 = sum2 + nums[j];
    j++;
  }

  if (sum1 == sum2) {
    answer = "yes";
  } else {
    answer = "no";
  }
  document.getElementById("output2").innerHTML = answer;
}

function problem3() {
  var nums_input = document.getElementById("input3").value;
  var answer;
  let nums = nums_input.split(",").map(Number);
  let p = 0;
  let n = 0;
  let j = 0;

  do {
    if (nums[j] > 0) {
      p++;
    } else if (nums[j] < 0) {
      n++;
    }
    j++;
  } while (nums[j] != 0 && p <= 2 * n);
  answer = "p =  " + p + " n = " + n;

  document.getElementById("output3").innerHTML = answer;
}

function problem4() {
  var nums_input = document.getElementById("input4").value;
  var answer;
  let nums = nums_input.split(",").map(Number);
  let j = 0;
  let count1 = 0;
  let count2 = 0;
  for (i = 1; i <= 4; i++) {
    if (nums[j] < 0) {
      count1++;
    }
    j++;
  }
  for (i = 1; i <= 4; i++) {
    if (nums[j] > 0) {
      count2++;
    }
    j++;
  }
  if (count1 == count2) {
    answer = "yes";
  } else {
    answer = "no";
  }
  document.getElementById("output4").innerHTML = answer;
}

function problem5() {
  var nums_input = document.getElementById("input5").value;
  var answer = "";

  for (let i = 2; i <= nums_input; i++) {
    if (prime(i)) {
      answer = answer + " " + i;
    }
  }
  function prime(num) {
    let flag = true;
    let d = 2;
    while (flag & (d <= num / 2)) {
      if (num % d == 0) {
        flag = false;
      }
      d++;
    }
    return flag;
  }
  document.getElementById("output5").innerHTML = answer;
}
function problem6() {
  function prime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function has5(num) {
    let flag = false;
    if (num.toString().includes("5")) {
      flag = true;
      return flag;
    }
    return flag;
  }

  var nums_input = parseInt(document.getElementById("input6").value);
  var answer = "";
  let result = [];
  for (let i = 2; i < nums_input; i++) {
    if (prime(i) && has5(i)) {
      result.push(i);
    }
  }

  answer = result.join(", ");
  document.getElementById("output6").innerHTML = answer;
}
