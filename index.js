let deckId;
const cardsContainer = document.getElementById("cards");
const score = document.getElementById("score");

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
    });
}
handleClick();

document.getElementById("new-deck").addEventListener("click", handleClick);
document.getElementById("draw-cards").addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.cards);
      cardsContainer.children[0].innerHTML = `<img src="${data.cards[0].image}">`;
      cardsContainer.children[1].innerHTML = `<img src="${data.cards[1].image}">`;
      determineCardWinner(data.cards[0].value, data.cards[1].value)
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

  const card1ValueIndex = valueOptions.indexOf(card1)
  const card2ValueIndex = valueOptions.indexOf(card2)

  if (card1ValueIndex == card2ValueIndex) {
    score.innerHTML = "War!";
  }
  if (card1ValueIndex > card2ValueIndex) {
    score.innerHTML = "Computer wins";
  }
  if (card1ValueIndex < card2ValueIndex) {
    score.innerHTML = "You win";
  }
}
