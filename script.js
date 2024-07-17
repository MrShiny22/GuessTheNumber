"use strict";

let random_number = Math.trunc(Math.random() * 20) + 1;
console.log(random_number);
let score = 20;
let highscore = 0;

// This is the function When Try Again Buttin is pressed!
document.querySelector(".TryAgainBTN").addEventListener("click", function () {
  random_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#6dcffd";
  score = 20;
  document.querySelector(".scorespan").textContent = score;
  document.querySelector(".status").textContent =
    "Start Guessing Number Between 1 - 20";
  document.querySelector(".inputBOX").value = "";
});

// This is the function when Guess Button is pressed!
document.querySelector(".guessBTN").addEventListener("click", function () {
  let player_guess = document.querySelector(".inputBOX").value;

  // This Checks if it's a Negative Value or any Invalid Value
  if (
    document.querySelector(".inputBOX").value == "" ||
    null ||
    undefined ||
    document.querySelector(".inputBOX").value < 1 ||
    document.querySelector(".inputBOX").value > 20
  ) {
    document.querySelector(".status").textContent =
      "Not A Valid Guess, Try Between 1- 20 🔔";
  } else {
    // The Actual Guessing Part Starts from here

    if (player_guess == random_number) {
      // For Correct Guess!

      if (score > highscore) {
        // This for changing the Highscore to new one

        highscore = score;
        document.querySelector(".highscorespan").textContent = highscore;
      }
      document.querySelector(".status").textContent = "Correct Guess! 🎊";
      document.querySelector("body").style.backgroundColor = "#45f75d";
    } else if (player_guess > random_number) {
      // If Guess is High!

      if (score < 1) {
        document.querySelector(".status").textContent = "Try Again! 🧨";
      } else {
        score--;
        document.querySelector(".scorespan").textContent = score;
        document.querySelector(".status").textContent = "Too High! 🧨";
        document.querySelector("body").style.backgroundColor = "#bff745";
      }
    } else if (player_guess < random_number) {
      // If Guess is Low!

      if (score < 1) {
        document.querySelector(".status").textContent = "Try Again! 🧨";
      } else {
        score--;
        document.querySelector(".scorespan").textContent = score;
        document.querySelector(".status").textContent = "Too Low! 🎷";
        document.querySelector("body").style.backgroundColor = "#95c234";
      }
    }
  }
});
