let fristCard = 6;
let SecondCard = 9;
let cards = [fristCard, SecondCard];
let sum = fristCard + SecondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You're got Blackjack! 🥳";
    hasBlackJack = ttue;
  } else {
    message = "You're out of the game 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum : " + sum;
  cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1];
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let card = 7;
  cards.push(card);
  sum += cards[2];
  renderGame();
  cardsEl.textContent = `Cards : ${cards[0]} ${cards[1]} ${cards[2]}`;
}
