import { Deck } from "./Deck.js";
import { Player } from "./Player.js";

// ===== Del 1: Skapa en kortlek med 52 kort och blanda den =====
console.log("\n===== DEL 1 =====");

const deck = new Deck();
console.log("Ny kortlek:", deck.cards);
console.log("Antal kort:", deck.cards.length); // 52

deck.shuffle();
console.log("Blandad kortlek:", deck.cards);

// ===== Del 2: Skapa spelare och dela ut 5 kort var =====
console.log("\n===== DEL 2 =====");

const slim = new Player("Slim");
const luke = new Player("Luke");
console.log("Spelare:", slim, luke);

for (let i = 0; i < 5; i++) {
  slim.addCard(deck.draw());
  luke.addCard(deck.draw());
}

console.log("Kortlek:", deck.cards);
console.log("Kort kvar i leken:", deck.cards.length); // 42
console.log("Slims hand:", slim.hand, "Summa:", slim.getHandValue());
console.log("Lukes hand:", luke.hand, "Summa:", luke.getHandValue());

// ===== Del 3: Släng 2 kort var och dra 2 nya =====
console.log("\n===== DEL 3 =====");

for (let i = 0; i < 2; i++) {
  deck.discardPile.push(slim.discard(0));
  deck.discardPile.push(luke.discard(0));
}

for (let i = 0; i < 2; i++) {
  slim.addCard(deck.draw());
  luke.addCard(deck.draw());
}

console.log("Kortlek:", deck.cards);
console.log("Kort kvar i leken:", deck.cards.length); // 38
console.log("Kort i kasthögen:", deck.discardPile.length); // 4
console.log("Slims hand:", slim.hand, "Summa:", slim.getHandValue());
console.log("Lukes hand:", luke.hand, "Summa:", luke.getHandValue());

// ===== Del 4: Släng alla kort, flytta tillbaka till leken och blanda =====
console.log("\n===== DEL 4 =====");

while (slim.hand.length > 0) {
  deck.discardPile.push(slim.discard(0));
}
while (luke.hand.length > 0) {
  deck.discardPile.push(luke.discard(0));
}

deck.resetFromDiscardPile();
deck.shuffle();

console.log("Blandad kortlek:", deck.cards);
console.log("Kort i leken:", deck.cards.length); // 52
console.log("Kort i kasthögen:", deck.discardPile.length); // 0
console.log("Slims kort:", slim.hand.length); // 0
console.log("Lukes kort:", luke.hand.length); // 0
