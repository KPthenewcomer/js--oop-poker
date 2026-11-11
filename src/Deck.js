import { Card } from "./Card.js";

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const names = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

export class Deck {
  constructor() {
    this.discardPile = [];
    this.cards = [];
    for (const suit of suits) {
      for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const value = i + 2;
        const card = new Card(suit, name, value);
        this.cards.push(card);
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }

  resetFromDiscardPile() {
    this.cards.push(...this.discardPile);
    this.discardPile = [];
  }
}
