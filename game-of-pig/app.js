/*
GAME RULES:
- The game has 2 players, playing in rounds
- Each turn, player rolls the dice as many times as he wants. Each roll gets added to the ROUND score
- BUT, if the player rolls a 1, all that ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that the ROUND score gets added to the GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gameActive;

init();

// ROLL DICE EVENT
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameActive){
    var dice = Math.floor(Math.random() * 6) + 1;    // 1. Random Number

    var diceDOM = document.querySelector(".dice");   // 2. Display the Result
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if (dice !== 1){    // 3. Update round score IF the rolled number was NOT a 1
      roundScore += dice;
      document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {    // ELSE Next Player
      nextPlayer();
    }
  }
});

// HOLD SCORE EVENT
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameActive){
    var score = scores[activePlayer] += roundScore; // 1. Add roundScore to Global score
    document.getElementById("score-" + activePlayer).textContent = score;

    if (score >= 100) {   // 2. IF winner, end game
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      gameActive = false;
    } else {    // 3. ELSE Next Player
      nextPlayer();
    }
  }
});

// NEW GAME EVENT
document.querySelector(".btn-new").addEventListener("click", function () {
  init();
});

// NEXT PLAYER FUNCTION
function nextPlayer() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  roundScore = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

// INITIALIZE FUNCTION
function init() {
  // Reset Scores
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gameActive = true;
  // Hide Di
  document.querySelector(".dice").style.display = "none";

  // Reset UI
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
