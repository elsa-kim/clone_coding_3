let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Per",
  chips: 200,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let fristCard = getRandomCard();
  let SecondCard = getRandomCard();
  cards = [fristCard, SecondCard];
  sum = fristCard + SecondCard;
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You're got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum : " + sum;
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}
