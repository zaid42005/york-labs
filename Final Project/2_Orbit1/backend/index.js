const express = require("express");
const fs = require("fs");
const cors = require("cors"); // using cors so transfer between frontend and backend doesn't get blocked by no cors policy
const app = express();
const axios = require("axios");

app.use(cors());
app.use(express.json());
// the wordle file I'm using is pulled from here https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93, I've filtered it out but if any weird words are in it I apologize in advance
// read file and convert to array to choose randomly from
const words = fs
  .readFileSync("wordle-bank.txt", "utf8")
  .split("\n")
  .map((word) => word.trim());

//convert array to set so post request can compare using has Function
const wordSet = new Set(words);

//choose random word
app.get("/random-word", (req, res) => {
  if (words.length === 0) {
    return res.status(500).json({ error: "No words found" });
  }

  const randomWord = words[Math.floor(Math.random() * words.length)];
  console.log("Random word:", randomWord);

  res.json({ word: randomWord });
});

//random quote
app.get("/random-quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    const quote = response.data.content;
    res.json({ quote });
  } catch (error) {
    console.error("Error fetching quote:", error);
    // test by just entering the url into a browser
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

//check word in set
app.post("/check-word", (req, res) => {
  const { word } = req.body;
  const exists = wordSet.has(word);
  res.json({ exists });
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
