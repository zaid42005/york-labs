//Jqeuerey stuff
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
script.integrity = "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=";
script.crossOrigin = "anonymous";
document.head.appendChild(script);

//get word from server
const fetchRandomWord = () => {
  $.getJSON("http://localhost:4001/random-word")
    .done((data) => {
      game.random_word = data.word;
      console.log(game.random_word);
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      console.error("Error fetching word:", errorThrown);
    });
};

//current game state
const game = {
  random_word: "",
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
  currentRow: 0,
  currentColumn: 0,
};

//making the wordle grid
function createGrid(container) {
  const grid = document.createElement("div");
  grid.className = "grid";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      createBox(grid, i, j);
    }
  }
  container.appendChild(grid);
}

function refreshGrid() {
  for (let i = 0; i < game.grid.length; i++) {
    for (let j = 0; j < game.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.textContent = game.grid[i][j];
    }
  }
}

function createBox(container, row, col, letter = "") {
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = letter;
  box.id = `box${row}${col}`;

  container.appendChild(box);
  return box;
}

//checking if word is in set with post request
function isWordInSet(word) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:4001/check-word",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ word: word }),
      success: function (data) {
        resolve(data.exists);
      },
      error: function (error) {
        console.error("Error:", error);
        reject(error);
      },
    });
  });
}

function getCurrentWord() {
  return game.grid[game.currentRow].reduce((prev, curr) => prev + curr);
}

//handling user input
function Keyboard() {
  //https://stackoverflow.com/questions/17593391/how-to-add-onkeydown-to-body
  document.body.onkeydown = (e) => {
    const key = e.key;
    if (key === "Enter") {
      if (game.currentColumn === 5) {
        const word = getCurrentWord();
        if (isWordInSet(word)) {
          onEnter(word);
          game.currentRow++;
          game.currentColumn = 0;
        } else {
          alert("Word not Found");
        }
      }
    }
    if (key === "Backspace") {
      removeLetter();
    }
    if (Letter(key)) {
      addLetter(key);
    }

    refreshGrid();
  };
}

function getInstances(word, letter) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      result++;
    }
  }
  return result;
}

function getPositions(word, letter, position) {
  let result = 0;
  for (let i = 0; i <= position; i++) {
    if (word[i] === letter) {
      result++;
    }
  }
  return result;
}

function Letter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
  if (game.currentColumn === 5) return;
  game.grid[game.currentRow][game.currentColumn] = letter;
  game.currentColumn++;
}

function removeLetter() {
  if (game.currentColumn === 0) return;
  game.grid[game.currentRow][game.currentColumn - 1] = "";
  game.currentColumn--;
}

//update colors of guesses
function onEnter(guess) {
  const row = game.currentRow;
  for (let i = 0; i < 5; i++) {
    const box = document.getElementById(`box${row}${i}`);
    const letter = box.textContent;
    const instancesRandomWord = getInstances(game.random_word, letter);
    const instancesGuess = getInstances(guess, letter);
    const letterPosition = getPositions(guess, letter, i);
    if (
      instancesGuess > instancesRandomWord &&
      letterPosition > instancesRandomWord
    ) {
      box.classList.add("empty");
    } else {
      if (letter === game.random_word[i]) {
        box.classList.add("right");
      } else if (game.random_word.includes(letter)) {
        box.classList.add("wrong");
      } else {
        box.classList.add("empty");
      }
    }
  }

  const Winner = game.random_word === guess;
  const GameOver = game.currentRow === 5;
  //update session stats storage
  if (Winner) {
    sessionStorage.setItem(
      "wins",
      parseInt(sessionStorage.getItem("wins") || 0) + 1
    );
    sessionStorage.setItem(
      "guesses",
      parseInt(sessionStorage.getItem("guesses") || 0) + 1 + game.currentRow
    );
    console.log(sessionStorage.getItem("wins"));
  } else if (GameOver) {
    sessionStorage.setItem(
      "losses",
      parseInt(sessionStorage.getItem("losses") || 0) + 1
    );
    console.log(sessionStorage.getItem("losses"));
    sessionStorage.setItem(
      "guesses",
      parseInt(sessionStorage.getItem("guesses") || 0) + 6
    );
  }
  // delay alert so colors update first
  setTimeout(() => {
    if (Winner) {
      alert(`You got it in ${game.currentRow} guesses.`);
    } else if (GameOver) {
      alert(`Nope, The word was ${game.random_word}.`);
    }
  });
}

// start game
function initializeGame() {
  const gameContainer = document.getElementById("game");
  gameContainer.innerHTML = "";
  game.random_word = "";
  game.grid = Array(6)
    .fill()
    .map(() => Array(5).fill(""));
  game.currentRow = 0;
  game.currentColumn = 0;
  createGrid(gameContainer);
  Keyboard();
  fetchRandomWord();
}
