let deckId;
const cardsContainer = document.getElementById("cards");
const score = document.getElementById("score");
const remainingText = document.getElementById("remaining");
const newDeck = document.getElementById("new-deck");
let computerScore = 0;
let myScore = 0;

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      remainingText.innerHTML = `Remaining Cards: ${data.remaining}`;
    });
}
handleClick();

newDeck.addEventListener("click", handleClick);
document.getElementById("draw-cards").addEventListener("click", (e) => {
  const currentEl = e.currentTarget;
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      remainingText.textContent = `Remaining Cards: ${data.remaining}`;
      cardsContainer.children[0].innerHTML = `<img src="${data.cards[0].image}">`;
      cardsContainer.children[1].innerHTML = `<img src="${data.cards[1].image}">`;
      const winnerText = determineCardWinner(
        data.cards[0].value,
        data.cards[1].value
      );
      score.innerHTML = winnerText;
      if (data.remaining == 0) {
        currentEl.disabled = true;

        if (computerScore > myScore) {
          score.textContent = "The computer won the game!";
        } else if (computerScore < myScore) {
          score.textContent = "You won the game!";
        } else {
          score.textContent = "It's a tie game!";
        }
        newDeck.addEventListener("click", () => {
          window.location.reload();
        });
      }
    });
});

function determineCardWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];

  const card1ValueIndex = valueOptions.indexOf(card1);
  const card2ValueIndex = valueOptions.indexOf(card2);

  if (card1ValueIndex == card2ValueIndex) {
    return "War!";
  }
  if (card1ValueIndex > card2ValueIndex) {
    computerScore++;
    document.getElementById(
      "computer-score"
    ).textContent = `Computer: ${computerScore}`;
    return "Computer wins";
  }
  if (card1ValueIndex < card2ValueIndex) {
    myScore++;
    document.getElementById("my-score").textContent = `Me: ${myScore}`;
    return "You win";
  }
}
