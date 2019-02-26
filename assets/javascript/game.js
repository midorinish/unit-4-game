$(document).ready(function() {
  var counter = 0;
  var wins = 0;
  var losses = 0;

  function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var guessNumber = randomNum(19, 120);
  $("#guess").html(guessNumber);

  var crystalOne = randomNum(1, 12);
  var crystalTwo = randomNum(1, 12);
  var crystalThree = randomNum(1, 12);
  var crystalFour = randomNum(1, 12);

  function reset() {
    counter = 0;
    $("#guess").html(guessNumber);
    guessNumber = randomNum(19, 120);
    $("#guessNumber").text(counter);
    crystalOne = randomNum(1, 12);
    crystalTwo = randomNum(1, 12);
    crystalThree = randomNum(1, 12);
    crystalFour = randomNum(1, 12);
  }

  $("#blueGem").on("click", function() {
    counter += crystalOne;
    WinLose();
    $(playerScore).text(counter);
  });

  $("#diamondGem").on("click", function() {
    counter += crystalTwo;
    WinLose();
    $(playerScore).text(counter);
  });

  $("#rainbowGem").on("click", function() {
    counter += crystalThree;
    WinLose();
    $(playerScore).text(counter);
  });

  $("#purpleGem").on("click", function() {
    counter += crystalFour;
    WinLose();
    $(playerScore).text(counter);
  });

  function WinLose() {
    if (counter === guessNumber) {
      wins++;
      alert("Winner!");
      $(win).text(wins);
      reset();
    } else if (counter > guessNumber) {
      losses++;
      alert("You Lose!");
      $(loss).text(losses);
      reset();
    }
  }
});
