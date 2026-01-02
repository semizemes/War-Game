# War Game - API & Async JavaScript

A card game application built with vanilla JavaScript, HTML, CSS, and the Deck of Cards API. This project demonstrates key concepts in asynchronous JavaScript programming.

## Getting Started

Install the dependencies and run the project:

```bash
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite.

---

## Topics Covered

### 1. **Callbacks**
- Functions passed as arguments to other functions
- Event listeners using callbacks: `addEventListener("click", callback)`
- Handling asynchronous operations before Promises

### 2. **Functions as First-Class Objects**
- Functions stored in variables and passed around
- Event handlers like `(e) => { ... }` demonstrating functions as values
- Ability to assign, return, and manipulate functions dynamically

### 3. **Built Own Filter()**
- Custom implementation of array filtering logic
- Understanding how higher-order functions work
- Filtering card values to determine game winners

### 4. **Promises**
- **Three States:** Pending → Fulfilled → Rejected
- Understanding Promise lifecycle in API calls
- **`.then()` Chaining:** Processing data sequentially from resolved Promises
- Error handling with Promise chains

### 5. **Async/Await**
- **Syntactic sugar** over Promises for cleaner code
- `async` function declarations enable `await` keyword
- Makes asynchronous code look and behave more like synchronous code
- Error handling with try/catch blocks

**Example from project:**
```javascript
async function handleClick() {
  const res = await fetch(
    "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
  );
  const data = await res.json();
  deckId = data.deck_id;
  remainingText.innerHTML = `Remaining Cards: ${data.remaining}`;
}
```

### 6. **Deck of Cards API**
- External API integration: `https://apis.scrimba.com/deckofcards/api/`
- Fetching new shuffled decks
- Drawing cards from a deck
- Parsing JSON responses
- Managing deck state with unique `deck_id`

### 7. **Styling & Layout**
- CSS Grid/Flexbox for responsive card display
- Button styling and state management (disabled buttons)
- Dynamic content rendering with innerHTML
- Real-time score and card count updates

### 8. **Algorithm Practice**
- Card value comparison logic
- Winner determination based on card face values
- Game state management (scores, remaining cards)
- Final game outcome calculation

### 9. **UX Improvements**
- Real-time display of remaining cards
- Live score tracking (Computer vs. Player)
- Game completion detection
- Disabled draw button when deck runs out
- Deck shuffle reset functionality

---

## How the Game Works

1. **Start Game:** Click "Shuffle Deck" to initialize a new game with 52 cards
2. **Draw Cards:** Click "Draw" to draw 2 cards (one for you, one for the computer)
3. **Compare:** The app compares card values and awards points to the winner
4. **Repeat:** Continue drawing until all 52 cards are used
5. **Results:** View final winner (player, computer, or tie)

---

## Key Concepts Applied

| Concept | Usage |
|---------|-------|
| **Async/Await** | Fetching API data cleanly and readably |
| **Event Listeners** | Handling button clicks with callbacks |
| **API Integration** | Real-time data from external Deck API |
| **DOM Manipulation** | Updating scores, cards, and game state |
| **Error Handling** | Managing failed API requests |
| **State Management** | Tracking deck ID, scores, and remaining cards |

---

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling and layout
- **Vanilla JavaScript** - ES6+ (async/await, arrow functions, template literals)
- **Vite** - Build tool and dev server
- **Deck of Cards API** - External data source

---

Happy Coding!