function playGame() {
  var choices = ["ROCK", "PAPER", "SCISSORS"];
  var player1Choice = Math.floor(Math.random() * 3) + 1;
  var player2Choice = Math.floor(Math.random() * 3) + 1;
  var player1Text = "Player 1 plays " + choices[player1Choice - 1];
  var player2Text = "Player 2 plays " + choices[player2Choice - 1];
  var winnerText = "";

  document.getElementById("mydata").innerHTML =
    player1Text + " and " + player2Text;

  if (player1Choice === player2Choice) {
    winnerText = "TIE!";
    incrementCounter("ties");
    alert("tie");
  } else if (
    (player1Choice === 1 && player2Choice === 3) ||
    (player1Choice === 2 && player2Choice === 1) ||
    (player1Choice === 3 && player2Choice === 2)
  ) {
    winnerText = "Winner: Player 1";
    incrementCounter("player1Wins");
  } else {
    winnerText = "Winner: Player 2";
    incrementCounter("player2Wins");
  }
  document.getElementById("winner").innerHTML = winnerText;
}

function incrementCounter(counterName) {
  var counterElement = document.getElementById(counterName);
  var count = parseInt(counterElement.textContent);
  if (!isNaN(count)) {
  
    counterElement.textContent = ++count;
  } else {
    
    counterElement.textContent = "1";
  }
}


