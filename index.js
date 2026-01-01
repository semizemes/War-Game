let deckId;
const cardsContainer = document.getElementById("cards")

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
      console.log(data.cards[0].image);
      cardsContainer.children[0].innerHTML = `<img src="${data.cards[0].image}">`
      cardsContainer.children[1].innerHTML = `<img src="${data.cards[1].image}">`
    });
});
