document.addEventListener("DOMContentLoaded", function () {
  const winsElement = document.getElementById("wins");
  const guessesElement = document.getElementById("guesses");
  const lossesElement = document.getElementById("losses");
  const ratioElement = document.getElementById("average");

  const wins = sessionStorage.getItem("wins") || 0;
  const losses = sessionStorage.getItem("losses") || 0;
  const guesses = sessionStorage.getItem("guesses") || 0;

  // update stats
  winsElement.innerHTML = `Total Wins Today: ${wins}`;
  lossesElement.innerHTML = `Total Losses Today: ${losses}`;
  guessesElement.innerHTML = `Total Guesses Today: ${guesses}`;
  ratioElement.innerHTML = `Average Guesses: ${Math.ceil(parseInt(guesses) / (parseInt(losses) + parseInt(wins))) || 0}`;

  //Quote API: https://api.quotable.io/random
  const script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.6.1.min.js";
  script.integrity = "sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=";
  script.crossOrigin = "anonymous";
  script.onload = function () {
    $("#getQuote").click(async function () {
      try {
        const response = await $.ajax({
          url: "http://localhost:4001/random-quote",
          type: "GET",
          dataType: "json",
        });

        $("#quote").text(response.quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    });
  };

  document.head.appendChild(script);
});
