export class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  addCard(card) {
    this.hand.push(card);
  }

  getHandValue() {
    let sum = 0;
    for (const card of this.hand) {
      sum += card.value;
    }
    return sum;
  }

  discard(index) {
    if (index >= 0 && index < this.hand.length) {
      const discardedCard = this.hand.splice(index, 1)[0];
      return discardedCard;
    } else {
      console.log("Invalid index. Cannot discard card.");
      return null;
    }
  }
}
